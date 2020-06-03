import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { axios, handleResponse, handleError } from ".";
import { Hero } from "../models/hero";
import { genId } from "../utils";

export class HeroApi {
  getHeroes(): Observable<any> {
    return axios
      .get("/heroes")
      .pipe(map(handleResponse), catchError(handleError));
  }

  getHero(id: number): Observable<any> {
    return axios
      .get(`/heroes/${id}`)
      .pipe(map(handleResponse), catchError(handleError));
  }

  editHero(hero: Hero): Observable<any> {
    return axios
      .put(`/heroes/${hero.id}`, hero)
      .pipe(map(handleResponse), catchError(handleError));
  }

  createHero(hero: Hero): Observable<any> {
    hero.id = genId();
    return axios
      .post("/heroes", hero)
      .pipe(map(handleResponse), catchError(handleError));
  }

  removeHero(id: number): Observable<any> {
    return axios
      .delete(`/heroes/${id}`)
      .pipe(map(handleResponse), catchError(handleError));
  }
}
