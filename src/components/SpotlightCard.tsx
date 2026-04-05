import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  spotlightColor?: string;
}

const SpotlightCard = ({ children, spotlightColor = "rgba(100,151,177,0.15)" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-colors hover:border-white/20 overflow-hidden"
      style={{
        background: isHovered
          ? `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 60%), rgba(255,255,255,0.05)`
          : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
