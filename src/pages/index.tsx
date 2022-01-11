import React from "react";
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

type Theme = {
    main : string,
    secondary : string,
    text : {
        main : string,
        secondary : string
    }
    filler : string
}

export const mainTheme : Theme = {
    main : '#F27D42',
    secondary : '#B12F56',
    text : {
        main : '#E1E1E1',
        secondary : '#C4C4C4'
    },
    filler : '#5F5F5F'
}

const IndexPage = () => {
    return(
        <ThemeProvider theme={mainTheme}> 
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
        </ThemeProvider>
    )
}

export default IndexPage;
