export interface Pokemon {
  name: string;
  id: number;
  image: string;
  types: [{ type: { name: string } }];
  abilities: [{ ability: { name: string } }];
  height: number;
  weight: number;
  stats: [{ base_stat: number; stat: { name: string } }];
}
