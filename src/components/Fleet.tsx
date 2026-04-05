import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Users } from "lucide-react";

import fleetAudi from "@/assets/fleet-audi.jpg";
import fleetHyundai from "@/assets/fleet-hyundai.jpg";
import taxiSienna from "@/assets/taxi-sienna.webp";
import heroTesla from "@/assets/hero-tesla.jpg";
import fleetMercedes from "@/assets/fleet-mercedes.jpg";
import taxiCamry from "@/assets/taxi-camry.webp";

const vehicles = [
  { name: "Berline Confort", desc: "Audi — Confort et élégance", seats: 4, img: fleetAudi },
  { name: "SUV Premium", desc: "Hyundai Santa Fe — Spacieux", seats: 5, img: fleetHyundai },
  { name: "Minivan Familial", desc: "Toyota Sienna — Idéal familles", seats: 7, img: taxiSienna },
  { name: "Hybride Éco", desc: "Tesla — Zéro émission", seats: 4, img: heroTesla },
  { name: "Berline Luxe", desc: "Mercedes — Prestige absolu", seats: 4, img: fleetMercedes },
  { name: "Van Accessible", desc: "Toyota Camry — Polyvalent", seats: 4, img: taxiCamry },
];

const Fleet = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="flotte" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-end justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Notre flotte</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground">
              Des véhicules <span className="text-primary">modernes</span>
            </h2>
            <p className="text-muted-foreground mt-2">Choisissez le véhicule adapté à vos besoins.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {vehicles.map((v, i) => (
              <div key={i} className="flex-shrink-0 basis-[85%] md:basis-[45%] lg:basis-[30%]">
                <div className="relative rounded-xl overflow-hidden group">
                  <img src={v.img} alt={v.name} className="h-64 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-white">{v.name}</h3>
                    <p className="text-white/60 text-sm mb-2">{v.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-white/60 text-xs">
                        <Users className="w-3.5 h-3.5" /> {v.seats} places
                      </span>
                      <a
                        href="tel:+15794216049"
                        className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {vehicles.map((_, i) => (
            <button
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-6 bg-primary" : "w-2 bg-foreground/20"
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
