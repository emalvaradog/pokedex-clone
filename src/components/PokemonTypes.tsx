import s from "@/styles/PokemonTypes.module.css";
import { colorizePokemonType } from "@/utils/colorizePokemonType";

export function PokemonTypes({
  types,
  card,
}: {
  types: [{ type: { name: string } }];
  card: boolean;
}) {
  return (
    <div className={s.pokemonPageTypes}>
      {!card && <p>Tipo</p>}
      <div
        className={s.pokemonPageTypesContent}
        style={{ justifyContent: card ? "flex-start" : "center" }}
      >
        {types.map((type) => (
          <span
            key={type.type.name}
            style={{ backgroundColor: colorizePokemonType[type.type.name] }}
          >
            {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
          </span>
        ))}
      </div>
    </div>
  );
}
