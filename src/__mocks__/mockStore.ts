import configureStore from "redux-mock-store";
import { State } from "../redux";

const initialState: State = {
  heroes: [],
  selectedHero: null,
  messages: [],
};

const middlewares: any = [];

const createMockStore = configureStore(middlewares);

export const mockStore = createMockStore(initialState);
