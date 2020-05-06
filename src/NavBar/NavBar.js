import React from 'react';
const NavBar = () => {
    const badge = require('./badge.png');
    const logo = require('../logo.png');
    return <div className = "nav" id="naver">
        <img className="badge" src={badge}></img>
        <img className="logo-badge" src={logo}></img>
        <span style={{marginTop : 3}} >GADGET SQUARE</span> </div>;
};

export default NavBar;