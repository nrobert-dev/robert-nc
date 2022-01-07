import React from 'react';
import * as SC from "./Index.styles";
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { useOffset } from '../hooks';
import {THEME} from '../utils';

const LandingSection = () => {
    const [offset] = useOffset();
    return(
        <>
            <SC.Section>
                <SC.SayHiButton animTriggered={offset > 400}>
                    <FontAwesomeIcon icon={faCommentAlt}/> Say Hi!
                </SC.SayHiButton>
                            
                <div style={{maxWidth:'38%'}}>
                    <SC.Title>Hello, my</SC.Title>
                    <SC.Title>name is <strong style={{color : THEME.main}}>Robert</strong>.</SC.Title>
                    <SC.Description>I am a <strong>full-stack software engineer</strong> living in Romania. I specialize in crafting <strong>dynamic, feature rich Web Experiences.</strong></SC.Description>
                    <SC.ContactMeButton animTriggered={offset > 400}>GET IN TOUCH</SC.ContactMeButton>
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
                <SC.Rectangle width='70%' alignment='right'/>
            </SC.Section>
            <SC.Section>
                    <SC.AnimatedSvg animTriggered={offset > 500} width="300" height="120">
                        <line x1="150" y1="0" x2="150" y2="120" style={{stroke : THEME.secondary , strokeWidth : 2}}/>
                        <text x="160" y="35" style={{fill : THEME.secondary}}>
                            Scroll
                            <animate attributeName="y" values="35;50;35" dur="2s" repeatCount="indefinite" />
                        </text>
                    </SC.AnimatedSvg>
            </SC.Section>
        </>
    )
};

export default LandingSection;