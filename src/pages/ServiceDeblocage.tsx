import { KeyRound } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceDeblocageImg from "@/assets/service-deblocage.png";

const ServiceDeblocage = () => (
  <ServicePageLayout
    icon={KeyRound}
    tag="Assistance"
    title="Déblocage de porte"
    price="Sur devis"
    heroDesc="Clés oubliées dans l'auto ? Notre équipe vous débloque en quelques minutes, sans endommager votre véhicule."
    color="rgba(239,68,68,0.15)"
    image={serviceDeblocageImg}
    details={[
      "Se retrouver verrouillé hors de son véhicule est une situation stressante. Notre équipe intervient rapidement avec des outils professionnels pour ouvrir votre portière sans causer aucun dommage.",
      "Nos techniciens sont formés pour travailler sur tous les types de véhicules, des modèles classiques aux voitures modernes avec systèmes de verrouillage électronique.",
      "Le tarif est établi sur devis selon le type de véhicule et la complexité de l'intervention. Appelez-nous pour une estimation gratuite.",
    ]}
    includes={[
      "Intervention sans dommage",
      "Tous types de véhicules",
      "Outils professionnels",
      "Estimation gratuite par téléphone",
      "Disponible jour et nuit",
    ]}
  />
);

export default ServiceDeblocage;
