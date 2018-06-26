import React from 'react';
import '../assets/css/introsnackquiz.css';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="introSnackQuizContainer">
            <div className="introSnackQuizContainerTop">
                <h2 className="introSnackQuizHeader">Snack-It-Off Tips</h2>
                <div className="introSnackQuizInstructions">
                    <div className="introSnackQuizStepOne">
                        <h3 className="introInstructionHeader">Select Ingredients To Avoid</h3>
                        <ul>
                            <li>allergies</li>
                            <li>yucky stuff</li>
                            <li>gross things</li>
                        </ul>
                    </div>
                    <div className="introSnackQuizStepTwo">
                        <h3 className="introInstructionHeader">Select A Snack Cateogry</h3>
                        <ul>
                            <li>popcorn</li>
                            <li>jerky</li>
                            <li>chips</li>
                        </ul>
                    </div>
                    <div className="introSnackQuizStepThree">
                        <h3 className="introInstructionHeader">Choose Your Snack</h3>
                        <ul>
                            <li>Select your favorite</li>
                        </ul>
                    </div>
                    <div className='footerButtons'>
                        <Link to='/'><div type='button' className='btnStyle btnNormal'>&#8592; Back</div></Link>
                        <Link to="/AllergenPage"><div type='button' className='btnStyle btnNormal'>Next &#8594;</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}