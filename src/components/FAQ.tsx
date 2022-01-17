import React from 'react';
import Expandable from './Expandable';
import * as SC from "./Index.styles";

const FAQ = () => {
    return(
        <SC.FAQContainer>
              <h4>Frequently Asked Questions</h4>
              <SC.FAQWrapper>
                    <Expandable question='How much is a string?' answer='As long as you wish it to be my friend lorem ipsum dolor sit amet habemus igitur noj ad eiofh'/>
                    <Expandable  question='What are your rates?' answer='As long as you wish it to be my friend'/>
                    <Expandable  question='Why should I choose you?' answer='As long as you wish it to be my friend'/>
                    <Expandable  question='What is your availability?' answer='As long as you wish it to be my friend'/>
                    <Expandable  question='Are you interested in Y?' answer='As long as you wish it to be my friend'/>
                    <Expandable question='How much money do I need to pay?' answer='As long as you wish it to be my friend'/>
                </SC.FAQWrapper>
        </SC.FAQContainer>
     
    )
};

export default FAQ;