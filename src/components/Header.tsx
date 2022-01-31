import React from 'react';
import { useOffset, useWindowSize } from '../hooks';
import * as SC from './Index.styles';
import {NavItem} from "../types/types";


export const navItems : NavItem[] = [
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
    const {width} = useWindowSize();

    return(
        width && width > 768 ? <SC.HeaderContainer animTriggered={offset > 3}>
            <SC.NavGroup>
                {navItems.map((element,index) => 
                <SC.NavItem onClick={() => window.location.replace('/#'+element.path)}>
                    <SC.NavNumber>{'0'+index}. </SC.NavNumber>
                    {element.title}
                    <SC.NavLine/>
                </SC.NavItem>)}
            </SC.NavGroup>
        </SC.HeaderContainer> : null
    );
}

export default Header;