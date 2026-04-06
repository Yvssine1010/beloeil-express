import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.webp";

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
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) {
      e.preventDefault();
      navigate("/" + href);
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-foreground/95 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-24 px-4">
        <a href={isHome ? "#accueil" : "/"} className="flex-shrink-0" onClick={(e) => { if (!isHome) { e.preventDefault(); navigate("/"); } }}>
          <img src={logo} alt="Taxi Beloeil Saint-Hilaire" className="h-20 w-auto drop-shadow-[0_2px_8px_rgba(212,175,55,0.5)]" style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.4)) brightness(1.1) saturate(1.2)" }} />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={isHome ? l.href : "/" + l.href}
              onClick={(e) => handleNavClick(e, l.href)}
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
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="tel:+15794216049"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/30"
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
                href={isHome ? l.href : "/" + l.href}
                onClick={(e) => handleNavClick(e, l.href)}
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
