import { map } from "rxjs/operators";
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

function getSelectedHero() {
  return {
    type: SelectedHeroActions.GET_SELECTED_HERO,
  };
}

function getSelectedHeroSuccess(hero: Hero | any) {
  return {
    type: SelectedHeroActions.GET_SELECTED_HERO_SUCCESS,
    data: hero,
  };
}

function getSelectedHeroError() {
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
        dispatch(addMessage("fetch - Hero List"));
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
    const observer = heroApi
      .getHeroes()
      .pipe(map((response: Hero[]) => response.find((hero) => hero.id === id)));

    observer.subscribe({
      next: (response) => {
        dispatch(getSelectedHeroSuccess(response));
        dispatch(addMessage(`fetch - Hero Detail for ${response?.name}`));
      },
      error: (error: any) => {
        dispatch(getSelectedHeroError());
        throw error;
      },
    });
  };
}
