import React, { Component } from 'react';
import '../assets/css/homepage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import debounce from 'lodash/debounce';
import '../assets/css/searchbar.css';
import Nav from './nav/nav';
import CategoryHome from './categoryhome';
import RandomSnack from './randomsnackselector';
import { SearchDataContext } from './searchdata';



class Homepage extends Component {
    constructor(props) {
        super(props);

        const { term } = props.match.params;
        this.autocompleteFromUser = debounce(this.autocompleteFromUser, 1000).bind(this);

    }


    autocompleteFromUser() {
        const { userInput } = this.state;
        axios.get(`http://api.snackseriously.com/snackapi.php?action=getauto&search=${userInput}`).then(function (response) {
            console.log("server response for autocomplete", response);
        }); 
    }


    render() {
        return (
            
            <div>
                <CategoryHome />
                <RandomSnack />
            </div>
        )
    }
}

export default Homepage;