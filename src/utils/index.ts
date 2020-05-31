import { store } from "..";

export function genId(): number {
  const { heroes } = store.getState();
  const ids: number[] | any = heroes.map((hero) => hero.id);
  return heroes.length > 0 ? Math.max(...ids) + 1 : 11;
}
