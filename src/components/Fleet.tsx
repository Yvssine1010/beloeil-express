import { motion } from "framer-motion";
import { Users } from "lucide-react";

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

const VehicleCard = ({ v }: { v: typeof vehicles[number] }) => (
  <div className="flex-shrink-0 w-[300px] md:w-[350px]">
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
);

const Fleet = () => {
  // Duplicate vehicles for seamless loop
  const doubled = [...vehicles, ...vehicles];

  return (
    <section id="flotte" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-3 font-semibold">Notre flotte</p>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Des véhicules{" "}
            <span className="text-primary relative inline-block">
              modernes
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full" />
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">Choisissez le véhicule adapté à vos besoins.</p>
        </motion.div>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused]">
          {doubled.map((v, i) => (
            <VehicleCard key={i} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
