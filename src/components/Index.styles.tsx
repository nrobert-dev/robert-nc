import styled, {createGlobalStyle} from 'styled-components';
import { fadeInStyleCreator, lerp, staticStyleCreator} from '../utils';
import { Animation } from "../types/types"

interface ContactProps {
    animTriggered? : boolean
}

const AnimationWrapper = styled.div<Animation>`
    transition : all 1s ease-in-out;
    transition-delay : ${props => props.delay || 0};
    position : relative;

    ${props => props.triggered ? fadeInStyleCreator(props.direction) : staticStyleCreator(props.direction)}; 
`;

/* Header */
const HeaderContainer = styled.nav<ContactProps>`
    width : 100%;
    height : 70px;
    margin-bottom : 8px;
    box-sizing : border-box;
    display : flex;
    flex-direction : row;
    justify-content : flex-end;
    align-items : center;
    position : relative;
    box-shadow: ${props => props.animTriggered ? 'box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;' : null};

    top : ${props => props.animTriggered ? '-60px' : '0px'};

    transition : top 0.4s ease-in, box-shadow 0.4s ease-in;
`;

const NavGroup = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

const NavItem = styled.li`
    text-align: center;
    padding: 16px;
    text-decoration: none;
    float : left;
    font-size : 14px;
    font-weight : bold;
    color :  ${props => props.theme.text.main};
    cursor : pointer;

    &:hover{
        div {
            width : 80%;
            background : ${props => props.theme.main};
        }
        span {
            margin-right : 3px;
        }
    }
`;

const NavNumber = styled.span`
    color : ${props => props.theme.main};
`;
const NavLine = styled.div`
    height : 2px;
    background : white;
    width : 0px;

    transition : width 0.2s ease-in, background 0.4s ease-in;
`;

const SayHiButton = styled.div<ContactProps>`
    opacity : ${props => props.animTriggered ? 1 : 0};
    position : fixed;
    top : 19px;
    left : 25px;
    color : ${props => props.theme.main};
    font-size : 23px;
    font-weight : 500;
    cursor : pointer;
    user-select : none;

    transition : color 0.1s ease-in-out, opacity 0.5s ease-in-out;
   

    svg{
        filter: drop-shadow( 3px 2px 0px ${props => props.theme.secondary});
        margin-right : 4px;
        transition : filter 0.1s ease-in-out;
    }

    &:hover{
        svg{
            filter: drop-shadow( 3px 2px 0px ${props => props.theme.main});
            color : ${props => props.theme.secondary};
        }
    }

    &:hover{
        color : ${props => props.theme.secondary};
    }
 
`;
/* End Header */



/* Section */
const Section = styled.section`
    position : relative;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
    margin : 60px 0px;
`;

interface RectProps {
    alignment : string,
    width : string
}
interface Stripes {
    scroll : number
}
const BackgroundStripes = styled.div<Stripes>`
    width : 100%;
    background: repeating-linear-gradient(
        45deg,
        ${props => props.theme.dark},
        ${props => props.theme.dark} 100px,
        transparent 100px,
        transparent 200px
    );
    height : 100%;
    opacity : ${props => lerp(0,0.3,props.scroll/6000)};
    border-radius : 6px;
    position : fixed;
    bottom : 0;
    z-index : -1;
    right : 0;      
`;
const Rectangle = styled.div<RectProps>` 
    width : ${props => props.width};
    background: repeating-linear-gradient(
        45deg,
        ${props => props.theme.dark},
        ${props => props.theme.dark} 10px,
        transparent 10px,
        transparent 20px
      );
    height : 300px;
    border-radius : 6px;
    position : absolute;
    z-index : -1;
    top: 50%;
    transform: translateY(-50%);
    right : ${props => props.alignment === 'right' ? 0 : null};
    left : ${props => props.alignment === 'left' ? 0 : null};
`;
const Title = styled.h1`
    color : ${props => props.theme.text.main};
    font-size : 56px;
    font-weight : 400;
    margin : 0;

    span {
        color : ${props => props.theme.secondary};
    }
    strong {
        color : ${props => props.theme.main};
    }
`;
const Description = styled.h4`
    color : ${props => props.theme.text.main};
    font-size : 22px;
    font-weight : 300;
`;

