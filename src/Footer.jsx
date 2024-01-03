import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,  faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { faGear, faGrip, faPhone} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
                <button className = "side-buttons" aria-label="phone-button"><FontAwesomeIcon icon={faPhone} /></button>
                <button className = "side-buttons" aria-label="user-button"><FontAwesomeIcon icon={faUser} /></button>
                <button id = "grid" aria-label="apps-button"><FontAwesomeIcon icon={faGrip} /></button>
                <button className = "side-buttons" aria-label="settings-button"><FontAwesomeIcon icon={faGear} /></button>
                <button className = "side-buttons" aria-label="dot-button"><FontAwesomeIcon icon={faCircleDot} /></button>
        </footer>
    );
};

export default Footer;