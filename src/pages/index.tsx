import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import * as SC from "../components/Index.styles";
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

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

const IndexPage = () => {
    const [offset, setOffset] = useState(0);
  

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(
        <ThemeProvider theme={mainTheme}> 
            <SC.Container>
                <Header/>
                <SC.GlobalStyle/>
                <Seo title="Robert NC" />
             
                <SC.Section>
                    <SC.SayHiButton animTriggered={offset > 500}>
                        <FontAwesomeIcon icon={faCommentAlt}/> Say Hi!
                    </SC.SayHiButton>
                  
                
                    <div style={{maxWidth:'38%'}}>
                        <SC.Title>Hello, my</SC.Title>
                        <SC.Title>name is <strong style={{color : mainTheme.main}}>Robert</strong>.</SC.Title>
                        <SC.Description>I am a <strong>full-stack software engineer</strong> living in Romania. I specialize in crafting <strong>dynamic, feature rich Web Experiences.</strong></SC.Description>
                        <SC.ContactMeButton animTriggered={offset > 500}>GET IN TOUCH</SC.ContactMeButton>
                    </div>
                    <div style={{width : '62%', display : 'flex', justifyContent : 'center'}}>
                        <StaticImage
                            src="../images/laptop.png"
                            width={700}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                    </div>
                    <SC.Rectangle/>
                </SC.Section>
                <SC.Section>
                    <SC.AnimatedSvg animTriggered={offset > 650} width="300" height="220">
                        <line x1="150" y1="0" x2="150" y2="220" style={{stroke : mainTheme.secondary , strokeWidth : 2}}/>
                        <text x="160" y="35" style={{fill : mainTheme.secondary}}>
                            Scroll
                            <animate attributeName="y" values="35;50;35" dur="2s" repeatCount="indefinite" />
                        </text>
                    </SC.AnimatedSvg>
                </SC.Section>
                <SC.Section>
                    <div style={{maxWidth:'38%'}}>
                        <SC.Title>Hello, my</SC.Title>
                        <SC.Title>name is <strong style={{color : mainTheme.main}}>Robert</strong>.</SC.Title>
                        <SC.Description>I am a <strong>full-stack software engineer</strong> living in Romania. I specialize in crafting <strong>dynamic, feature rich Web Experiences.</strong></SC.Description>
                        <SC.ContactMeButton>GET IN TOUCH</SC.ContactMeButton>
                    </div>
                    <div style={{width : '62%', display : 'flex', justifyContent : 'center'}}>
                        <StaticImage
                            src="../images/laptop.png"
                            width={700}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                    </div>
                    <SC.Rectangle/>
                </SC.Section>
            </SC.Container>
        </ThemeProvider>
    )
}

export default IndexPage;
