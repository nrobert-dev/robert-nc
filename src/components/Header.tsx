import React from 'react';
import { useOffset } from '../hooks';
import * as SC from './Index.styles';

interface NavItem {
    title : String,
    path : String
};

const navItems : NavItem[] = [
    {
        title : 'About',
        path : 'about'
    },
    {
        title : 'Services',
        path : 'services'
    },
    {
        title : 'Blog',
        path : 'blog'
    },
    {
        title : 'Projects',
        path : 'projects'
    },
    {
        title : 'Contact',
        path : 'contact'
    },

]

const Header = () => {
    const [offset] = useOffset();

    return(
        <SC.HeaderContainer animTriggered={offset > 3}>
            <SC.NavGroup>
                {navItems.map((element,index) => 
                <SC.NavItem onClick={() => window.location.replace('/#'+element.path)}>
                    <SC.NavNumber>{'0'+index}. </SC.NavNumber>
                    {element.title}
                    <SC.NavLine/>
                </SC.NavItem>)}
            </SC.NavGroup>
        </SC.HeaderContainer>
    );
}

export default Header;