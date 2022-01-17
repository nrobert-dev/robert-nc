import styled from 'styled-components';
import { staticStyleCreator, fadeInStyleCreator } from '../../utils';
import { Animation } from "../../types/types"


const AboutMeWrapper = styled.section<Animation>`  
    margin : 200px 0px;
    transition : all 1s ease-in-out;
    position : relative;

    ${props => props.triggered ? fadeInStyleCreator() : staticStyleCreator()}; 
`;

export {
    AboutMeWrapper
}