import { motion } from "framer-motion";
import { Clock, Shield, Award, Heart } from "lucide-react";
import taxiSienna from "@/assets/taxi-sienna.webp";

const features = [
  { icon: Clock, label: "Disponible 24/7" },
  { icon: Shield, label: "100% Fiable" },
  { icon: Award, label: "Chauffeurs expérimentés" },
  { icon: Heart, label: "Service personnalisé" },
];

const About = () => (
  <section id="apropos" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-2">À propos</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground mb-4">
            Votre partenaire de transport de <span className="text-primary">confiance</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Taxi Beloeil Saint-Hilaire offre un service de transport fiable et professionnel dans la région de Beloeil et Mont-Saint-Hilaire depuis plusieurs années.
          </p>
          <p className="text-muted-foreground mb-8">
            Notre équipe de chauffeurs expérimentés s'engage à fournir un service ponctuel, sécuritaire et courtois, que ce soit pour vos déplacements quotidiens ou vos transferts vers l'aéroport.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3 bg-foreground/5 rounded-xl p-3 border border-foreground/10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{f.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={taxiSienna}
            alt="Toyota Sienna Taxi Beloeil"
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl border border-foreground/10"
          />
          <div className="absolute bottom-4 right-4 bg-primary rounded-xl px-5 py-3 shadow-lg">
            <span className="text-3xl font-bold text-primary-foreground">12K+</span>
            <p className="text-xs text-primary-foreground/80">Trajets effectués</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
