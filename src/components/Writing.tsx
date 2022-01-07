import React from 'react';
import * as SC from "./Index.styles";
import { StaticImage } from "gatsby-plugin-image"
import {THEME} from '../utils';
import Article from "../components/Article";

const Writing = () => {
    return(
        <div style={{margin : '200px 0px'}}>
            <div style={{width : '100%',  display : 'flex', justifyContent : 'flex-end'}}>
                        <SC.InfoHeaderWrapper style={{width : '50%', float : 'right'}}>
                            <SC.SectionTitle> <span style={{color : THEME.text.main}}>02.</span> Latest Posts<span style={{color : THEME.secondary}}>.</span></SC.SectionTitle>
                            <SC.SectionHeaderDelimiterCircle/>
                            <SC.SectionHeaderDelimiterLine/>
                        </SC.InfoHeaderWrapper>
            </div>
            <SC.ArticlesWrapper>
                    <Article tag="CASH" 
                        title="How to build a Wordpress theme" 
                        description="A business requires lot of things among them a good website for your approval. I can help!"/>
                    <Article tag="CASH" 
                        title="How to build a Wordpress theme" 
                        description="A business requires lot of things among them a good website for your approval. I can help!"/>
                    <Article tag="CASH" 
                        title="How to build a Wordpress theme" 
                        description="A business requires lot of things among them a good website for your approval. I can help!"/>      
                    <Article tag="CASH" 
                        title="How to build a Wordpress theme" 
                        description="A business requires lot of things among them a good website for your approval. I can help!"/>  
            </SC.ArticlesWrapper>
        </div>
    )
};

export default Writing;