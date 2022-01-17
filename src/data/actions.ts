import { Action, Theme } from "../types/types"

export const SET_THEME_ACTION = 'gatsby/theme/SET_THEME_ACTION';
export const setThemeActionCreator = (theme : Theme) : Action => ({
  type : SET_THEME_ACTION,
  payload : theme
})