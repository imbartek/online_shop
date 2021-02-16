import React from 'react';
import './MenuBtn.css';

const MenuBtn = () => {

    const handleClick = (e) => {
        const menu = document.querySelector('.menu_btn');
        menu.classList.toggle('open');
    }
    return (
        <div className="menu_btn" onClick={handleClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
}

export default MenuBtn;
