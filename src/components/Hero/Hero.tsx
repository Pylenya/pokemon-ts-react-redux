import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hook";
import PokemonsList from "../PokemonsList/PokemonsList";
import IMGpikachu from "../../images/pikachu.png";

import "./index.scss";

export const Hero: React.FC = () => {
  const allPokemons = useAppSelector((state) => state.pokemons.pokemonsList);
  const [input, setInput] = useState("");
  const [foundPokemons, setFoundPokemons] =
    useState<typeof allPokemons>(allPokemons);

  useEffect(() => {
    setFoundPokemons(allPokemons);
  }, [allPokemons]);

  function searchHendler(event: React.ChangeEvent<HTMLInputElement>) {
    const keyword = event.target.value;
    if (keyword !== "") {
      const results = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(keyword.toLowerCase())
      );
      setFoundPokemons(results);
    } else {
      setFoundPokemons(allPokemons);
    }
    setInput(keyword);
  }

  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">Search for your pokemon!</h1>
        <div className="pokemon-search">
          <input
            value={input}
            onChange={(e) => searchHendler(e)}
            className="pokemon-search__input"
            type="text"
            placeholder="Charizard, Pikachu, etc."
          />
          <img className="pokemon-search__img" src={IMGpikachu} alt="pikachu" />
        </div>
        <PokemonsList pokemonsList={foundPokemons} />
      </div>
    </section>
  );
};
