import * as React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import * as SC from "../components/Index.styles";
import Seo from "../components/seo"

type Theme = {
    main : string,
    secondary : string,
    text : {
        main : string,
        secondary : string
    }
    filler : string
}

const mainTheme : Theme = {
    main : '#F27D42',
    secondary : '#B12F56',
    text : {
        main : '#E1E1E1',
        secondary : '#C4C4C4'
    },
    filler : '#5F5F5F'
}

const IndexPage = () => (
  <ThemeProvider theme={mainTheme}> 
    <SC.Container>
        <Header/>
        <SC.GlobalStyle/>
        <Seo title="Robert NC" />
        <h2>The brown fox jumped over the fence</h2>
    </SC.Container>
  </ThemeProvider>
)

export default IndexPage
