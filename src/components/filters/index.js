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

    toggleFilters(event) {
        const visibleBoolean = event.target.attributes.name.nodeValue;
        const {allergenShow, categoryShow } = this.state;
        if (visibleBoolean === 'allergenShow') {
            this.setState({
                show:true,
                allergenShow:!allergenShow,
                categoryShow:false
            });
        } else {
            this.setState({
                show:true,
                allergenShow:false,
                categoryShow:!categoryShow
            });
        }
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
                    <div className={allergenShow ? 'filterTab show' : 'filterTab'} name='allergenShow' onClick={this.toggleFilters.bind(this)}>Allergens</div>
                    <div className={categoryShow ? 'filterTab show' : 'filterTab'} name='categoryShow' onClick={this.toggleFilters.bind(this)}>Category</div>
                    <Allergens visible={allergenShow} />
                    <Categories visible={categoryShow} />
                    {/* <Nutrients /> */}
                </div>
            </div>
        )
    }
}

export default Filters;
