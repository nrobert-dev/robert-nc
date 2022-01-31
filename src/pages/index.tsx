import React, {useReducer} from "react";
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
import { LIGHT_THEME, DARK_THEME} from "../utils";
import ThemeToggle from "../components/ThemeToggle";
import { AppStore, useOffset } from "../hooks"
import { Themes, Action } from "../types/types"
import { initialState, rootReducer } from "../data/reducer"
import { setThemeActionCreator } from "../data/actions"
import Sidebar from "../components/Sidebar";



const IndexPage = () => {
    const [state,dispatch] = useReducer(rootReducer, initialState);
    const [offset] = useOffset();

    const toggleTheme = () => {
        const objectToDispatch : Action = setThemeActionCreator(state.currentTheme.id === Themes.Dark ? LIGHT_THEME : DARK_THEME);
        dispatch(objectToDispatch);
    }

    return(
        <AppStore.Provider value={{state,dispatch}}>
                <ThemeProvider theme={state.currentTheme}> 
                <Sidebar/>
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
                {state.currentTheme.id === Themes.Light && <SC.BackgroundStripes scroll={offset as number}/>}
                </SC.Container>  
                <ThemeToggle darkModeOn={state.currentTheme.id === Themes.Dark} toggleTheme={toggleTheme}/>
            </ThemeProvider>
        </AppStore.Provider>  
    )
}

export default IndexPage;
