import React, {useState} from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface HeaderProps {
    expanded : boolean
}
const Header = styled.div<HeaderProps>`
     width : 300px;
     height : 40px;
     color : ${props => props.expanded ? props.theme.main : props.theme.text.main};
     display : flex;
     align-items : center;
     cursor : pointer;
     user-select : none;
     margin : 5px 0px;

     font-weight : ${props => props.expanded ? 500 : 400};

     border-bottom : ${props => props.expanded ? `2px solid ${props.theme.main}` : `1px solid ${props.theme.secondary}`};
     transition : border 0.3s ease-in;
`;

const Body = styled.div<HeaderProps>`
    padding : ${props => props.expanded ? '10px 20px' : '0px'};
    width : 300px;
    max-height : ${props => props.expanded ? '200px' : '0px'};
    transition : max-height 0.4s ease-in, margin 0.4s ease-in, padding 0.4s ease-in;
    overflow : hidden;
    color :  ${props => props.theme.text.main};
    margin-bottom : ${props => props.expanded ? '10px' : '0px'};
`;

const Arrow = styled.span<HeaderProps>`
    svg{  
        transform : ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};  
        transition : transform 0.2s ease-in-out;
    }
   
`;

interface ExpandableProps {
    question : string;
    answer : string
}
const Expandable = ({question, answer, ...rest}: ExpandableProps) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    return(
        <div {...rest}>
            <Header  expanded={expanded} onClick={() => setExpanded(!expanded)}>
                <Arrow expanded={expanded}>
                    <KeyboardArrowDownIcon/>
                </Arrow>
                {question}
            </Header>
            {<Body expanded={expanded}>
                {answer}
            </Body>}
        </div>
    );
}

export default Expandable;