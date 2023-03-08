import s from "@/styles/PokemonChars.module.css";

export function PokemonChars({
  height,
  weight,
  abilities,
}: {
  height: number;
  weight: number;
  abilities: [{ ability: { name: string } }];
}) {
  return (
    <div className={s.pokemonChars}>
      <p>
        Altura
        <span>{height} m</span>
      </p>
      <p>
        Peso
        <span>{weight} kg</span>
      </p>
      <p>
        Habilidades:
        {abilities.map((ability) => (
          <span key={ability.ability.name}>{ability.ability.name}</span>
        ))}
      </p>
    </div>
  );
}
