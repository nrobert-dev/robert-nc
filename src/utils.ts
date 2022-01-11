import { Direction } from "./types";

type Theme = {
    main : string,
    secondary : string,
    text : {
        main : string,
        secondary : string
    }
    filler : string
}

export const THEME : Theme = {
    main : '#F27D42',
    secondary : '#B12F56',
    text : {
        main : '#E1E1E1',
        secondary : '#C4C4C4'
    },
    filler : '#5F5F5F'
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