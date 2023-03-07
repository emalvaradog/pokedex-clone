import { getPokemonDataById } from "@/services/getPokemons";
import { Pokemon } from "@/types/PokemonType";
import { useState } from "react";

export default function PokemonPage(pokemon: Pokemon) {
  const [current, setCurrent] = useState<Pokemon>();

  return (
    <div className="">
      <h1>{pokemon.name}</h1>
      <div className="">
        <p>Description</p>
        <p>{pokemon.height}</p>
        <p>{pokemon.weight}</p>
      </div>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  let pokemon = await getPokemonDataById(Number(id));
  return {
    props: pokemon,
  };
}
