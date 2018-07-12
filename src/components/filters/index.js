import React, {Component} from 'react';
// import Section from './section';
import '../../assets/css/filters.css';
import Allergens from './allergenssection';
import Categories from './categoriessection';
import Nutrients from './nutrientssection';
import { Link } from 'react-router-dom';

class Filters extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            userChoices: null
            
        }
    }

    render() {
       
        const userChoices = this.state;
        return (
            <div className="filtersContainer">
                <div className="filtersHeaderContainer">
                    <div>Cancel</div>
                    <div>Filters</div>
                    <Link to={`/MultipleResults/${userChoices}`}><div>Search</div></Link>
                </div>

                <div >
                    <Allergens userChoices={userChoices}/>
                    <Categories userChoices={userChoices}/>
                    <Nutrients userChoices={userChoices}/>
                </div>
            </div>
        )
    }
}

export default Filters;
