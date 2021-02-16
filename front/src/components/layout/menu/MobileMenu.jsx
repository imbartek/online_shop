import React from 'react';
import './Mobile_menu.css';

const MobileMenu = () => {
    return (
        <div className="mobile_menu">
            <ul className="mobile_menu--top">
                <li>Woman</li>
                <li>Man</li>
                <li>Kids</li>
            </ul>
            <ul className="mobile_menu--middle">
                <li>News</li>
                <li>Collection</li>
                <li>Sale</li>
            </ul>
            <div className="mobile_menu--bottom">
                <p>Home</p>
                <p>My account</p>
            </div>
        </div>
    );
}

export default MobileMenu;
