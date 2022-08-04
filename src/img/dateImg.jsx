import React from 'react';
import classes from './dateImg.module.css'
const DateImg = (props) => {
    return (
        <svg className={classes.imgSvg} width="16" height="16" fill="none" viewBox="0 0 16 16"
             xmlns="http://www.w3.org/2000/svg" focusable="false">
            <g clipPath="url(#ffcdbba4__clip0_20741_4788)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M4.26638 13.7326V10.5328H7.46724V13.7326H4.26638ZM4.26638 9.46617V6.26638H7.46617V9.46617H4.26638ZM0 13.7326V10.5328H3.19979V13.7326H0ZM0 9.46617V6.26532H3.19979V9.46617H0ZM8.53276 9.46617V6.26638H11.7326V9.46617H8.53276ZM8.53276 13.7326V10.5328H11.7326V13.7326H8.53276ZM8.53276 5.19979V2H11.7326V5.19979H8.53276ZM12.7991 9.46617V6.26532H16V9.46617H12.7991ZM12.7991 5.19979V2H16V5.19979H12.7991ZM4.26638 5.19979V2H7.46724V5.19979H4.26638Z"
                      fill={props.white ? "none" : "currentColor"}></path>
            </g>
            <defs>
                <clipPath id="ffcdbba4__clip0_20741_4788">
                    <rect width="16" height="16" fill="white"></rect>
                </clipPath>
            </defs>
        </svg>
    );
};

export default DateImg;