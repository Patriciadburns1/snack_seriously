import React from 'react';
import '../assets/css/savorysweet.css';
import sweet from '../assets/images/sweet.png';
import savory from '../assets/images/savory.png';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <div>
        <h1 className='savorySweetTitle'>Pick One</h1>
        <div className='pickChoicesContainer'>
            <div className='pickChoices'>
                <img src={sweet}/>
            </div>
            <h1>OR</h1>
            <div className='pickChoices'>
                <img src={savory}/>
            </div>
        </div>
        <div className='footerButtons'>
            <div type='button' className='btnStyle btnNormal'> <Link to='/'> Back </Link> </div>
            <div type='button' className='btnStyle btnNormal'>Next</div>
        </div> 
    </div>
  )
}