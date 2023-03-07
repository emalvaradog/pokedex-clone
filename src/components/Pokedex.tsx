import { useEffect, useState } from "react";
import Link from "next/link";
import { getPokemons } from "@/services/getPokemons";
import s from "@/styles/Pokedex.module.css";

const types = {
  grass: "rgb(83,173,53)",
  bug: "rgb(54,156,40)",
  poison: "rgb(116,30,170)",
  poision: "yellow",
  water: "rgb(43,154,190)",
  fire: "rgb(208,21,21)",
  flying: "rgb(74,138,255)",
  normal: "gray",
  electric: "rgb(203,153,26)",
  ground: "rgb(115,67,9)",
  fairy: "rgb(255,155,227)",
  fighting: "brown",
  psychic: "purple",
  rock: "gray",
  steel: "rgb(141,141,141)",
  ghost: "gray",
  ice: "rgb(155,190,255)",
  dragon: "red",
  dark: "gray",
};

export function Pokedex() {
  const [offset, setOffset] = useState(12);
  const [pokemons, setPokemons] = useState<any[]>([]);

  function nextPokemons() {
    setOffset((current) => current + 12);
  }

  useEffect(() => {
    getPokemons(offset - 11, offset).then((res) =>
      setPokemons((current) => {
        let newElements = res.filter(
          (newPoke) =>
            !current.find((oldPoke) => newPoke?.name === oldPoke?.name)
        );
        return [...current, ...newElements];
      })
    );
  }, [offset]);

  return (
    <div className={s.pokedex}>
      <div className={s.pokedexContainer}>
        {pokemons.map((pokemon) => (
          <Link
            href={`/pokemon/${pokemon.id}`}
            key={pokemon.name}
            style={{ textDecoration: "none" }}
            className={s.pokedexCard}
          >
            <img src={pokemon.image} alt={pokemon.name} />
            <div className={s.pokedexCardTxt}>
              <p>N° {("0000" + pokemon.id).slice(-4)}</p>
              <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
              <div className={s.pokedexCardType}>
                {pokemon.types.map((type) => (
                  <span
                    style={{ backgroundColor: `${types[type.type.name]}` }}
                    key={`${pokemon.name} ${type.type.name}`}
                  >
                    {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button onClick={nextPokemons}>Cargar más Pokémon</button>
    </div>
  );
}
