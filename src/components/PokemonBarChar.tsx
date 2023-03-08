import s from "@/styles/PokemonBarChar.module.css";

export function PokemonBarChar({
  stat,
}: {
  stat: { base_stat: number; stat: { name: string } };
}) {
  const filledBars = Math.floor(stat.base_stat / 10);

  return (
    <div className={s.pokemonBarChar}>
      <ul>
        {Array.from({ length: 15 }).map((_, i) => (
          <li
            key={i}
            className={i < filledBars ? s.filledBars : s.defaultBars}
          ></li>
        ))}
      </ul>
      <p>{stat.stat.name.replace("-", " ")}</p>
    </div>
  );
}