const ContactMeButton = styled.div<ContactProps>`
    height : ${props => props.animTriggered ? '2px' : '46px'};
    overflow : hidden;
    width : 200px;
    text-align : center;
    line-height : 46px;
    color : ${props => props.theme.text.main};
    border-radius : 9px;
    background : ${props => props.theme.main};
    box-shadow: ${props => props.theme.main} 0px 0px 0px 0px inset, ${props => props.theme.backgroundSet.start} 6px 7px 0px -3px, ${props => props.theme.secondary} 6px 7px;
    cursor : pointer;
    user-select : none;

    transition : background 0.1s ease-in-out, box-shadow 0.1s ease-in-out, height 0.5s ease-in-out;


    &:hover{
        background : ${props => props.theme.secondary};
        box-shadow: ${props => props.theme.secondary} 0px 0px 0px 0px inset, ${props => props.theme.backgroundSet.start} 6px 7px 0px -3px, ${props => props.theme.main} 6px 7px;
    }

    &:active{
        box-shadow: #19223C 0px 0px 0px 0px inset, ${props => props.theme.backgroundSet.start} 2px 4px 0px -3px, #19223C 2px 4px; 
    }
`;

const AnimatedSvg = styled.svg<ContactProps>`
    display : inline-block;
    margin : auto;
    transform : ${props => props.animTriggered ? 'rotate(90deg) scale(1,0.8)' : null};
    transition : transform 0.5s ease-in;

    text{
        opacity : ${props => props.animTriggered ? '0' : '1'};
        transition : opacity 0.1s ease-in;
        fill : ${props => props.theme.secondary};
    }

    line {
        stroke : ${props => props.theme.secondary};
        strokeWidth : 2;
    }
`;


/* Info Box */
const InfoWrapper = styled.div`
    min-width : 650px;
`

const InfoHeaderWrapper = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    margin-bottom : 37px;
`;

const SectionTitle = styled.div`
    min-width : 200px;
    color : ${props => props.theme.main};
    font-size : 25px;

    span{
        color : ${props => props.theme.secondary};
    }
`;

const SectionHeaderDelimiterCircle = styled.div`
    width : 20px;
    height: 14px; 
    border-radius : 50%;
    background : ${props => props.theme.main};
`;

const SectionHeaderDelimiterLine = styled.div`
    width : 100%;
    height : 2px;
    background : ${props => props.theme.main};
`;

const SectionText = styled.div`
    color : ${props => props.theme.text.main};
    margin-top
`;

const TabContentWrapper = styled.div`
    padding : 8px 12px;
`;
const MainPosition = styled.h5`
    color : ${props => props.theme.text.main};
    font-size : 15px;
    font-weight : 500px;
`;

const TechStackTitle = styled.h2`
    color : ${props => props.theme.main};
    font-size : 22px;
    font-weight : 400;

    display : flex;
    align-items : center;
    svg{
        margin : 0px 4px;
        cursor : pointer;
        color : ${props => props.theme.filler};

        &:hover{
            color : ${props => props.theme.text.secondary};
        }
    }
`;


const BulletList = styled.ul`
    li{
        display : flex;
        align-items : center;
        margin : 4px 0px;

        svg{
            color : ${props => props.theme.secondary};
            margin-right : 8px;
        }
    }
    list-style-type: none;
    color : ${props => props.theme.text.main};
    font-size : 13px;
`;

const GlobalStyle = createGlobalStyle`
    html {
        min-height: 100%;
        scroll-behavior: smooth;
    }
    body {
        margin : 0;
        padding : 0;
        background : linear-gradient(${props => props.theme.backgroundSet.start} 60%, ${props => props.theme.backgroundSet.end} 82%);
        font-family: 'Roboto Slab', serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: hsla(0, 0%, 0%, 0.8);
        word-wrap: break-word;
        font-kerning: normal;
    }

`;

const Container = styled.div`
    max-width : 1310px;
    margin : 0 auto;
`;

/* Services Section */
const ServicesSection = styled.div`
    background: ${props => props.theme.dark};    
    margin : 200px 0px;
    padding : 20px 0px;

    h2 {
        text-align : center;
        color : ${props => props.theme.text.main};
    }
