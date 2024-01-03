import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import "../src/css/callItem.css"

const CallItem = () => {
   return (
   <div className = "call-container">
        <FontAwesomeIcon icon={faPhone} id="call-icon"/>
        <div className ="call-details">
            <p id = "ph-no">+123456789</p>
            <p>tried to call you on user</p>
        </div>
        <p>7:00 am</p>
    </div>
    );
};

export default CallItem;