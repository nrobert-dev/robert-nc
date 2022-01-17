import React from "react"

export enum Themes {
  Light = "light",
  Dark = "dark"
}

export type Theme = {
  id: Themes,
  main: string,
  secondary: string,
  text: {
    main: string,
    secondary: string
  }
  filler: string,
  dark: string,
  backgroundSet: {
    start: string,
    end: string
  },
  cards: {
    background: string
  }
};

export interface Action {
  type: string,
  payload?: any
}

export interface State {
  currentTheme: Theme
}

export interface Context {
  state: State,
  dispatch?: React.Dispatch<Action>
}

export type Direction = "x" | "y";

export interface Animation {
  triggered: boolean,
  delay?: string
  direction?: Direction
}