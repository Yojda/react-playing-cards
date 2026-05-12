import React, { useEffect, useState } from "react";

export interface CardProps {
  suit: "h" | "d" | "c" | "s";
  rank: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "T" | "J" | "Q" | "K" | "A";
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  width?: number;
  className?: string;
}

const normalizeRank = (rank: CardProps["rank"]) => (rank === "10" ? "T" : rank);

export const Card: React.FC<CardProps> = ({
  suit,
  rank,
  variant = "primary",
  width = 200,
  className = "",
}) => {
  const [SvgComponent, setSvgComponent] = useState<React.FC | null>(null);
  const normalizedRank = rank === "10" ? "T" : rank;
  const cardName = `${normalizedRank}${suit.toLowerCase()}`; // e.g. "As", "Kd"
  console.log("Loading card:", cardName); 

  useEffect(() => {
    if (!suit || !rank) return;
    const normalizedRank = rank === "10" ? "T" : rank;
    const cardName = `${variant}-${normalizedRank}${suit.toLowerCase()}`;

    import(`../../public/assets/${cardName}.svg`)
      .then((mod) => {
        console.log("mod.default:", mod.default);
        setSvgComponent(() => mod.default);
      })
      .catch((err) => console.error(`Failed: ${cardName}.svg`, err));
  }, [suit, rank, variant]);

  if (!SvgComponent) return <div>...</div>;

  return (
    <div className={className} style={{ width }}>
      <SvgComponent />
    </div>
  );
};