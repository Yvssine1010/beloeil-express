import { motion } from "framer-motion";
import { Clock, DollarSign, Shield, Car, MapPin, CalendarCheck, ThumbsUp, Zap } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Disponibilité 24/7", desc: "Jour et nuit, nous sommes toujours là pour vous." },
  { icon: DollarSign, title: "Prix transparents", desc: "Aucun frais caché. Tarifs clairs et compétitifs." },
  { icon: Shield, title: "Chauffeurs pro", desc: "Expérimentés, courtois et titulaires de permis." },
  { icon: Car, title: "Véhicules modernes", desc: "Flotte récente, propre et bien entretenue." },
  { icon: Zap, title: "Ponctualité", desc: "Toujours à l'heure pour vos rendez-vous importants." },
  { icon: MapPin, title: "Couverture régionale", desc: "Beloeil, Saint-Hilaire, Mont-Saint-Hilaire et plus." },
  { icon: CalendarCheck, title: "Réservation facile", desc: "Par téléphone, WhatsApp ou en ligne." },
  { icon: ThumbsUp, title: "Satisfaction client", desc: "Des milliers de clients satisfaits nous font confiance." },
];

const WhyUs = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-widest text-primary mb-2">Pourquoi nous choisir</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground mb-3">
          La confiance, à chaque <span className="text-primary">trajet</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Découvrez ce qui fait de Taxi Beloeil le choix numéro un de la région.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="bg-foreground/5 border border-foreground/10 rounded-xl p-6 hover:bg-foreground/10 hover:border-primary/30 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
