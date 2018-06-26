import React from 'react';
import '../assets/css/menu.css';

export default () => {
    return(
        <div className='menuContainer'>
            <a href="#"className="menuLinks">X</a>
            <div className='menuSpacing'>
                <a href="home_page.html" className='menuLinks'>Home</a>
            </div>
            <div className='menuSpacing'>
                <a href="snackquiz.html" className='menuLinks'>Snack Finder Quiz</a>
            </div>
            <div className='menuSpacing'>
                <a href="#" className='menuLinks'>Snack Blind Pick</a>
            </div>
            <div className='menuSpacing'>
                <a href="#" className='menuLinks'>Snack Search</a>
            </div>
        </div>
    )
}