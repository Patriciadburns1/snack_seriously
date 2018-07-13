import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/about.css';


export default () =>{
    return(
        <div>
            <Link to="/About">
                <div className="about">
                    We are SNACKING SERIOUSLY!
                </div>
            </Link>
            <h1 className="snacktitle">Snackers</h1>

            <div className="grid-container">
                <div className="item1">Vikki Okamura</div>
                <div className="item2">Patricia Burns</div>
                <div className="item3">Peter Nguyen</div>
                <div className="item4">James Wang</div>
                <div className="item5">Jeff Lieu</div>
                <div className="item6">Lou Pruitt</div>
            </div>

        </div>

    )
}
