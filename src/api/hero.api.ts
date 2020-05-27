import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { axios, handleResponse } from ".";

export class HeroApi {
  getHeroes(): Observable<any> {
    return axios.get("/heroes").pipe(map(handleResponse));
  }
}
