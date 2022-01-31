import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {navItems} from "./Header";
import * as SC from "./Index.styles";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


interface SideBarProps {
    show : boolean
}

const scaleAnim = keyframes`
  from {
    transform: scale(1);
  }

  50% {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;


const SidebarWrapper = styled.div<SideBarProps>`
    position : fixed;
    width : 340px;
    height : 100%;
    background : ${props => props.theme.backgroundSet.end};
    box-sizing : border-box;
    justify-content : center;
    align-items : center;
    z-index : 100;
    color : white;
    display : flex;
    right : 0px;
    top : 0px;
    flex-direction : column;
    border-left : 2px solid ${props => props.theme.secondary};

    transform : ${props => props.show ? 'translate(0px, 0px)' : 'translate(400px,0px)'};

    transition : transform 0.4s ease-in;
`;

const SidebarList = styled.ul`
   height : 80%;
   display : flex;
   flex-direction : column;
 
   align-items : center;
   list-style-type: none;
   margin: 0;
   padding: 0;
   overflow: hidden;

   li {
       font-size : 20px;
   }
`;

const Delimiter = styled.div`
   width : 35%;
   margin : 0 auto;
   height : 1px;
   background : ${props => props.theme.main};
   margin : 10px 0px;
`;

const Icon = styled.div<{anim : any}>`
   position : fixed;
   top : 19px;
   right : 40px;
   color : ${props => props.theme.secondary};
   z-index : 101;
   
   animation: ${props => props.anim} 0.4s linear;
`;

const SidebarContainer = styled.div`
    @media only screen and (max-width: 600px) {
        display : block;
    }
    @media only screen and (min-width: 600px) {
        display : block;
    }
    @media only screen and (min-width: 768px) {
        display : none;
    }
    @media only screen and (min-width: 992px) {
        display : none;
    }
    @media only screen and (min-width: 1200px) {
        display : none;
    }
`;


const Sidebar = React.memo(()  => {
    const [open, setOpenStatus] = useState<boolean>(false);
    return(
        <SidebarContainer style={{position : 'relative'}}>
            {/* Need unique key to reset anim state */}
             <Icon key={+new Date()} anim={scaleAnim} onClick={() => setOpenStatus(!open)}>
                {open ? <CloseIcon fontSize='large'/> : <MenuIcon fontSize='large'/>}
             </Icon>
             <SidebarWrapper show={open}> 

                <Delimiter/>
                <SidebarList>
                    {navItems.map((element,index) => 
                        <SC.NavItem onClick={() => window.location.replace('/#'+element.path)}>
                            <SC.NavNumber>{'0'+index}. </SC.NavNumber>
                            {element.title}
                            <SC.NavLine/>
                        </SC.NavItem>)
                    }
                </SidebarList>
            </SidebarWrapper>
        </SidebarContainer>
    )
});

export default Sidebar;