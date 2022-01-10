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

const SmallTagWrapper = styled(TagWrapper)`
    width : 70px;
    height : 30px;
    line-height : 30px;
    border : 2px solid ${props => props.theme.secondary};
    box-shadow: none;
    margin : 5px 5px;
    float : right;

    &:hover{
        background : none;
        box-shadow: none;
    }
`;

type Size = 'large' | 'small';
interface TechProps {
    title : string,
    size? : Size
}

const TechTag = ({title, size = 'large'} : TechProps) => {
    return(
        size === 'large' ? <TagWrapper>
            {title}
        </TagWrapper> : <SmallTagWrapper>
            {title}
        </SmallTagWrapper>
    )
};

export default TechTag;