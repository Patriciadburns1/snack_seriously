import React from 'react';
import '../assets/css/intro_snack_quiz.css';

export default (props) => {
    return (
        <div className="introSnackQuizContainer">
            <div className="introSnackQuizContainerTop">
                <h2 className="introSnackQuizHeader">Snack-It-Off Tips</h2>
                <div className="introSnackQuizInstructions">

                    <div className="introSnackQuizStepOne">
                        <h3>Select Ingredients To Avoid</h3>
                        <ul>
                            <li>allergies</li>
                            <li>yucky stuff</li>
                            <li>gross things</li>
                        </ul>
                    </div>
                    <div className="introSnackQuizStepTwo">
                        <h3>Select Snack Type</h3>
                        <ul>
                            <li>popcorn</li>
                            <li>jerky</li>
                            <li>chips</li>
                        </ul>
                    </div>
                    <div className="introSnackQuizStepThree">
                        <h3>Choose Your Snack</h3>
                        <ul>
                            <li>Select your favorite</li>
                        </ul>
                    </div>
                    <div className='introSnackQuizBtnContainer'>
                        <a href='#'><div type='button' className='btnStyle btnNormal '>Back</div></a>
                        <a href="#"><div type='button' className='btnStyle btnNormal'>Next</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}