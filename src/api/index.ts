import Axios from "axios-observable";
import { AxiosResponse, AxiosError } from "axios";
import { Observable, of } from "rxjs";

export const axios = Axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});

export function handleResponse(
  response: AxiosResponse
): AxiosResponse<any> | any {
  return response.data;
}

export function handleError(error: AxiosError): Observable<AxiosError> {
  throw of(error);
}
