import React from 'react';
import styled from 'styled-components';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ToggleWrapper = styled.div`
    position : fixed;
    bottom : 16px;
    border : 2px solid ${props => props.theme.secondary};
    padding : 2px;
    font-size : 10px;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    right : 16px;
    color : ${props => props.theme.secondary};
`;

interface ThemeProps {
    darkModeOn : boolean,
    toggleTheme : () => void
}

const ThemeToggle = ({darkModeOn, toggleTheme} : ThemeProps) => {
    return(
        <ToggleWrapper onClick={() => toggleTheme()}>
            {darkModeOn ? <DarkModeIcon fontSize='medium'/> : <WbSunnyIcon fontSize='medium'/>}
        </ToggleWrapper>
    )
};

export default ThemeToggle;