`;

const ServicesWrapper = styled.div`
    margin : 0 auto;
    max-width : 1400px;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
`;

const ServiceWrapper = styled.div`
    max-width : 350px;
    color : ${props => props.theme.text.main};
    display : flex;
    flex-direction : column;

    h3 {    
        font-size : 18px;
        font-weight : 500px;
        text-align : center;
        width : 100%;
    }
`;

/* Articles */
const ArticlesWrapper = styled.section`
    width : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;
    margin-top : 10px;
    
    p {
        color : ${props => props.theme.text.secondary};
    }
`;

/* Project */
const ProjectsWrapper = styled.section`
    width : 100%;
    display : flex;
    justify-content : center;
    flex-direction : column;
`;

const ProjectWrapper = styled.div`
    display : flex;
    flex-direction : row;
    margin-bottom : 49px;
`;

const DescriptionWrapper = styled.div`
    max-width : 600px;
    background: ${props => props.theme.cards.background};
    border-radius : 6px;
    position : relative;
    margin : auto 0;
    box-sizing : border-box;
    padding : 20px 25px;
    z-index : 0;
    box-shadow: ${props => props.theme.main} 0px 0px 0px 0px inset,  ${props => props.theme.backgroundSet.start} -8px 9px 0px -3px, ${props => props.theme.secondary} -8px 9px;

    h4 {
        color : ${props => props.theme.secondary};
        margin : 0;
        font-size : 22px;
        font-weight : 400;
    }

    p {
        color : ${props => props.theme.text.main};
        font-size : 14px;
    }
`;

const VisitProject = styled.div`
    position : absolute;
    top : 20px;
    right : 20px;
    cursor : pointer;
    color : ${props => props.theme.secondary};
    z-index : 10;

    svg{
        margin : 0px 5px;
        &:hover{
            color : ${props => props.theme.text.secondary};
        }
    }
  
`;

const ProjectImageWrapper = styled.div`
    position : relative;
    overflow : hidden;
    box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
    border-radius : 10px;

    &:hover{
        > * {
            &:first-child {
                opacity : 0.2;
            }
          }
    }
`;

const ProjectImageGradient = styled.div`
     position : absolute;
     inset : 0 0 0 0;
     border-radius : 10px;
     background : linear-gradient(90deg, rgba(177,47,86,0.6390756986388305) 0%, rgba(26,102,213,0.5130252784707633) 100%);
     z-index : 11;

     transition : opacity 0.3s ease-in;
`;


const FAQContainer = styled.section`
    width : 100%;
    margin : 200px 0px;
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;

    h4{
        grid-area : hd;
        color : ${props => props.theme.main};
        font-size : 22px;
        text-align : center;
    }
`;
const FAQWrapper = styled.div`
    width : 800px;
    display : flex;
    justify-content : space-around;
    flex-direction : row;
    flex-wrap : wrap;
`;

export const WhatNowWrapper = styled.section`
    margin : 300px 0px 100px 0px;
    height : 200px;
    display : flex;
    justify-content : space-around;
    align-items : center;
    flex-direction : column;

    h1{
        color : ${props => props.theme.main};
        font-size : 37px;
        margin : 0;
    }

    h5{
        color : ${props => props.theme.text.main};
        font-size : 20px;
        font-weight : 400;
        margin : 0;
    }
`;


export {
    NavLine,
    NavGroup,
    NavItem,
    NavNumber,
    HeaderContainer,
    GlobalStyle,
    Container,
    Section,
    Rectangle,
    Title,
    Description,
    ContactMeButton,
    SayHiButton,
    AnimatedSvg,
    InfoWrapper,
    InfoHeaderWrapper,
    SectionTitle,
    SectionHeaderDelimiterCircle,
    SectionHeaderDelimiterLine,
    SectionText,
    MainPosition,
    BulletList,
    TabContentWrapper,
    ServiceWrapper,
    ServicesWrapper,
    ServicesSection,
    ArticlesWrapper,
    TechStackTitle,
    ProjectWrapper,
    ProjectsWrapper,
    DescriptionWrapper,
    VisitProject,
    FAQWrapper,
    FAQContainer,
    AnimationWrapper,
    ProjectImageGradient,
    ProjectImageWrapper,
    BackgroundStripes
}


