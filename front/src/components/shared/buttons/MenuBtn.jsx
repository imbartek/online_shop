import React, { useState } from 'react';
import { connect } from 'react-redux';
import './MenuBtn.css';
import { toggleMenu } from '../../../actions/toogleMenu.actions';

const MenuBtn = ({ toggleMenu }) => {

    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = (e) => {
        const menu = document.querySelector('.menu_btn');
        menu.classList.toggle('open');
        setOpenMenu(!openMenu)
        toggleMenu(!openMenu)
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

const mapDispatchToProps = dispatch => ({
    toggleMenu: (isOpen) => dispatch(toggleMenu(isOpen))
})

export default connect(null, mapDispatchToProps)(MenuBtn);
