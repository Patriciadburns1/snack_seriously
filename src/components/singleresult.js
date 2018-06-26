import React, {Component} from 'react';
import '../assets/css/singleresult.css'
import picture from '../assets/images/dummypics/boxglutenfree.png';

class SingleResult extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="singleResultContainer">
                    <img src={picture} className="singleResultImage"/>
                <div className="footerButtons resultButtons">
                    <div type='button' className='btnStyle btnNormal'>Nutrition Facts</div>
                    <div type='button' className='btnStyle btnNormal'>Ingredients</div>
                </div>
                <div className='footerButtons'>
                    <div type='button' className='btnStyle btnNormal'>Back</div>
                    <div type='button' className='btnStyle btnNormal'>Home</div>
                </div>
            </div>
            )
    }
}

export default SingleResult;