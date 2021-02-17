import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import MenuBtn from '../../shared/buttons/MenuBtn';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    border-bottom: 1px solid rgba(139, 139, 139, 0.521);

    & li{
        list-style: none;
    }
`

const Navigation = () => {
    return (
        <Router>
            <div>
                <List>
                    <li><MenuBtn /></li>
                    <li><Link to="/">BEST ONLINE SHOP</Link></li>
                    <li>CART</li>
                </List>
            </div>
        </Router>
    );
}

export default Navigation;
