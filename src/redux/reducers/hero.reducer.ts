import { Action } from "..";
import { Hero } from "../../models/hero";
import { HeroesActions, SelectedHeroActions } from "../actions";

export const heroes = (state: Hero[] = [], action: Action): Hero[] => {
  switch (action.type) {
    case HeroesActions.GET_HEROES:
      return state;
    case HeroesActions.GET_HEROES_SUCCESS:
      return action.data;
    case HeroesActions.GET_HERO_ERROR:
      return state;
    default:
      return state;
  }
};

export const selectedHero = (
  state: Hero | null = null,
  action: Action
): Hero | null => {
  switch (action.type) {
    case SelectedHeroActions.GET_SELECTED_HERO:
      return state;
    case SelectedHeroActions.GET_SELECTED_HERO_SUCCESS:
      return action.data;
    case SelectedHeroActions.GET_SELECTED_HERO_ERROR:
      return state;
    default:
      return state;
  }
};
