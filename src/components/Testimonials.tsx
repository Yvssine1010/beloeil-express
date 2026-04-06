import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import taxiCamry from "@/assets/taxi-camry.webp";

const testimonials = [
  {
    text: "Service impeccable ! Le chauffeur était ponctuel et très professionnel. Je recommande vivement Taxi Beloeil.",
    name: "Marie L.",
    city: "Beloeil",
  },
  {
    text: "Transport aéroport parfait. Prix fixe, voiture propre et confortable. Mon choix #1 pour mes déplacements.",
    name: "Jean-Pierre D.",
    city: "Saint-Hilaire",
  },
  {
    text: "Disponible même à 3h du matin ! Merci pour votre fiabilité. Le service 24/7 est vraiment un plus.",
    name: "Sophie M.",
    city: "Mont-Saint-Hilaire",
  },
];

const stats = [
  { value: "12K+", label: "Trajets" },
  { value: "24/7", label: "Disponible" },
  { value: "5★", label: "Satisfaction" },
];

const Testimonials = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Témoignages</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground mb-8">
              Ce que disent nos <span className="text-primary">clients</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 hover:bg-foreground/10 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <div className="flex gap-1 mb-3">
                  {Array(5).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.city}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <motion.img
            src={taxiCamry}
            alt="Taxi Beloeil"
            className="w-full h-[500px] object-cover rounded-2xl border border-white/10 mb-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
