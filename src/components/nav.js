import React from 'react';
import '../assets/css/stylesheet.css';
import '../assets/css/nav.css';
import '../assets/css/buttons.css'
import hamburger from '../assets/images/hamburger.png';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div className="navBar">
            {/* <Link to='/Menu'> */}
                <div className='hamburgerMenu'>
                    <img src={hamburger}/>
                </div>
            {/* </Link> */}
            <div className="logo">
                Logo
            </div>
        </div>
    )
}