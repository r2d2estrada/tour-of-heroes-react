import { Message } from "../../models/messages";
import { Action } from "..";
import { MessageActions } from "../actions";

export const messages = (state: Message[] = [], action: Action): Message[] => {
  switch (action.type) {
    case MessageActions.ADD_MESSAGE:
      return [...state, action.data];
    default:
      return state;
  }
};
