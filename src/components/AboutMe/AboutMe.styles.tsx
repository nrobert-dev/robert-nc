import styled from 'styled-components';
import { staticStyleCreator, fadeInStyleCreator } from '../../utils';
import { Animation } from "../../types/types"


const AboutMeWrapper = styled.section<Animation>`  
    margin : 200px 0px;
    transition : all 1s ease-in-out;
    position : relative;

    ${props => props.triggered ? fadeInStyleCreator() : staticStyleCreator()}; 
`;

export const AboutMeContaienr = styled.div`
    width : 100%;
    display : flex;
    flex-direction : row;
    position : relative;

    @media only screen and (min-width: 400px) {
        flex-direction : column;
        align-items : center;

        .about-me-image{
            width : 100%;
            justify-content : center;
        }
    
        .about-me-text{
            width : 80%;
        }
    }
    @media only screen and (min-width: 768px) {
        flex-direction : column;
        align-items : center;

        .about-me-image{
            width : 100%;
            justify-content : center;
        }
    
        .about-me-text{
            width : 80%;
        } 
    }
    @media only screen and (min-width: 992px) {
        flex-direction : column;
        align-items : center;

        .about-me-image{
            width : 100%;
            justify-content : center;
        }
    
        .about-me-text{
            width : 80%;
        }      
    }
    @media only screen and (min-width: 1200px) {
        .about-me-image{
            width : 50%;
        }
    
        .about-me-text{
            width : 50%;
        } 

        flex-direction : row;
        position : relative;
    } 
`;

const TechTagResponsiveWrapper = styled.div`
    margin : 0 auto;
    width : 100%;

    @media only screen and (min-width: 400px) {
        margin-top : 90px;
        width : 80%;
    }
    @media only screen and (min-width: 768px) {
        width : 80%;
    }
    @media only screen and (min-width: 992px) {
        width : 90%;
    }
    @media only screen and (min-width: 1200px) {
        width : 90%;
    } 
`;


export {
    AboutMeWrapper,
    TechTagResponsiveWrapper
}