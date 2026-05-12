import React, { useEffect, useState } from "react";
import { SVG_MAP } from "../../svg-map";

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
  const normalizedRank = rank === "10" ? "T" : rank;
  const key = `${variant}-${normalizedRank}${suit.toLowerCase()}`; // e.g. "As", "Kd"
  const SvgComponent = SVG_MAP[key];

  if (!SvgComponent) return <div>...</div>;

  return (
    <div className={className} style={{ width }}>
      <SvgComponent />
    </div>
  );
};