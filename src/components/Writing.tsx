import React from 'react';
import * as SC from "./Index.styles";
import {THEME} from '../utils';
import Article from "../components/Article";
import { useInView } from 'react-intersection-observer';

const Writing = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return(
        <SC.AnimationWrapper ref={ref} triggered={inView} style={{margin : '200px 0px'}} direction='x'>
            <div style={{width : '100%',  display : 'flex', justifyContent : 'flex-end'}}>
                        <SC.InfoHeaderWrapper style={{width : '50%', float : 'right'}}>
                            <SC.SectionTitle> <span style={{color : THEME.text.main}}>02.</span> Latest Posts<span style={{color : THEME.secondary}}>.</span></SC.SectionTitle>
                            <SC.SectionHeaderDelimiterCircle/>
                            <SC.SectionHeaderDelimiterLine/>
                        </SC.InfoHeaderWrapper>
            </div>
            <SC.ArticlesWrapper>
                    <SC.AnimationWrapper triggered={inView} delay='100ms'>
                        <Article tag="CASH" 
                            title="How to build a Wordpress theme" 
                            description="A business requires lot of things among them a good website for your approval. I can help!"/>
                    </SC.AnimationWrapper>

                    <SC.AnimationWrapper triggered={inView} delay='400ms'>
                        <Article tag="CASH" 
                            title="How to build a Wordpress theme" 
                            description="A business requires lot of things among them a good website for your approval. I can help!"/>
                    </SC.AnimationWrapper>

                    <SC.AnimationWrapper triggered={inView} delay='700ms'>
                        <Article tag="CASH" 
                            title="How to build a Wordpress theme" 
                            description="A business requires lot of things among them a good website for your approval. I can help!"/>
                    </SC.AnimationWrapper>

                    <SC.AnimationWrapper triggered={inView} delay='1000ms'>
                        <Article tag="CASH" 
                            title="How to build a Wordpress theme" 
                            description="A business requires lot of things among them a good website for your approval. I can help!"/>
                    </SC.AnimationWrapper>
                  
                     
            </SC.ArticlesWrapper>
        </SC.AnimationWrapper>
    )
};

export default Writing;