import s from "@/styles/PokemonStats.module.css";
import { PokemonBarChar } from "./PokemonBarChar";

export function PokemonStats({
  stats,
}: {
  stats: [{ base_stat: number; stat: { name: string } }];
}) {
  return (
    <div className={s.pokemonStats}>
      <h1>Puntos base</h1>
      <div className={s.pokemonStatsContainer}>
        {stats.map((stat) => (
          <PokemonBarChar key={stat.stat.name} stat={stat} />
        ))}
      </div>
    </div>
  );
}
