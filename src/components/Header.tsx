import React from 'react';
import { useOffset } from '../hooks';
import * as SC from './Index.styles';

const navArray : string[] = [
    'About',
    'Services',
    'Writing',
    'Contact'
];
const Header = () => {
    const [offset] = useOffset();

    return(
        <SC.HeaderContainer animTriggered={offset > 3}>
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