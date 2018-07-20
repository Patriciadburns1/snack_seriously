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
                <Link to='/MultipleResult'>
                    <div className='pickChoices'>
                        <img src={sweet}/>
                    </div>
                </Link>
                <h1>OR</h1>
                <Link to='/MultipleResult'>
                    <div className='pickChoices'>
                        <img src={savory}/>
                    </div>
                </Link>
        </div>
        <div className='footerButtons'>
            <div type='button' className='btnStyle btnNormal'> <Link to='/'> &#8592; Back </Link> </div>
            <div type='button' className='btnStyle btnNormal'>Next &#8594;</div>
        </div> 
    </div>
  )
}