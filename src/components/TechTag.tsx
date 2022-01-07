import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled.div`
    text-align : center;
    width : 90px;
    height : 40px;
    line-height : 40px;
    color : ${props => props.theme.text.main};
    font-size : 12px;
    box-shadow: ${props => props.theme.main} 0px 0px 0px 0px inset, #222E4F 6px 7px 0px -3px, ${props => props.theme.secondary} 6px 7px;

    border : 3px solid ${props => props.theme.main};
    display : inline-block;
    margin : 10px 10px;

    &:hover{
        background : ${props => props.theme.secondary};
        box-shadow: ${props => props.theme.secondary} 0px 0px 0px 0px inset, #222E4F 6px 7px 0px -3px, ${props => props.theme.main} 6px 7px;
    }
`;

interface TechProps {
    title : string,

}

const TechTag = ({title} : TechProps) => {
    return(
        <TagWrapper>
            {title}
        </TagWrapper>
    )
};

export default TechTag;