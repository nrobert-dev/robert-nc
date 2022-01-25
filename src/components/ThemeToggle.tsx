import React from 'react';
import styled from 'styled-components';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { HELPFUL_URLS } from '../utils';
import Tooltip from '@mui/material/Tooltip';
import LightTooltip from './CustomTooltip';

const ToggleWrapper = styled.div`
    border : 2px solid ${props => props.theme.secondary};
    padding : 2px;
    font-size : 10px;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-top : 7px;
    color : ${props => props.theme.secondary};

    transition : color 0.15s ease-in, border 0.15s ease-in;

    &:hover{
        color : ${props => props.theme.main};
        border : 2px solid ${props => props.theme.main};
    }
`;

const IconWrapper=styled(ToggleWrapper)`
    border : none;
    border-radius : none;
    &:hover{
        border : none;
    }

    a {
        color : ${props => props.theme.secondary};
    }

    a:hover{
        color : ${props => props.theme.main};
    }
`;

const SideItems = styled.div`
    position : fixed;
    bottom : 16px;
    padding : 2px;
    font-size : 10px;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    width : 45px;
    right : 16px;
`;

interface ThemeProps {
    darkModeOn : boolean,
    toggleTheme : () => void
}


const ThemeToggle = ({darkModeOn, toggleTheme} : ThemeProps) => {
    return(
        <SideItems>
            <IconWrapper>
                <a href={HELPFUL_URLS.artstation} target={'_blank'}>
                    <LightTooltip placement="left-start" title='Art Station'>
                        <ViewInArIcon fontSize='medium'/>
                    </LightTooltip>
                 
                </a> 
            </IconWrapper>
            <IconWrapper>  
                <a href={HELPFUL_URLS.github} target={'_blank'}>
                    <LightTooltip placement="left-start" title='Github'>
                        <GitHubIcon fontSize='medium'/>  
                    </LightTooltip>
                     
                </a>
            </IconWrapper>
             <IconWrapper> 
                <a href={HELPFUL_URLS.linkedIn} target={'_blank'}>
                    <LightTooltip placement="left-start" title='LinkedIn'>
                        <LinkedInIcon fontSize='medium'/>
                    </LightTooltip>   
                </a> 
            </IconWrapper>
            <ToggleWrapper onClick={() => toggleTheme()}>
                    <LightTooltip placement="left-start" title='Theme Toggle'>
                        {darkModeOn ? <DarkModeIcon fontSize='medium'/> : <WbSunnyIcon fontSize='medium'/>}
                    </LightTooltip>   
            </ToggleWrapper>    
        </SideItems>      
    )
};

export default ThemeToggle;