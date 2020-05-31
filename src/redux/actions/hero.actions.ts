import { of, Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { HeroesActions, SelectedHeroActions } from ".";
import { Action } from "..";
import { Hero } from "../../models/hero";
import { HeroApi } from "../../api/hero.api";
import { addMessage } from "./message.actions";
import { genId } from "../../utils";

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
    type: HeroesActions.GET_HEROES_ERROR,
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

function addHero(): Action {
  return {
    type: HeroesActions.POST_ADD_HERO,
  };
}

function addHeroSuccess(hero: Hero): Action {
  return {
    type: HeroesActions.POST_ADD_HERO_SUCCESS,
    data: hero,
  };
}

function addHeroError(): Action {
  return {
    type: HeroesActions.POST_ADD_HERO_ERROR,
  };
}

function modifyHero(): Action {
  return {
    type: SelectedHeroActions.PUT_MODIFY_HERO,
  };
}

function modifyHeroSuccess(hero: Hero): Action {
  return {
    type: SelectedHeroActions.PUT_MODIFY_HERO_SUCCESS,
    data: hero,
  };
}

function modifyHeroError(): Action {
  return {
    type: SelectedHeroActions.PUT_MODIFY_HERO_ERROR,
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

export function addHeroAction(hero: Hero) {
  return function (dispatch: any) {
    dispatch(addHero());
    hero.id = genId();
    return heroApi.createHero(hero).pipe(
      tap((newHero) => {
        dispatch(addHeroSuccess(newHero));
      }),
      catchError((error) => {
        dispatch(addHeroError());
        return of(error);
      })
    );
  };
}

export function modifyHeroAction(hero: Hero): Observable<any> | any {
  return function (dispatch: any): Observable<any> {
    dispatch(modifyHero());
    return heroApi.editHero(hero).pipe(
      tap((modifiedHero) => {
        dispatch(addMessage(`put - modified hero - id: ${hero.id}`));
        dispatch(modifyHeroSuccess(modifiedHero));
      }),
      catchError((error) => {
        dispatch(modifyHeroError());
        return of(error);
      })
    );
  };
}
