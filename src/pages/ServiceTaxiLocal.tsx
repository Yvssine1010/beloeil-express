import { Car } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const ServiceTaxiLocal = () => (
  <ServicePageLayout
    icon={Car}
    tag="Transport"
    title="Taxi local"
    price="Dès 8$"
    heroDesc="Courses dans Beloeil, Saint-Hilaire et les environs. Service rapide, ponctuel et professionnel à prix abordable."
    color="rgba(100,151,177,0.15)"
    details={[
      "Notre service de taxi local dessert Beloeil, Mont-Saint-Hilaire, McMasterville, Otterburn Park et toutes les municipalités avoisinantes. Que ce soit pour un rendez-vous médical, une course au centre commercial ou un déplacement quotidien, nous sommes là.",
      "Nos chauffeurs connaissent parfaitement la région et empruntent toujours les itinéraires les plus rapides pour vous amener à destination dans les meilleurs délais.",
      "Tarification transparente dès 8$ — pas de frais cachés. Paiement en espèces ou par carte accepté.",
    ]}
    includes={[
      "Prise en charge à domicile",
      "Chauffeurs expérimentés et courtois",
      "Véhicules propres et climatisés",
      "Service disponible 24/7",
      "Tarifs compétitifs",
    ]}
  />
);

export default ServiceTaxiLocal;
