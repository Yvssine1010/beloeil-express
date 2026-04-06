import { Users } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceGroupeImg from "@/assets/service-groupe.png";

const ServiceGroupe = () => (
  <ServicePageLayout
    icon={Users}
    tag="Groupe"
    title="Transport de groupe"
    price="Sur devis"
    heroDesc="Minivan et véhicules spacieux pour vos sorties en famille ou entre amis. Voyagez ensemble, confortablement."
    color="rgba(245,158,11,0.15)"
    image={serviceGroupeImg}
    details={[
      "Que ce soit pour une sortie familiale, un événement spécial ou un déplacement de groupe, nos minivans et véhicules spacieux peuvent accueillir jusqu'à 7 passagers confortablement.",
      "Idéal pour les mariages, les fêtes, les sorties scolaires ou tout événement nécessitant le transport de plusieurs personnes. Nous nous occupons de la logistique pour que vous puissiez profiter du moment.",
      "Tarif sur devis adapté à vos besoins — nombre de passagers, distance et durée du service. Contactez-nous pour une soumission gratuite.",
    ]}
    includes={[
      "Véhicules spacieux (jusqu'à 7 places)",
      "Chauffeurs professionnels",
      "Soumission gratuite",
      "Flexibilité horaire",
      "Idéal pour événements et sorties",
    ]}
  />
);

export default ServiceGroupe;
