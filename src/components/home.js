import React from 'react';
import '../assets/css/home.css';
import hero from '../assets/images/hero.jpg';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div>
            <div className='heroImage'>
                <img src={hero} height="300"/>
            </div>
            <div className="btnHomeContainer">
                <div type='button' className='btnStyle' id='btnHomepage'><a href="#">Snack Finder Quiz</a></div>
                <div type='button' className='btnStyle' id='btnHomepage'> <Link to='/SavorySweet'> Snack Blind Pick </Link> </div>
                <div type='button' className='btnStyle' id='btnHomepage'> <Link to="/Search">  Snack Search </Link> </div>
            </div>
        </div>
    )
}