import React, {Component, Fragment} from 'react';
import '../../assets/css/filters.css';
import FilterIcons from './filters.json';

class Section extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        event.stopPropagation();
        const {visible} = this.state;
        this.setState({
            visible: !visible
        });
    }

    render() {
        const {visible} = this.state;
        const {allergens} = FilterIcons.filters;
        const allergensicons = allergens.map(function(allergenicons, index){
            return <img key={index} src={allergenicons} />
        });
        return (
            <Fragment>
                <div className={visible ? "filterMenu " : "filterMenu active"} onClick={this.toggleMenu}>{this.props.currentSection }</div>
                <div className={visible ? "filterPanel active" : "filterPanel"} onClick={this.toggleMenu}>
                    <p>Lorem ipsum...</p>
                    <div className="minus"></div>
                </div>
            </Fragment>
        )
    }
}

export default Section;
