import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-enhanced.png";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Flotte", href: "#flotte" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-foreground/95 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#accueil" className="flex-shrink-0">
          <img src={logo} alt="Taxi Beloeil Saint-Hilaire" className="h-20 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/15794216049"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="tel:+15794216049"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Appeler
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-foreground/98 backdrop-blur-xl flex flex-col">
          <nav className="flex flex-col items-center gap-6 pt-12 flex-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-medium text-white/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 p-6">
            <a
              href="tel:+15794216049"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
            <a
              href="https://wa.me/15794216049"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-xl font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
