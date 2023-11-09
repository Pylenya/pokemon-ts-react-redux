import React from "react";
import { PokemonMiniCard } from "../PokemonMIniCard/PokemonMiniCard";
import { Link } from "react-router-dom";

import "./index.scss";

interface PokemonsListProps {
  pokemonsList: {
    name: string;
    url: string;
  }[];
}
const PokemonsList: React.FC<PokemonsListProps> = ({ pokemonsList }) => {
  return (
    <div className="pokemons-grid">
      {pokemonsList &&
        pokemonsList.map((pokemon, index) => {
          return (
            <Link
              state={{ url: pokemon.url, number: index + 1 }}
              key={index}
              to={`/${pokemon.name}`}
            >
              <PokemonMiniCard name={pokemon.name} number={index + 1} />
            </Link>
          );
        })}
    </div>
  );
};

export default React.memo(PokemonsList);
