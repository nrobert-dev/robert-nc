import React from 'react';
import * as SC from './Index.styles';


const navArray : string[] = [
    'About',
    'Services',
    'Writing',
    'Contact'
];

const Header = () => {
    return(
        <SC.HeaderContainer>
            <SC.NavGroup>
                {navArray.map((element,index) => 
                <SC.NavItem>
                    <SC.NavNumber>{'0'+index}. </SC.NavNumber>
                    {element}
                    <SC.NavLine/>
                </SC.NavItem>)}
            </SC.NavGroup>
        </SC.HeaderContainer>
    );
}

export default Header;