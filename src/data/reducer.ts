import { DARK_THEME } from "../utils"
import { Action, State } from "../types/types"
import { SET_THEME_ACTION } from "./actions"

export const initialState = {
  currentTheme : DARK_THEME
}

export const rootReducer = (state : State, action : Action) : State => {
  switch(action.type){
    case SET_THEME_ACTION:{
      return {...state, currentTheme : action.payload}
    }
    default:
      return state;
  }
};
