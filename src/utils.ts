import { Direction } from "./types";
import React from 'react';
import { string } from "prop-types";

export enum Themes {
    Light = 'light',
    Dark = 'dark'
}

type Theme = {
    id : Themes,
    main : string,
    secondary : string,
    text : {
        main : string,
        secondary : string
    }
    filler : string,
    dark : string,
    backgroundSet : {
        start : string,
        end : string
    },
    cards : {
        background : string
    }
}

export const THEME : Theme = {
    id : Themes.Dark,
    main : '#F27D42',
    secondary : '#B12F56',
    text : {
        main : '#E1E1E1',
        secondary : '#C4C4C4'
    },
    filler : '#5F5F5F',
    dark : '#0b0f1a',
    backgroundSet : {
        start : '#131a2b',
        end : '#1C0E12'
    },
    cards : {
        background : '#19223C'
    }
};

export const LIGHT_THEME : Theme = {
    id : Themes.Light,
    main : '#AADCEC',
    secondary : '#8814E2',
    text : {
        main : '#404B83',
        secondary : '#1a1a1a'
    },
    filler : '#2e2e2e',
    dark : '#AADCEC',
    backgroundSet : {
        start : '#F4F9FC',
        end : '#F4F9FC'
    },
    cards : {
        background : '#b7e0ed'
    }
}

export const fadeInStyleCreator = (direction : Direction = 'y') => {
    console.log(direction);
    return({
        opacity : 1,
        transform : direction === 'x' ? 'translateX(0)' : 'translateY(0)'
    })
};

export const staticStyleCreator = (direction : Direction = 'y') => {
    return({
        opacity : 0,
        transform : direction === 'x' ? 'translateX(150px)' : 'translateY(150px)'
    })
};


export const StyleInObject = {
    opacity : 1,
    transform : 'translateY(0)'
};

export const StyleOutObject = {
    opacity : 0,
    transform : 'translateY(150px)'
};


export interface Action  {
    type : string,
    payload? : any
}

export interface State {
    currentTheme : Theme
}

export interface Context {
    state : State,
    dispatch? : React.Dispatch<Action>
}


export const AppStore = React.createContext<Context | null>(null);

export const useApplicationState = () => {
    const context = React.useContext(AppStore);

    if(!context || !context.state){
        return ({currentTheme : THEME});
    }
    return context.state;
}