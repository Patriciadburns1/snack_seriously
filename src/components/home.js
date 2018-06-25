import React from 'react';
import '../assets/css/home.css';
import hero from '../assets/images/hero.jpg';

export default () => {
    return(
        <div>
            <div className='heroImage'>
                <img src={hero} height="300"/>
            </div>
            <div class="btnHomeContainer">
                <div type='button' className='btnStyle' id='btnHomepage'><a href="#">Snack Finder Quiz</a></div>
                <div type='button' className='btnStyle' id='btnHomepage'>Snack Blind Pick</div>
                <div type='button' className='btnStyle' id='btnHomepage'>Snack Search</div>
            </div>
        </div>
    )
}