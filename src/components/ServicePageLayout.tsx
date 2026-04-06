import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface ServicePageProps {
  icon: LucideIcon;
  tag: string;
  title: string;
  price?: string;
  heroDesc: string;
  details: string[];
  includes?: string[];
  color: string;
}

const ServicePageLayout = ({ icon: Icon, tag, title, price, heroDesc, details, includes, color }: ServicePageProps) => (
  <>
    <Header />
    <main className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-16 bg-foreground/95">
        <div className="container mx-auto px-4">
          <Link to="/#services" className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Retour aux services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: color }}>
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <span className="text-xs uppercase tracking-widest text-primary mb-2 block">{tag}</span>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {title}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">{heroDesc}</p>
            {price && (
              <span className="inline-block mt-4 text-sm font-semibold bg-primary/20 text-primary px-4 py-2 rounded-full">
                {price}
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Détails du service</h2>
              <div className="space-y-4">
                {details.map((d, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{d}</p>
                ))}
              </div>
              {includes && includes.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Ce qui est inclus</h3>
                  <ul className="space-y-2">
                    {includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Reservation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-foreground/95 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-2">Réserver maintenant</h2>
                <p className="text-white/60 mb-6">Contactez-nous pour réserver ce service.</p>

                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+15794216049"
                    className="inline-flex items-center justify-center gap-3 bg-white text-primary h-14 px-8 rounded-xl font-semibold hover:bg-white/90 transition-colors text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Appeler maintenant
                  </a>
                  <a
                    href="https://wa.me/15794216049"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[hsl(142,70%,45%)] text-white h-14 px-8 rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Réserver via WhatsApp
                  </a>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">Informations</h3>
                  <div className="space-y-2 text-sm text-white/60">
                    <p>📍 Beloeil, Saint-Hilaire et environs</p>
                    <p>🕐 Disponible 24h/24, 7j/7</p>
                    <p>📧 info@taxibeloeil.ca</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ServicePageLayout;
