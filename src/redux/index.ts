import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { Hero } from "../models/hero";
import { Message } from "../models/messages";

export interface Action {
  type: string;
  data?: any;
}

export interface State {
  heroes: Hero[] | any;
  selectedHero: Hero | null;
  messages: Message | any;
}

export const initialState: State = {
  heroes: [],
  selectedHero: null,
  messages: [],
};

export default function configureStore() {
  const composeEnhancers =
    process.env.NODE_ENV === "development"
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
}
