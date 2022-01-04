import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';


interface ContactProps {
    animTriggered : boolean
}

/* Header */
const HeaderContainer = styled.nav`
    width : 100%;
    height : 40px;
    margin-top : 11px;
    margin-bottom : 8px;
    box-sizing : border-box;
    display : flex;
    flex-direction : row;
    justify-content : flex-end;
    align-items : center;
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
    top : 14px;
    left : 19px;
    color : ${props => props.theme.main};
    font-size : 21px;
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
const Section = styled.div`
    position : relative;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
`;
const Rectangle = styled.div`
    width : 70%;
    background : #19223C;
    height : 300px;
    position : absolute;
    z-index : -1;
    top: 50%;
    transform: translateY(-50%);
    right : 0;
`;
const Title = styled.h1`
    color : ${props => props.theme.text.main};
    font-size : 56px;
    font-weight : 400;
    margin : 0;
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
    box-shadow: ${props => props.theme.main} 0px 0px 0px 0px inset, #222E4F 6px 7px 0px -3px, ${props => props.theme.secondary} 6px 7px;
    cursor : pointer;
    user-select : none;

    transition : background 0.1s ease-in-out, box-shadow 0.1s ease-in-out, height 0.5s ease-in-out;


    &:hover{
        background : ${props => props.theme.secondary};
        box-shadow: ${props => props.theme.secondary} 0px 0px 0px 0px inset, #222E4F 6px 7px 0px -3px, ${props => props.theme.main} 6px 7px;
    }

    &:active{
        box-shadow: #19223C 0px 0px 0px 0px inset, #222E4F 2px 4px 0px -3px, #19223C 2px 4px; 
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
    }
`;

const GlobalStyle = createGlobalStyle`
    body {
        margin : 0;
        padding : 0;
        background : #222E4F;
        font-family: 'Roboto Slab', serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: hsla(0, 0%, 0%, 0.8);
        word-wrap: break-word;
        font-kerning: normal;
    }

`;

const Container = styled.div`
    max-width : 1500px;
    margin : 0 auto;
    height : 300px;
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
    AnimatedSvg
}


