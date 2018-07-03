import React, {Component} from 'react';
import Section from './section';
import '../../assets/css/filters.css';
import FilterIcons from './filters.json';

class Filters extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            // visible: false
            filters: ['Allergens', 'Categories', 'Nutrients'],
            // filterData: null
        }
    }

    render() {
        const { filters } = this.state;
        // console.log(FilterIcons);
        const sections = filters.map(function(section, index) {
            return <Section key={index} currentSection={section} />
        });

        return (
            <div className="filtersContainer">
                <div className="filtersHeaderContainer">
                    <div>Cancel</div>
                    <div>Filters</div>
                    <div>Search</div>
                </div>

                <div className="filterPanelContainer">
                    {sections}
                </div>
            </div>
        )
    }
}

export default Filters;
