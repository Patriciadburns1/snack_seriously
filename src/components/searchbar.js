import React, { Component, Fragment } from 'react'
import '../assets/css/searchbar.css';
import snackvending from '../assets/images/snackvending.png';
import { Link } from 'react-router-dom';
import { SearchDataContext } from './searchdata';
import Icon from '../assets/images/searchicon.png'


class SearchBar extends Component {
    handleInputChange(event, context) {
        const value = event.target.value;
        context.updateTermValue(value);
        console.log("value". value); 
        // this.props.history.push(`/search/${value}`);
    }
    render() {
        return <SearchDataContext.Consumer>{(context) => (
        
            <div className="searchBarComp">
                <input type="text" placeholder="Search snacks" onChange={(event)=>this.handleInputChange(event, context)} />
                <button type="submit" className="icon">
                    <Link to={`/MultipleResults/${context.userInput}`}> <img className='searchIcon' src={Icon}/> </Link> 
                </button>
            </div>
        )
        }</SearchDataContext.Consumer>
    }
}

export default SearchBar;