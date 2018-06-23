import React from 'react';
import '../assets/css/stylesheet.css';
import '../assets/css/nav.css';
import hamburger from '../assets/images/hamburger.png';

export default () => {
    return (
        <div className="navBar">
            <div className='hamburgerMenu'>
                <img src={hamburger}/>
            </div>
            <div className="logo">
                Logo
            </div>
        </div>
    )
}