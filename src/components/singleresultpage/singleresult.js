import React, { Component } from 'react';
import '../../assets/css/singleresult.css'
import { Link } from 'react-router-dom';
import Nutritionalfacts from './nutritionalfacts';
import Ingredient from './ingredient';
import SingleItem from './singleitem'
import Search from '../searchbar';

class SingleResult extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("This is when our component first hits the page", this.props.location.state);
    }

    render() {
        // const { nutrition, ingredients, imgURL, name, manu } = this.props.location.state;
        // console.log("these are our things", nutrition, ingredients, imgURL);
        return (
                <div>
                    <div>
                        <div className="searchBarComp">
                            <input type="text" placeholder="Search snacks"/>
                            <div className="icon"> <i>&#x1F50D;</i> </div>
                        </div>
                    </div>

                    <div className="singleResultContainer">
                        {/* <Search/>
                <SingleItem name={name} manu={manu} img={imgURL}/>
                <Nutritionalfacts nutrition={nutrition} />
                <Ingredient ingredients={ingredients} />  */}
                        {/*<div className="footerButtons">*/}
                        {/*<Link to="/MultipleResults"><div type="button" className="btnStyle btnNormal">&#8592; Back</div></Link>*/}
                        <Link to="/"><div type="button" className="btnStyle btnNormal">Home &#8962;</div></Link>
                        {/*</div>*/}
                    </div>
                </div>
                )
        }
    }
    
export default SingleResult;