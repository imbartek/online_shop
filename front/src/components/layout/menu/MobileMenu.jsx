import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from 'react-redux';
import './Mobile_menu.css';
import styled from 'styled-components';

const Menu = styled.div`
    height: 90vh;
    width: 100%;
    position: absolute;
    top: 10vh;
    left: -100vw;
    display: flex;
    flex-flow: column;
    transition: 1s ease-in-out;

    .mobile_menu--top{
        display: flex;
        justify-content: space-evenly;
        height: 7.5vh;
        align-items: center;
        border-bottom: 1px solid #000;
    }
    .mobile_menu--middle{
        display: flex;
        justify-content: space-evenly;
        flex-flow: column;
        height: 75vh;
        padding-left: 10vw;
    }
    .mobile_menu--middle li{
        font-size: 2.5rem;
    }
    .mobile_menu--bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7.5vh;
        padding: 0 5vw;
    }
    & li{
        list-style: none;
    }
    .sale{
        color: #f53993;
    }
`

const MainList = styled.li`
    width: 15%;

    & a:hover{
        background-color: #f53993;
        color: #fff;
    }

    & a{
        display: block;
        height: 100%;
        text-align: center;
        line-height: 7vh;
    }
`

const MobileMenu = ({ toggleMenu }) => {
    useEffect(()=>{
        const container = document.getElementById('open');
        toggleMenu.isOpen ? container.style.left = '0' : container.style.left = '-100vw'
    })
    return (
        <Router>
            <Menu id="open">
                <ul className="mobile_menu--top">
                    <MainList><Link to="/#">Woman</Link></MainList>
                    <MainList><Link to="#">Man</Link></MainList>
                    <MainList><Link to="#">Kids</Link></MainList>
                </ul>
                <ul className="mobile_menu--middle">
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="#">Collection</Link></li>
                    <li><Link to="#" className="sale">Sale</Link></li>
                </ul>
                <div className="mobile_menu--bottom">
                    <Link to="/"><p>Home</p></Link>
                    <Link to="#"><p>My account</p></Link>
                </div>
            </Menu>
        </Router>
    );
}

const mapStateToProps = state => ({
    toggleMenu: state.toggleMenu
})

export default connect(mapStateToProps)(MobileMenu);
