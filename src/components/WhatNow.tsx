import React from 'react';
import * as SC from "./Index.styles";

const WhatNow = () => {
    return(
        <SC.WhatNowWrapper>
            <div>
                <h5>What now?</h5>
                <h1>Let's have a chat!</h1>
            </div>
            <SC.ContactMeButton href='mailto:robert.nechitelea@gmail.com'>GET IN TOUCH</SC.ContactMeButton>
        </SC.WhatNowWrapper>
    );
}

export default WhatNow;