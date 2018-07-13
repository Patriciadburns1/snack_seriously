import React, {Component} from 'react';
import '../../assets/css/filters.css';
import Allergens from './allergenssection';
import Categories from './categoriessection';
import Nutrients from './nutrientssection';
import { Link } from 'react-router-dom';

class Filters extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            show: false,
            allergenShow: false,
            categoryShow: false
        }
    }

    toggleAllFilter() {
        //const { show, allergenShow, categoryShow } = this.state;
        const{show} = this.state;
        this.setState({
            show:!show
        });
    }

    toggleFilters( clickTab, oppositeTab) {

        //clickTab is name of tab clicked
        //oppositeTab is thee other tab not in use
        const clickedTabBool = !this.state[clickTab];

        //set key and value 
        //[clickTab] is replaced with string of clickedTab and the value is opposite of original value
        //set [oppositeTab] to false since no longer in use. 
        this.setState({
            [clickTab]:clickedTabBool,
            [oppositeTab]:false
        });
    }

    render() {
        const {show, allergenShow, categoryShow} = this.state;
        return (
            <div className="filtersContainer">
                <div className="filtersHeaderContainer" name='show' onClick={this.toggleAllFilter.bind(this)} >
                    <div>Filters</div>
                    {/* <Link to={`/MultipleResults/${userChoices}`}><div>Search</div></Link> */}
                </div>
                
                <div className={show ? "filterPanelContainer active" : "filterPanelContainer"}>
                    <div className={allergenShow ? 'filterTab show' : 'filterTab'} onClick={()=>this.toggleFilters('allergenShow','categoryShow')}>Allergens</div>
                    <div className={categoryShow ? 'filterTab show' : 'filterTab'} onClick={()=>this.toggleFilters('categoryShow','allergenShow')}>Category</div>
                    <Allergens visible={allergenShow} />
                    <Categories visible={categoryShow} />
                    {/* <Nutrients /> */}
                </div>
            </div>
        )
    }
}

export default Filters;
