import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarCheck, ArrowDown } from "lucide-react";
import heroTaxi from "@/assets/hero-taxi.webp";
import heroNight from "@/assets/hero-taxi-night.jpg";
import heroTesla from "@/assets/hero-tesla.jpg";

const images = [heroTaxi, heroNight, heroTesla];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % images.length), []);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="accueil" className="relative min-h-[580px] h-screen max-h-[900px] flex items-center overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="Taxi Beloeil"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-4">
            100 % Fiable • 24/7 • Beloeil & Saint-Hilaire
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-tight mb-4">
            Votre taxi à <span className="text-primary">Beloeil</span>{" "}
            <span className="text-primary">rapide</span> et{" "}
            <span className="text-primary">fiable</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg mb-8 max-w-md">
            Service de taxi professionnel à Beloeil et Saint-Hilaire. Transport aéroport, courses urbaines et longue distance, disponible 24h/24.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="tel:+15794216049"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground h-12 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              579-421-6049
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/10 backdrop-blur text-white h-12 px-6 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              <CalendarCheck className="w-5 h-5" />
              Réserver en ligne
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white/80">Disponible maintenant</span>
            </span>
            <span className="text-white/50">•</span>
            <span className="text-white/60">12 000+ trajets</span>
          </div>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-primary" : "w-2 bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Discover arrow */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-10">
        <span className="text-xs uppercase tracking-widest text-white/50">Découvrir</span>
        <ArrowDown className="w-5 h-5 text-white/50 animate-bounce-arrow" />
      </div>
    </section>
  );
};

export default Hero;
