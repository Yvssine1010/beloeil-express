import { Battery } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const ServiceSurvoltage = () => (
  <ServicePageLayout
    icon={Battery}
    tag="Assistance"
    title="Survoltage batterie"
    price="25$"
    heroDesc="Batterie à plat ? Nous intervenons rapidement pour recharger votre véhicule, où que vous soyez dans la région."
    color="rgba(168,85,247,0.15)"
    details={[
      "Une batterie morte peut arriver à tout moment, surtout pendant les hivers québécois rigoureux. Notre service de survoltage est disponible 24h/24 pour vous dépanner rapidement.",
      "Nos techniciens arrivent équipés de matériel professionnel et peuvent survolter votre véhicule en quelques minutes seulement. Si la batterie ne tient pas la charge, nous pouvons vous conseiller sur les prochaines étapes.",
      "Service rapide à seulement 25$ — intervention généralement en moins de 30 minutes dans la zone de Beloeil et Saint-Hilaire.",
    ]}
    includes={[
      "Intervention rapide (moins de 30 min)",
      "Équipement professionnel",
      "Disponible 24h/24, 7j/7",
      "Diagnostic rapide de la batterie",
      "Conseils d'entretien inclus",
    ]}
  />
);

export default ServiceSurvoltage;
