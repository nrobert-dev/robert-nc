import React from 'react';
import styled from 'styled-components';
import IosShareIcon from '@mui/icons-material/IosShare';
import ArticleIcon from '@mui/icons-material/Article';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ArticleWrapper = styled.div`
    width: 288px;
    height: 295px;

    background: ${props => props.theme.cards.background};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    position : relative;

    padding : 20px 12px;
    transition : box-shadow 0.2s ease-in;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }

    box-sizing : border-box;
    h5{
        margin-top : 47px;
        color : ${props => props.theme.text.main};
        font-size : 16px;
        font-weight : 400;

    }

    p {
        color : ${props => props.theme.text.main};
        font-size : 12px;
    }
`;

interface IconTagProps {
    top? : string | number,
    right? : string | number,
    left? : string | number,
    bottom? : string | number,
    accessable : boolean
}
const IconTag = styled.div<IconTagProps>`
    position : absolute;
    top : ${props => props.top};
    right : ${props => props.right};
    left : ${props => props.left};
    bottom : ${props => props.bottom};
    color : ${props => props.accessable ? props.theme.text.main : props.theme.secondary};
    cursor : ${props => props.accessable ? 'pointer' : 'normal'};

    &:hover{
        color : ${props => props.accessable ? props.theme.text.secondary : props.theme.secondary};
    }
`;

interface ArticleProps {
    title : string,
    description : string,
    url? : string,
    tag : string
}
const Article = (props : ArticleProps) => {
    const {title, description, tag} = props;
    return(
        <ArticleWrapper>
            <IconTag accessable={false} top={'10px'} left={'10px'}>
                <ArticleIcon fontSize='large'/>
            </IconTag>
            <IconTag accessable={true} top={'12px'} right={'20px'}>
                <IosShareIcon/>
            </IconTag>
            <h5>{title}</h5>
            <p>{description}</p>
            <IconTag accessable={false} bottom={'10px'} right={'14px'}>
                {tag}
                <LocalOfferIcon fontSize='small'/>     
            </IconTag>
        </ArticleWrapper>
    )
}

export default Article;