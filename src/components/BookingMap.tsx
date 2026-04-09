import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Search, X, Loader2, Phone, LocateFixed } from "lucide-react";
import { toast } from "sonner";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Beloeil center coordinates
const BELOEIL_CENTER: [number, number] = [45.5688, -73.2054];
const DEFAULT_ZOOM = 13;

interface GeoResult {
  display_name: string;
  lat: string;
  lon: string;
}

const createIcon = (color: string, label: string) =>
  L.divIcon({
    className: "",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
    html: `<div style="
      width:36px;height:36px;border-radius:50%;
      background:${color};border:3px solid white;
      box-shadow:0 2px 8px rgba(0,0,0,0.3);
      display:flex;align-items:center;justify-content:center;
      color:white;font-weight:700;font-size:14px;
    ">${label}</div>`,
  });

const startIcon = createIcon("#22c55e", "A");
const endIcon = createIcon("#ef4444", "B");

const BookingMap = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const startMarkerRef = useRef<L.Marker | null>(null);
  const endMarkerRef = useRef<L.Marker | null>(null);
  const routeLayerRef = useRef<L.Polyline | null>(null);

  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureCoords, setDepartureCoords] = useState<[number, number] | null>(null);
  const [destinationCoords, setDestinationCoords] = useState<[number, number] | null>(null);
  const [departureSuggestions, setDepartureSuggestions] = useState<GeoResult[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<GeoResult[]>([]);
  const [loadingRoute, setLoadingRoute] = useState(false);
  const [routeInfo, setRouteInfo] = useState<{ distance: string; duration: string } | null>(null);
  const [activeField, setActiveField] = useState<"departure" | "destination" | null>(null);
  const [geolocating, setGeolocating] = useState<"departure" | "destination" | null>(null);

  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: BELOEIL_CENTER,
      zoom: DEFAULT_ZOOM,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Geocode address
  const geocode = useCallback(async (query: string): Promise<GeoResult[]> => {
    if (query.length < 3) return [];
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=ca&limit=5&addressdetails=1`
      );
      return await res.json();
    } catch {
      return [];
    }
  }, []);

  const debouncedGeocode = useCallback(
    (query: string, setter: (r: GeoResult[]) => void) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(async () => {
        const results = await geocode(query);
        setter(results);
      }, 400);
    },
    [geocode]
  );

  // Fetch route from OSRM
  const fetchRoute = useCallback(async (start: [number, number], end: [number, number]) => {
    setLoadingRoute(true);
    try {
      const res = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`
      );
      const data = await res.json();
      if (data.routes?.[0]) {
        const route = data.routes[0];
        const coords = route.geometry.coordinates.map(
          (c: [number, number]) => [c[1], c[0]] as [number, number]
        );

        if (routeLayerRef.current && mapRef.current) {
          mapRef.current.removeLayer(routeLayerRef.current);
        }

        const polyline = L.polyline(coords, {
          color: "hsl(202, 33%, 55%)",
          weight: 5,
          opacity: 0.8,
          smoothFactor: 1,
        });

        if (mapRef.current) {
          polyline.addTo(mapRef.current);
          routeLayerRef.current = polyline;

          const bounds = L.latLngBounds([start, end]);
          mapRef.current.fitBounds(bounds.pad(0.3), { animate: true });
        }

        const distKm = (route.distance / 1000).toFixed(1);
        const durMin = Math.ceil(route.duration / 60);
        setRouteInfo({ distance: `${distKm} km`, duration: `${durMin} min` });
      }
    } catch {
      console.error("Route fetch failed");
    } finally {
      setLoadingRoute(false);
    }
  }, []);

  // Update markers and route
  useEffect(() => {
    if (!mapRef.current) return;

    if (departureCoords) {
      if (startMarkerRef.current) {
        startMarkerRef.current.setLatLng(departureCoords);
      } else {
        startMarkerRef.current = L.marker(departureCoords, { icon: startIcon })
          .addTo(mapRef.current)
          .bindPopup(`<b>Départ</b><br/>${departure}`);
      }
      startMarkerRef.current.setPopupContent(`<b>Départ</b><br/>${departure}`);
      if (!destinationCoords) {
        mapRef.current.flyTo(departureCoords, 15, { animate: true });
      }
    }

    if (destinationCoords) {
      if (endMarkerRef.current) {
        endMarkerRef.current.setLatLng(destinationCoords);
      } else {
        endMarkerRef.current = L.marker(destinationCoords, { icon: endIcon })
          .addTo(mapRef.current)
          .bindPopup(`<b>Arrivée</b><br/>${destination}`);
      }
      endMarkerRef.current.setPopupContent(`<b>Arrivée</b><br/>${destination}`);
      if (!departureCoords) {
        mapRef.current.flyTo(destinationCoords, 15, { animate: true });
      }
    }

    if (departureCoords && destinationCoords) {
      fetchRoute(departureCoords, destinationCoords);
    } else {
      if (routeLayerRef.current && mapRef.current) {
        mapRef.current.removeLayer(routeLayerRef.current);
        routeLayerRef.current = null;
      }
      setRouteInfo(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [departureCoords, destinationCoords, fetchRoute]);

  const selectSuggestion = (
    result: GeoResult,
    type: "departure" | "destination"
  ) => {
    const coords: [number, number] = [parseFloat(result.lat), parseFloat(result.lon)];
    if (type === "departure") {
      setDeparture(result.display_name);
      setDepartureCoords(coords);
      setDepartureSuggestions([]);
    } else {
      setDestination(result.display_name);
      setDestinationCoords(coords);
      setDestinationSuggestions([]);
    }
    setActiveField(null);
  };

  const clearField = (type: "departure" | "destination") => {
    if (type === "departure") {
      setDeparture("");
      setDepartureCoords(null);
      setDepartureSuggestions([]);
      if (startMarkerRef.current && mapRef.current) {
        mapRef.current.removeLayer(startMarkerRef.current);
        startMarkerRef.current = null;
      }
    } else {
      setDestination("");
      setDestinationCoords(null);
      setDestinationSuggestions([]);
      if (endMarkerRef.current && mapRef.current) {
        mapRef.current.removeLayer(endMarkerRef.current);
        endMarkerRef.current = null;
      }
    }
  };

  const reverseGeocode = useCallback(async (lat: number, lon: number): Promise<string> => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
      );
      const data = await res.json();
      return data.display_name || `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
    } catch {
      return `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
    }
  }, []);

  const handleGeolocate = useCallback((field: "departure" | "destination") => {
    if (!navigator.geolocation) {
      toast.error("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }
    setGeolocating(field);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords: [number, number] = [position.coords.latitude, position.coords.longitude];
        const address = await reverseGeocode(coords[0], coords[1]);
        if (field === "departure") {
          setDeparture(address);
          setDepartureCoords(coords);
          setDepartureSuggestions([]);
        } else {
          setDestination(address);
          setDestinationCoords(coords);
          setDestinationSuggestions([]);
        }
        setGeolocating(null);
      },
      (error) => {
        setGeolocating(null);
        if (error.code === error.PERMISSION_DENIED) {
          toast.error("Accès à la position refusé. Veuillez saisir l'adresse manuellement.");
        } else {
          toast.error("Impossible de récupérer votre position. Veuillez réessayer.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, [reverseGeocode]);

  return (
    <section id="reservation" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-2">
            Planifiez votre trajet
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground">
            Réservez votre course
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Entrez votre départ et destination pour visualiser le trajet en temps réel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-6 max-w-6xl mx-auto">
          {/* Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 shadow-sm h-fit"
          >
            {/* Departure */}
            <div className="mb-4 relative">
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                Adresse de départ
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={departure}
                  onChange={(e) => {
                    setDeparture(e.target.value);
                    debouncedGeocode(e.target.value, setDepartureSuggestions);
                  }}
                  onFocus={() => setActiveField("departure")}
                  placeholder="Ex: 123 rue Principale, Beloeil"
                  className="w-full h-11 pl-9 pr-16 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <button
                    onClick={() => handleGeolocate("departure")}
                    disabled={geolocating === "departure"}
                    className="p-1 rounded-lg text-primary hover:bg-primary/10 transition-colors disabled:opacity-50"
                    title="Utiliser ma position"
                  >
                    {geolocating === "departure" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <LocateFixed className="w-4 h-4" />
                    )}
                  </button>
                  {departure && (
                    <button
                      onClick={() => clearField("departure")}
                      className="p-1 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              {activeField === "departure" && departureSuggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-card border border-border rounded-xl shadow-lg max-h-48 overflow-y-auto">
                  {departureSuggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => selectSuggestion(s, "departure")}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors flex items-start gap-2 border-b border-border/50 last:border-0"
                    >
                      <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="line-clamp-2 text-foreground">{s.display_name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Connection line */}
            <div className="flex items-center gap-3 ml-2.5 -my-1">
              <div className="w-0.5 h-6 bg-border rounded-full" />
            </div>

            {/* Destination */}
            <div className="mb-6 relative">
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">B</span>
                </div>
                Adresse d'arrivée
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    debouncedGeocode(e.target.value, setDestinationSuggestions);
                  }}
                  onFocus={() => setActiveField("destination")}
                  placeholder="Ex: Aéroport Montréal-Trudeau"
                  className="w-full h-11 pl-9 pr-16 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <button
                    onClick={() => handleGeolocate("destination")}
                    disabled={geolocating === "destination"}
                    className="p-1 rounded-lg text-primary hover:bg-primary/10 transition-colors disabled:opacity-50"
                    title="Utiliser ma position"
                  >
                    {geolocating === "destination" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <LocateFixed className="w-4 h-4" />
                    )}
                  </button>
                  {destination && (
                    <button
                      onClick={() => clearField("destination")}
                      className="p-1 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              {activeField === "destination" && destinationSuggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-card border border-border rounded-xl shadow-lg max-h-48 overflow-y-auto">
                  {destinationSuggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => selectSuggestion(s, "destination")}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors flex items-start gap-2 border-b border-border/50 last:border-0"
                    >
                      <MapPin className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                      <span className="line-clamp-2 text-foreground">{s.display_name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Route Info */}
            {loadingRoute && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Loader2 className="w-4 h-4 animate-spin" />
                Calcul de l'itinéraire...
              </div>
            )}

            {routeInfo && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary/10 rounded-xl p-4 mb-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{routeInfo.distance}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">~{routeInfo.duration}</span>
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <a
              href="tel:+15794216049"
              className="flex items-center justify-center gap-2 w-full h-12 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Réserver maintenant
            </a>

            <p className="text-xs text-muted-foreground text-center mt-3">
              Ou appelez le <a href="tel:+15794216049" className="text-primary font-medium">579-421-6049</a>
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border shadow-sm min-h-[400px] lg:min-h-[500px]"
          >
            <div ref={mapContainerRef} className="w-full h-full min-h-[400px] lg:min-h-[500px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingMap;
