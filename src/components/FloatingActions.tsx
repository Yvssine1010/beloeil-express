import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/15794216049"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
    <a
      href="tel:+15794216049"
      className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Appeler"
    >
      <Phone className="w-6 h-6" />
    </a>
  </div>
);

export default FloatingActions;
