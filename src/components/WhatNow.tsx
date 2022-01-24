import React from 'react';
import { HELPFUL_URLS } from '../utils';
import * as SC from "./Index.styles";

const WhatNow = () => {
    return(
        <SC.WhatNowWrapper>
            <div>
                <h5>What now?</h5>
                <h1>Let's have a chat!</h1>
            </div>
            <SC.ContactMeButton href={HELPFUL_URLS.mail}>GET IN TOUCH</SC.ContactMeButton>
        </SC.WhatNowWrapper>
    );
}

export default WhatNow;