import { Action } from "..";
import { Hero } from "../../models/hero";
import { HeroesActions, SelectedHeroActions } from "../actions";

export const heroes = (state: Hero[] = [], action: Action): Hero[] => {
  switch (action.type) {
    case HeroesActions.GET_HEROES:
      return state;
    case HeroesActions.GET_HEROES_SUCCESS:
      return action.data;
    case HeroesActions.GET_HEROES_ERROR:
      return state;
    case HeroesActions.POST_ADD_HERO:
      return state;
    case HeroesActions.POST_ADD_HERO_SUCCESS:
      return [...state, action.data];
    case HeroesActions.POST_ADD_HERO_ERROR:
      return state;
    case SelectedHeroActions.PUT_MODIFY_HERO_SUCCESS:
      return state.map((hero) =>
        hero.id === action.data.id ? action.data : hero
      );
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
    case SelectedHeroActions.PUT_MODIFY_HERO:
      return state;
    case SelectedHeroActions.PUT_MODIFY_HERO_SUCCESS:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
