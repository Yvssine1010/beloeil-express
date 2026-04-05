import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import taxiCamry from "@/assets/taxi-camry.webp";

const BookingCTA = () => (
  <section id="contact" className="py-20 bg-foreground/95">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-2">Réservation rapide</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-white mb-3">
            Besoin d'un taxi ?{" "}
            <span className="text-white/80">Contactez-nous maintenant</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-md">
            Appelez-nous directement ou envoyez un message WhatsApp pour une réservation instantanée. Service disponible 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href="tel:+15794216049"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary h-12 px-6 rounded-xl font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
            <a
              href="https://wa.me/15794216049"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground h-12 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Réserver via WhatsApp
            </a>
          </div>

          <a href="mailto:info@taxibeloeil.ca" className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> info@taxibeloeil.ca
          </a>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={taxiCamry}
            alt="Toyota Camry Taxi"
            className="w-full h-80 lg:h-96 object-cover rounded-2xl border border-white/20"
          />
          <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold text-foreground">Disponible 24/7</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BookingCTA;
