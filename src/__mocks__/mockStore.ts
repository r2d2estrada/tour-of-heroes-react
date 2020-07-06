import configureStore from "redux-mock-store";
import { State } from "../redux";

const initialState: State = {
  heroes: [
    {
      id: 11,
      name: "Dr. Nice",
    },
    {
      id: 12,
      name: "Narco",
    },
    {
      id: 13,
      name: "Mr. Bombastic",
    },
  ],
  selectedHero: null,
  messages: [],
};

const middlewares: any = [];

const createMockStore = configureStore(middlewares);

export const mockStore = createMockStore(initialState);
