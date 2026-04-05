const items = [
  "Taxi Beloeil",
  "Transport Aéroport",
  "24/7",
  "Survoltage",
  "Déblocage porte",
  "Saint-Hilaire",
  "Prix compétitifs",
  "Véhicules modernes",
];

const Marquee = () => {
  const content = items.map((t) => `${t} ★`).join(" ");

  return (
    <div className="bg-primary overflow-hidden py-3">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-primary-foreground font-bold text-sm mx-4">{content}</span>
        <span className="text-primary-foreground font-bold text-sm mx-4">{content}</span>
        <span className="text-primary-foreground font-bold text-sm mx-4">{content}</span>
        <span className="text-primary-foreground font-bold text-sm mx-4">{content}</span>
      </div>
    </div>
  );
};

export default Marquee;
