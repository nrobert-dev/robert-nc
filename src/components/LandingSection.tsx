import React, {useRef, useEffect, useState} from 'react';
import * as SC from "./Index.styles";
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { useOffset, useWindowSize } from '../hooks';
import { HELPFUL_URLS } from '../utils';


const LandingSection = () => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [offset] = useOffset();

    const {width} = useWindowSize();


    const imageRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const constrain = 90;

        if(containerRef && containerRef.current && imageRef && imageRef.current){
            
            const listener = (e : MouseEvent) : void => {
                const x = e.clientX;
                const y = e.clientY;

                // @ts-ignore
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
                    <a href={HELPFUL_URLS.mail}>
                        <FontAwesomeIcon icon={faCommentAlt}/> Say Hi!
                    </a>
                </SC.SayHiButton>
                            
                <SC.LandingPageTextWrapper>
                    <SC.Title>Hello, my</SC.Title>
                    <SC.Title>name is <strong>Robert</strong><span>.</span></SC.Title>
                    <SC.Description>I am a <strong>full-stack software engineer</strong> living in Romania. I specialize in crafting <strong>dynamic, feature-rich Web Experiences.</strong></SC.Description>
                    <SC.ContactMeButton href={HELPFUL_URLS.mail} animTriggered={offset > 400}>GET IN TOUCH</SC.ContactMeButton>
                </SC.LandingPageTextWrapper>
                <div ref={imageRef} style={{position : 'relative', width : '62%', display : 'flex', justifyContent : 'center', transform : `perspective(800px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`}}>
                    <StaticImage  
                        src="../images/landing_computer.png"
                        width={600}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="A Gatsby astronaut"
                    />
                    {width && width > 1000 && <>
                        <SC.FloatingImageWrapper right='80px' top='100px' x={Math.round(rotationX*2)} y={Math.round(rotationY*2)}>
                            <StaticImage  
                                        src="../images/mug.png"
                                        width={170}
                                        quality={95}
                                        formats={["auto", "webp", "avif"]}
                                        alt="A Gatsby astronaut"/>
                    
                        </SC.FloatingImageWrapper>
                        <SC.FloatingImageWrapper left='80px' top='130px' x={Math.round(rotationX*2)} y={Math.round(rotationY*2)}>
                            <StaticImage  
                                        src="../images/bulb.png"
                                        width={170}
                                        quality={95}
                                        formats={["auto", "webp", "avif"]}
                                        alt="A Gatsby astronaut"/>
                        </SC.FloatingImageWrapper>
                        <SC.FloatingImageWrapper left='150px' top='40px' x={Math.round(rotationX*2)} y={Math.round(rotationY*2)}>
                            <StaticImage  
                                        src="../images/cube.png"
                                        width={170}
                                        quality={95}
                                        formats={["auto", "webp", "avif"]}
                                        alt="A Gatsby astronaut"/>
                        </SC.FloatingImageWrapper>
                    </>}
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