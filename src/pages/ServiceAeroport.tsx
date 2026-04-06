import { Plane } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceAeroportImg from "@/assets/service-aeroport.png";

const ServiceAeroport = () => (
  <ServicePageLayout
    icon={Plane}
    tag="Aéroport"
    title="Transport aéroport"
    price="Tarif fixe"
    heroDesc="Transferts vers YUL Montréal-Trudeau et tous les aéroports. Tarif fixe, sans surprise. Arrivez à l'heure, sans stress."
    color="rgba(34,197,94,0.15)"
    image={serviceAeroportImg}
    details={[
      "Ne manquez plus jamais votre vol. Notre service de transport aéroport vous assure un transfert fiable et ponctuel vers l'aéroport international Montréal-Trudeau (YUL) et tous les autres aéroports de la région.",
      "Nous surveillons les horaires de vol en temps réel et ajustons l'heure de prise en charge en conséquence. En cas de retard de vol, nous nous adaptons sans frais supplémentaires.",
      "Tarif fixe convenu à l'avance — aucune mauvaise surprise à l'arrivée. Le prix inclut l'aide avec les bagages et le temps d'attente raisonnable.",
    ]}
    includes={[
      "Tarif fixe sans surprise",
      "Suivi des vols en temps réel",
      "Aide avec les bagages",
      "Véhicules spacieux pour les valises",
      "Réservation à l'avance recommandée",
      "Prise en charge retours aéroport",
    ]}
  />
);

export default ServiceAeroport;
