import { Clock } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceNuitImg from "@/assets/service-nuit.png";

const ServiceNuit = () => (
  <ServicePageLayout
    icon={Clock}
    tag="24/7"
    title="Service de nuit"
    heroDesc="Disponible à toute heure, week-ends et jours fériés inclus. Votre taxi de nuit, fiable et sécuritaire."
    color="rgba(6,182,212,0.15)"
    image={serviceNuitImg}
    details={[
      "Besoin d'un taxi à 2h du matin ? Pas de problème. Notre service de nuit fonctionne sans interruption, 365 jours par an. Nous sommes toujours disponibles quand vous en avez besoin.",
      "Que vous rentriez d'une soirée, d'un quart de travail de nuit ou que vous ayez un vol tôt le matin, nos chauffeurs sont prêts à vous prendre en charge à toute heure.",
      "Sécurité et fiabilité sont nos priorités. Tous nos chauffeurs sont vérifiés et nos véhicules sont régulièrement inspectés pour votre tranquillité d'esprit.",
    ]}
    includes={[
      "Disponible 24h/24, 365 jours/an",
      "Chauffeurs vérifiés",
      "Véhicules sécuritaires",
      "Pas de supplément de nuit",
      "Réservation par téléphone ou WhatsApp",
    ]}
  />
);

export default ServiceNuit;
