import s from "@/styles/PokemonData.module.css";

export function PokemonData({
  name,
  id,
  image,
  card,
}: {
  name: string;
  id: number;
  image: string;
  card: boolean;
}) {
  return (
    <div className={s.pokemonData}>
      <div
        className={s.pokemonName}
        style={{ flexDirection: card ? "column-reverse" : "column" }}
      >
        <h1>{name}</h1>
        <p>N.° {("000" + id).slice(-3)}</p>
      </div>
      <div className={s.pokemonImage}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
