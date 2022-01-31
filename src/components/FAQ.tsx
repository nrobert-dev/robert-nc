import React from 'react';
import { HELPFUL_URLS } from '../utils';
import Expandable from './Expandable';
import * as SC from "./Index.styles";

const FAQ = () => {
    return(
        <SC.FAQContainer id='contact'>
              <h4>Frequently Asked Questions</h4>
              <SC.FAQWrapper>
                    <Expandable question='Why collaborate with me?' 
                        answer='Because I always supply top quality work. I am very serious about each project I take on and strive to ensure maximum quality throughout all its stages of development.'/>
                    <Expandable  question='What are your rates?' answer='If you are interested in my rates, let us have a chat. My rates can vary based on the scope of the project, difficulty and time estimations.'/>
                    <Expandable  question='What is your availability?' answer='At the moment I am available for part-time, shorter duration projects (between 1-3 months).'/>
                    <Expandable  question='How do I contact you?' answer={`Drop me an email at ${HELPFUL_URLS.mail.slice(7)}. Always happy to chat!`}/>
                </SC.FAQWrapper>
        </SC.FAQContainer>
     
    )
};

export default FAQ;