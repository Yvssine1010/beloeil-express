import { motion } from "framer-motion";
import { Car, Plane, Battery, KeyRound, Users, Clock } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    icon: Car,
    tag: "Transport",
    title: "Taxi local",
    desc: "Courses dans Beloeil, Saint-Hilaire et les environs. Service rapide et ponctuel.",
    price: "Dès 8$",
    color: "rgba(100,151,177,0.15)",
  },
  {
    icon: Plane,
    tag: "Aéroport",
    title: "Transport aéroport",
    desc: "Transferts vers YUL Montréal-Trudeau et tous les aéroports. Tarif fixe, sans surprise.",
    price: "Tarif fixe",
    color: "rgba(34,197,94,0.15)",
  },
  {
    icon: Battery,
    tag: "Assistance",
    title: "Survoltage batterie",
    desc: "Batterie à plat ? Nous intervenons rapidement pour recharger votre véhicule.",
    price: "25$",
    color: "rgba(168,85,247,0.15)",
  },
  {
    icon: KeyRound,
    tag: "Assistance",
    title: "Déblocage de porte",
    desc: "Clés oubliées dans l'auto ? Notre équipe vous débloque en quelques minutes.",
    price: "Sur devis",
    color: "rgba(239,68,68,0.15)",
  },
  {
    icon: Users,
    tag: "Groupe",
    title: "Transport de groupe",
    desc: "Minivan et véhicules spacieux pour vos sorties en famille ou entre amis.",
    price: "Sur devis",
    color: "rgba(245,158,11,0.15)",
  },
  {
    icon: Clock,
    tag: "24/7",
    title: "Service de nuit",
    desc: "Disponible à toute heure, week-ends et jours fériés inclus.",
    color: "rgba(6,182,212,0.15)",
  },
];

const Services = () => (
  <section id="services" className="py-20 bg-foreground/95">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-widest text-primary mb-2">Nos services</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-white mb-3">
          Tout ce dont vous avez <span className="text-primary">besoin</span>
        </h2>
        <p className="text-white/60 max-w-lg mx-auto">
          Du transport quotidien à l'assistance routière, nous sommes là pour vous.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <SpotlightCard spotlightColor={s.color}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs text-primary/70">{s.tag}</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-white/60 mb-3">{s.desc}</p>
              {s.price && (
                <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {s.price}
                </span>
              )}
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
