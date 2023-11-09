import React from "react";
import "./index.scss";
interface IPokemonMiniCard {
  name: string;
  number: number;
}
export const PokemonMiniCard: React.FC<IPokemonMiniCard> = ({
  name,
  number,
}) => {
  let transformedName = name[0].toUpperCase() + name.slice(1);
  return (
    <div className="pokemon-minicard">
      {number} {transformedName}
    </div>
  );
};
