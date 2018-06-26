import React, { Component } from 'react'
import '../assets/css/searchbar.css';
import snackvending from '../assets/images/snackvending.png'; 
import { Link } from 'react-router-dom';


class Search extends Component {
    state = {
        query: '',
    }
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render() {
        return (
            <div>
                <h3>Search by brand or type of snack</h3>
                <div className="vendingMachineDiv"> <img src={snackvending}/> </div> 
                <div className="searchBar">
                <input className="searchArea"
                    placeholder="Search for My Snacks..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                    <button className="buttonSearch" onClick={this.handleInputChange}> <Link to="/"> Submit </Link> </button>
            </div>
            </div>
        )
    }
}

export default Search;