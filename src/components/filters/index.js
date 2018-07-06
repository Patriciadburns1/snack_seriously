import React, {Component} from 'react';
// import Section from './section';
import '../../assets/css/filters.css';
import FilterIcons from './filters.json';
import Allergens from './allergenssection';
import Categories from './categoriessection';
import Nutrients from './nutrientssection';

class Filters extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            // visible: false
            // allergens: {
            //     name: 'Allergens',
            //     filterItems: ['cat', 'dog', 'mouse']
            // }
            // filterData: null
        }
    }

    render() {
        // const { filters } = this.state;
        // console.log(FilterIcons);
        // const sections = filters.map(function(section, index) {
        //     debugger;
        //     return <Section key={index} currentSection={{...section}} />
        // });

        return (
            <div className="filtersContainer">
                <div className="filtersHeaderContainer">
                    <div>Cancel</div>
                    <div>Filters</div>
                    <div>Search</div>
                </div>

                <div >
                    <Allergens />
                    <Categories />
                    <Nutrients />
                </div>
            </div>
        )
    }
}

export default Filters;
