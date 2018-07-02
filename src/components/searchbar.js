import React, { Component } from 'react'
import '../assets/css/searchbar.css';
import snackvending from '../assets/images/snackvending.png'; 
import { Link } from 'react-router-dom';


class Search extends Component {
    render(){
        return (
            <div className="searchBarComp">
                <input type="text" placeholder="Search snacks"/>
                <button type="submit">
                    <i>&#x1F50D;</i>
                </button>
            </div>
        )
    }
}

export default Search;