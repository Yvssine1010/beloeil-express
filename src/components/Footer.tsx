import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle, ArrowUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const navigation = [
  {
    name: "Services",
    items: [
      { name: "Taxi local", href: "/services/taxi-local" },
      { name: "Transport aéroport", href: "/services/aeroport" },
      { name: "Survoltage batterie", href: "/services/survoltage" },
    ],
  },
  {
    name: "Assistance",
    items: [
      { name: "Déblocage de porte", href: "/services/deblocage" },
      { name: "Transport de groupe", href: "/services/groupe" },
      { name: "Service de nuit", href: "/services/nuit" },
    ],
  },
  {
    name: "Informations",
    items: [
      { name: "À propos", href: "/#apropos" },
      { name: "Notre flotte", href: "/#flotte" },
      { name: "Tarifs", href: "/#services" },
    ],
  },
  {
    name: "Contact",
    items: [
      { name: "Appeler", href: "tel:+15794216049" },
      { name: "WhatsApp", href: "https://wa.me/15794216049" },
      { name: "Courriel", href: "mailto:info@taxibeloeil.ca" },
    ],
  },
];

const Underline = "hover:-translate-y-1 border border-white/15 rounded-xl p-2.5 transition-transform text-white/60 hover:text-primary hover:border-primary/30";

const Footer = () => {
  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section - Logo + Description */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-6">
            <img src={logo} alt="Taxi Beloeil Saint-Hilaire" className="h-20 mx-auto" />
          </div>
          <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
            Bienvenue chez Taxi Beloeil Saint-Hilaire, votre service de transport professionnel dans la région de Beloeil et Mont-Saint-Hilaire. Disponible 24h/24, 7j/7, nous offrons des courses locales, des transferts aéroport, du survoltage de batterie et bien plus. Fiabilité, ponctualité et courtoisie sont au cœur de notre service.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Navigation columns */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div className="hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {navigation.map((section) => (
              <div key={section.name}>
                <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
                  {section.name}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith("http") || item.href.startsWith("tel:") || item.href.startsWith("mailto:") ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-white/50 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-sm text-white/50 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="hidden md:block" />
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Social icons + scroll top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <a
              href="mailto:info@taxibeloeil.ca"
              aria-label="Email"
              className={Underline}
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/15794216049"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={Underline}
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={Underline}
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={Underline}
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="tel:+15794216049"
              aria-label="Téléphone"
              className={Underline}
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors border border-white/15 rounded-xl px-4 py-2.5 hover:-translate-y-1 hover:border-primary/30 transition-transform"
          >
            <ArrowUp className="h-4 w-4" />
            Haut de page
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 text-xs text-white/40">
          <span>© {new Date().getFullYear()}</span>
          <span className="hidden md:inline">·</span>
          <span className="flex items-center gap-1">
            Fait avec <Heart className="h-3 w-3 text-red-500 fill-red-500" /> par
          </span>
          <span className="font-semibold text-white/60">Taxi Beloeil Saint-Hilaire</span>
          <span className="hidden md:inline">·</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> Beloeil & Saint-Hilaire, QC
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
