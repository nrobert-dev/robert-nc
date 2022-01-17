import React, {useState, useContext, useReducer} from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import * as SC from "../components/Index.styles";
import Seo from "../components/seo"
import LandingSection from "../components/LandingSection";
import AboutMe from "../components/AboutMe/AboutMe";
import Services from "../components/Services";
import Writing from "../components/Writing";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import WhatNow from "../components/WhatNow";
import { AppStore, LIGHT_THEME, THEME, State, Action, Themes } from "../utils";
import ThemeToggle from "../components/ThemeToggle";

const initialState = {
    currentTheme : THEME
}

const SET_THEME_ACTION = 'gatsby/theme/SET_THEME_ACTION'

const reducer = (state : State, action : Action) : State => {
    switch(action.type){
        case SET_THEME_ACTION:{
            return {...state, currentTheme : action.payload}
        }
        default:
            return state;
    }
};


const IndexPage = () => {
    const [state,dispatch] = useReducer(reducer, initialState);

    const toggleTheme = () => {
        dispatch({
            type : SET_THEME_ACTION,
            payload : state.currentTheme.id === Themes.Dark ? LIGHT_THEME : THEME

        })
    }

    return(
        <AppStore.Provider value={{state,dispatch}}>
                <ThemeProvider theme={state.currentTheme}> 
                <SC.Container>
                    <SC.GlobalStyle/>
                    <Seo title="Robert NC" />

                    <Header/>
                    <LandingSection/>
                    <AboutMe/>       
                </SC.Container>

                <Services/>  

                <SC.Container>
                <Writing/>  
                <Projects/>  
                <FAQ/> 
                <WhatNow/>
                </SC.Container>  
                <ThemeToggle darkModeOn={state.currentTheme.id === Themes.Dark} toggleTheme={toggleTheme}/>
            </ThemeProvider>
        </AppStore.Provider>  
    )
}

export default IndexPage;
