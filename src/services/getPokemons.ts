import { Pokemon } from "@/types/PokemonInterface";

export async function getPokemonDataById(id: number): Promise<Pokemon> {
  const POKEMON_API_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(POKEMON_API_URL)
    .then((res) => res.json())
    .then((data) => ({
      id: data.id,
      name: data.name[0].toUpperCase() + data.name.slice(1),
      image: data.sprites.front_default,
      types: data.types,
      abilities: data.abilities,
      height: data.height,
      weight: data.weight,
      stats: data.stats,
    }));
}

export async function getPokemons(start: number, end: number) {
  const LIMIT = 1281;
  const TOTAL_ELEMENTS = Math.min(LIMIT, end);
  let pokemons: Pokemon[] = [];

  for (let i = start; i <= TOTAL_ELEMENTS; i++) {
    pokemons.push(await getPokemonDataById(i));
  }

  return pokemons;
}
