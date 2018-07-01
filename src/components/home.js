import React from 'react';
import '../assets/css/home.css';
import hero from '../assets/images/hero.jpg';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div>
            <div className="heroImage">
                <img src={hero} height="100"/>
            </div>
            <div className="btnHomeContainer">
                <Link to="/IntroSnackQuiz"><div type="button" className="btnStyle" id="btnHomepage">Snack Finder Quiz</div></Link>
                <Link to="/SavorySweet"><div type="button" className="btnStyle" id="btnHomepage">Snack Blind Pick</div></Link>
                <Link to="/Search"><div type="button" className="btnStyle"  id="btnHomepage">Snack Search</div></Link>
            </div>
        </div>
    )
}