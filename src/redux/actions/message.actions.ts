import { Action } from "..";
import { MessageActions } from ".";

export function addMessage(message: string): Action {
  return {
    type: MessageActions.ADD_MESSAGE,
    data: message,
  };
}
