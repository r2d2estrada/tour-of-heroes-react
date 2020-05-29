import { HeroesActions, SelectedHeroActions } from ".";
import { Action } from "..";
import { Hero } from "../../models/hero";
import { HeroApi } from "../../api/hero.api";
import { addMessage } from "./message.actions";

const heroApi = new HeroApi();

function getHeroes(): Action {
  return {
    type: HeroesActions.GET_HEROES,
  };
}

function getHeroesSuccess(heroes: Hero[]): Action {
  return {
    type: HeroesActions.GET_HEROES_SUCCESS,
    data: heroes,
  };
}

function getHeroesError(): Action {
  return {
    type: HeroesActions.GET_HERO_ERROR,
  };
}

function getSelectedHero(): Action {
  return {
    type: SelectedHeroActions.GET_SELECTED_HERO,
  };
}

function getSelectedHeroSuccess(hero: Hero | any): Action {
  return {
    type: SelectedHeroActions.GET_SELECTED_HERO_SUCCESS,
    data: hero,
  };
}

function getSelectedHeroError(): Action {
  return {
    type: SelectedHeroActions.GET_SELECTED_HERO_ERROR,
  };
}

export function getHeroesAction() {
  return function (dispatch: any) {
    dispatch(getHeroes());
    heroApi.getHeroes().subscribe({
      next: (response: Hero[]) => {
        dispatch(getHeroesSuccess(response));
        dispatch(addMessage("get - Hero List"));
      },
      error: (error: any) => {
        dispatch(getHeroesError());
        throw error;
      },
    });
  };
}

export function getSelectedHeroAction(id: number) {
  return function (dispatch: any) {
    dispatch(getSelectedHero());
    heroApi.getHero(id).subscribe({
      next: (response: Hero) => {
        dispatch(getSelectedHeroSuccess(response));
        dispatch(addMessage(`get - Hero - id: ${id}`));
      },
      error: () => dispatch(getSelectedHeroError()),
    });
  };
}
