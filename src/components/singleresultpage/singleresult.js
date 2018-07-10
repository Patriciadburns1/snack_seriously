import React, { Component } from 'react';
import '../../assets/css/singleresult.css'
import { Link } from 'react-router-dom';
import Nutritionalfacts from './nutritionalfacts';
import Ingredient from './ingredient';
import SingleItem from './singleitem'
import Search from '../searchbar';
import axios from 'axios';

class SingleResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            singleItem: null
        }
    }

    componentDidMount() {
        this.getSingleResult();
    }

    async getSingleResult() {
        const { product_id } = this.props.match.params;
        console.log(product_id);
        const response = await axios.get(`http://api.snackseriously.com/snackapi.php?action=getproduct&product_id=${product_id}`);
        // console.log(this.props);

        this.setState({
            singleItem: response.data
        });
    }

    render() {
        const {singleItem} = this.state;
        if(!singleItem){
            return <h1>Loading...</h1>;
        }
        console.log(this.state);
        console.log('this is single item:', this.state.singleItem);
        //this.state.singleItem.data.ingredients
        const {nutrients, ingredients, img_url, name, manu, per_container, size, unit, weight}=this.state.singleItem.data;
        console.log(ingredients);
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
                         <Search/>
                <SingleItem name={name} manu={manu} img={img_url} per_container={per_container} size={size} unit={unit} weight={weight}/>
                <Nutritionalfacts nutrition={nutrients} />
                <Ingredient ingredients={ingredients} />
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