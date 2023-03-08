import { getPokemons } from "@/services/getPokemons";
import { Pokemon } from "@/types/PokemonInterface";
import { useEffect, useState } from "react";

export function usePokemons(
  initialPokemons: []
): [(event: React.MouseEvent<HTMLButtonElement>) => void, Pokemon[], boolean] {
  const [pokemons, setPokemons] = useState<any[]>(initialPokemons);
  const [offset, setOffset] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  function nextPokemons() {
    setIsLoading(true);
    setOffset((current) => current + 12);
  }

  useEffect(() => {
    getPokemons(offset - 11, offset).then((res) =>
      setPokemons((currentPokemons) => {
        let newPokemons = res.filter(
          (newPoke) =>
            !currentPokemons.find((oldPoke) => newPoke?.name === oldPoke?.name)
        );
        setIsLoading(false);
        return [...currentPokemons, ...newPokemons];
      })
    );
  }, [offset]);

  return [nextPokemons, pokemons, isLoading];
}
