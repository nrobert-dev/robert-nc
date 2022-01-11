import styled from 'styled-components';
import { Animation } from '../../types';
import { StyleInObject, StyleOutObject } from '../../utils';


const AboutMeWrapper = styled.section<Animation>`  
    margin : 200px 0px;
    transition : all 1s ease-in-out;
    position : relative;

    ${props => props.triggered ? StyleInObject : StyleOutObject}; 
`;

export {
    AboutMeWrapper
}