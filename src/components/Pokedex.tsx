import { PokemonCard } from "./PokemonCard";
import { usePokemons } from "@/hooks/usePokemons";
import { Pokemon } from "@/types/PokemonInterface";
import { Loading } from "./Loading";
import s from "@/styles/Pokedex.module.css";
import { getPokemons } from "@/services/getPokemons";

export function Pokedex({ data }: { data: [] }) {
  const [nextPokemons, pokemons, isLoading] = usePokemons(data);

  return (
    <div className={s.pokedex}>
      {isLoading && <Loading />}
      <h1>Pokedex</h1>
      <div className={s.pokedexContainer}>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <button disabled={isLoading} onClick={nextPokemons}>
        Cargar más Pokémon
      </button>
    </div>
  );
}
