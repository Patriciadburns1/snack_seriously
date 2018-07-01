import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/home.css';
import '../assets/css/about.css';


export default () =>{
    return(
        <div>
            <Link to="/About"><div className="about"></div></Link>
            <h1>About us...Coming Soon</h1>
        </div>

    )
}
