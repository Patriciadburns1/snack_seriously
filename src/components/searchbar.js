import React, { Component } from 'react'
import snackvending from '../assets/images/snackvending.png'

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
                <h3>Search by brand or type of snack<img src={snackvending}/></h3>

                <div className="searchBar">
                <input className="searchArea"
                    placeholder="Search for My Snacks..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>

                    <button className="button" onClick={this.handleInputChange}>Submit</button>

            </div>
            </div>
        )
    }
}

export default Search;