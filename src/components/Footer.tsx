import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="bg-foreground pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <img src={logo} alt="Taxi Beloeil" className="h-16 mb-4" />
          <p className="text-white/60 text-sm mb-4">
            Service de taxi professionnel à Beloeil et Saint-Hilaire. Disponible 24/7.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Facebook className="w-4 h-4 text-white/70" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Instagram className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Nos services</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#services" className="hover:text-primary transition-colors">Taxi local</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Transport aéroport</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Survoltage</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Déblocage de porte</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Transport de groupe</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Informations</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#apropos" className="hover:text-primary transition-colors">À propos</a></li>
            <li><a href="#flotte" className="hover:text-primary transition-colors">Notre flotte</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Tarifs</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              Beloeil & Saint-Hilaire, QC
            </li>
            <li>
              <a href="tel:+15794216049" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                579-421-6049
              </a>
            </li>
            <li>
              <a href="mailto:info@taxibeloeil.ca" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                info@taxibeloeil.ca
              </a>
            </li>
            <li>
              <a href="https://wa.me/15794216049" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Taxi Beloeil Saint-Hilaire. Tous droits réservés.
        </p>
        <div className="flex gap-4 text-xs text-white/40">
          <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
          <a href="#" className="hover:text-primary transition-colors">Conditions d'utilisation</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
