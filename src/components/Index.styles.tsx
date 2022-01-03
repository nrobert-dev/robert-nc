import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';


/* Header */
const HeaderContainer = styled.nav`
    width : 100%;
    height : 40px;
    margin-top : 11px;
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
    Container
}


