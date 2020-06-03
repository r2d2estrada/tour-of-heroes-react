export enum HeroesActions {
  GET_HEROES = "[Heroes] GET_HEROES",
  GET_HEROES_SUCCESS = "[Heroes] GET_HEROES_SUCCESS",
  GET_HEROES_ERROR = "[Heroes] GET_HEROES_ERROR",
  POST_ADD_HERO = "[Heroes] POST_ADD_HERO",
  POST_ADD_HERO_SUCCESS = "[Heroes] POST_ADD_HERO_SUCCESS",
  POST_ADD_HERO_ERROR = "[Heroes] POST_ADD_HERO_ERROR",
}

export enum SelectedHeroActions {
  GET_SELECTED_HERO = "[HERO] GET_SELECTED_HERO",
  GET_SELECTED_HERO_SUCCESS = "[HERO] GET_SELECTED_HERO_SUCCESS",
  GET_SELECTED_HERO_ERROR = "[HERO] GET_SELECTED_HERO_ERROR",
  PUT_MODIFY_HERO = "[HERO] PUT_MODIFY_HERO",
  PUT_MODIFY_HERO_SUCCESS = "[HERO] PUT_MODIFY_HERO_SUCCESS",
  PUT_MODIFY_HERO_ERROR = "[HERO] PUT_MODIFY_HERO_ERROR",
  DELETE_REMOVE_HERO = "[HERO] DELETE_REMOVE_HERO",
  DELETE_REMOVE_HERO_SUCCESS = "[HERO] DELETE_REMOVE_HERO_SUCCESS",
  DELETE_REMOVE_HERO_ERROR = "[HERO] DELETE_REMOVE_HERO_ERROR",
}

export enum MessageActions {
  ADD_MESSAGE = "[Messages] ADD_MESSAGE",
}
