import { Pokemon } from "@/types/PokemonInterface";
import s from "@/styles/PokemonCard.module.css";
import Link from "next/link";
import { PokemonTypes } from "./PokemonTypes";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link
      href={`/pokemon/${pokemon.id}`}
      key={pokemon.name}
      style={{ textDecoration: "none" }}
      className={s.pokedexCard}
    >
      <img src={pokemon.image} alt={pokemon.name} />
      <div className={s.pokedexCardTxt}>
        <p>N.° {("0000" + pokemon.id).slice(-4)}</p>
        <p>{pokemon.name}</p>
        <PokemonTypes types={pokemon.types} card={true} />
      </div>
    </Link>
  );
}
