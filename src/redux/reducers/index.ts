import { combineReducers } from "redux";
import { heroes, selectedHero } from "./hero.reducer";
import { messages } from "./message.reducer";

const rootReducer = combineReducers({
  heroes,
  selectedHero,
  messages,
});

export default rootReducer;
