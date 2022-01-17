import React, {useRef, useEffect, useState} from 'react';
import * as SC from "./Index.styles";
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { useOffset } from '../hooks';
import {THEME} from '../utils';

const LandingSection = () => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [offset] = useOffset();

    const imageRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const constrain = 90;

        if(containerRef && containerRef.current && imageRef && imageRef.current){
            
            const listener = (e : MouseEvent) : void => {
                const x = e.clientX;
                const y = e.clientY;

                let box = imageRef.current.getBoundingClientRect();
                let calcX = -(y - box.y - (box.height / 2)) / constrain;
                let calcY = (x - box.x - (box.width / 2)) / constrain;

                setRotationX(calcX);
                setRotationY(calcY);
            };
            containerRef.current.addEventListener('mousemove', listener);

            return () => containerRef.current?.removeEventListener('mousemove', listener);
        }
    },[]);

    return(
        <>
            <SC.Section ref={containerRef}>
                <SC.SayHiButton animTriggered={offset > 400}>
                    <FontAwesomeIcon icon={faCommentAlt}/> Say Hi!
                </SC.SayHiButton>
                            
                <div style={{maxWidth:'38%'}}>
                    <SC.Title>Hello, my</SC.Title>
                    <SC.Title>name is <strong>Robert</strong>.</SC.Title>
                    <SC.Description>I am a <strong>full-stack software engineer</strong> living in Romania. I specialize in crafting <strong>dynamic, feature rich Web Experiences.</strong></SC.Description>
                    <SC.ContactMeButton animTriggered={offset > 400}>GET IN TOUCH</SC.ContactMeButton>
                </div>
                <div ref={imageRef} style={{width : '62%', display : 'flex', justifyContent : 'center', transform : `perspective(800px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`}}>
                    <StaticImage  
                        src="../images/laptop.png"
                        width={700}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="A Gatsby astronaut"
                    />
                </div>
                <SC.Rectangle width='70%' alignment='right' style={{transform : `perspective(800px) rotateX(${rotationX*2}deg) rotateY(${rotationY/2}deg)`}}/>
            </SC.Section>
            <SC.Section>
                    <SC.AnimatedSvg animTriggered={offset > 500} width="300" height="120">
                        <line x1="150" y1="0" x2="150" y2="120"/>
                        <text x="160" y="35">
                            Scroll
                            <animate attributeName="y" values="35;50;35" dur="2s" repeatCount="indefinite" />
                        </text>
                    </SC.AnimatedSvg>
            </SC.Section>
        </>
    )
};

export default LandingSection;