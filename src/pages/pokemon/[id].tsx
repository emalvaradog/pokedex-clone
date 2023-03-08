import { getPokemonDataById } from "@/services/getPokemons";
import { Pokemon } from "@/types/PokemonInterface";
import {
  PokemonChars,
  PokemonData,
  PokemonStats,
  PokemonTypes,
} from "@/components";
import s from "@/styles/PokemonPage.module.css";

export default function pokemonPage(pokemon: Pokemon) {
  return (
    <main className={s.pokemonPage}>
      <div className={s.pokemonPageContainer}>
        <PokemonData
          name={pokemon.name}
          id={pokemon.id}
          image={pokemon.image}
          card={false}
        />
        <PokemonStats stats={pokemon.stats} />
        <PokemonChars
          height={pokemon.height}
          weight={pokemon.weight}
          abilities={pokemon.abilities}
        />
        <PokemonTypes types={pokemon.types} card={false} />
      </div>
    </main>
  );
}

export async function getServerSideProps({ params }: { params: any }) {
  const { id } = params;
  let pokemon = await getPokemonDataById(Number(id));

  return {
    props: pokemon,
  };
}
