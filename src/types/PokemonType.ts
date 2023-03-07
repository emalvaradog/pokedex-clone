export interface Pokemon {
  name: string;
  id: number;
  image: string;
  types: [string];
  abilities: [string];
  height: number;
  weight: number;
  stats: [object];
}
