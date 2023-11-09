import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";

import "./index.scss";

export const PokemonCard: React.FC = () => {
  const [data, setData] = useState<IData>();
  const [img, setIMG] = useState<string>();
  let location = useLocation();
  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon${location.pathname}`
      );
      let data = await response.json();
      setIMG(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
      );
      setData(data);
    }
    fetchPokemon();
  }, [location]);

  interface IData {
    abilities?: [];
    base_experience: number;
    forms?: [];
    game_indices?: [];
    height: number;
    held_items?: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: IMove[];
    name: string;
    oreder: number;
    past_abilities: [];
    past_types: [];
    species: {
      name?: string | null;
      url: string | null;
    };
    sprites: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_default_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
      other: {
        dream_world: {
          [key: string]: string | null;
        };
        home: {
          [key: string]: string | null;
        };
        ["official-artwork"]: {
          [key: string]: string | null;
        };
      };
    };
    stats: IStats[];
    types: ITypes[];
    weight: number;
  }
  interface IStats {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  interface ITypes {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  interface IMove {
    move: {
      name: string | null;
      url: string | null;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string | null;
        url: string | null;
      };
      versin_group: {
        name: string | null;
        url: string | null;
      };
    }[];
  }

  return (
    <>
      <Header />
      {data && (
        <section className="pokemon-info">
          <div className="container">
            <div className="pokemon__box">
              <div className="pokemon__name">{data.name}</div>
              <div className="pokemon__img-box">
                {data.sprites.other["official-artwork"]["front_default"] !==
                null ? (
                  <img className="pokemon__img" src={img} alt="pokemon image" />
                ) : (
                  <h1
                    style={{
                      color: "white",
                      fontSize: "48px",
                      paddingTop: "150px",
                    }}
                  >
                    NO IMAGES
                  </h1>
                )}
              </div>
              <div className="pokemon__weight">
                <span>Weight: {data.weight}</span>
              </div>
              <div className="pokemon__height">
                <span>Height: {data.height}</span>
              </div>
              <div className="pokemon__stats">
                {data.stats.map((stat, index) => {
                  return (
                    <div key={index} className="stat">
                      <span className="stat__name">{stat.stat.name}: </span>
                      <span className="stat__number">{stat.base_stat}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default PokemonCard;
