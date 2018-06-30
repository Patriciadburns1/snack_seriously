import React, {Component} from 'react';
import '../assets/css/singleresult.css'
import picture from '../assets/images/dummypics/boxglutenfree.png';
import {Link} from 'react-router-dom';
import Nutritionalfacts from './nutritionalfacts';
import Ingredient from './ingredient'; 

class SingleResult extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("This is when our component first hits the page", this.props.location.state);
    }

    render() {
        const { nutrition, ingredients, imgURL } = this.props.location.state;
        console.log("these are our things", nutrition, ingredients, imgURL);
        return(
            <div className="singleResultContainer">
                    <img src={imgURL} className="singleResultImage"/>
                <Nutritionalfacts nutrition={nutrition} />
                <Ingredient ingredients={ingredients} /> 
                <div className='footerButtons'>
                    <Link to='/MultipleResult'><div type='button' className='btnStyle btnNormal'>&#8592; Back</div></Link>
                    <Link to='/'><div type='button' className='btnStyle btnNormal'>Home &#8962;</div></Link>
                </div>
            </div>
            )
    }
}

export default SingleResult;