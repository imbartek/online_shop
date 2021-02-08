import React from 'react';
import './Navigation.css';
import MenuBtn from '../../shared/buttons/MenuBtn';

const Navigation = () => {
    return (
        <div>
            <ul className="navigation">
                <li><MenuBtn/></li>
                <li>BEST ONLINE SHOP</li>
                <li>CART</li>
            </ul>
        </div>
    );
}

export default Navigation;
