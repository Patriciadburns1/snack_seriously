import React from 'react';
import '../assets/css/menu.css';
import line from '../assets/images/menuline.png';

export default () => {
    return(
        <div class='menuContainer'>
            <a href="#"class="menuLinks">X</a>
            <div class='menuSpacing'>
                <a href="home_page.html" class='menuLinks'>Home</a>
            </div>
            <div class='menuSpacing'>
                <a href="snackquiz.html" class='menuLinks'>Snack Finder Quiz</a>
            </div>
            <div class='menuSpacing'>
                <a href="#" class='menuLinks'>Snack Blind Pick</a>
            </div>
            <div class='menuSpacing'>
                <a href="#" class='menuLinks'>Snack Search</a>
            </div>
        </div>
    )
}