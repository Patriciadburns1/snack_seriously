import React, { Component } from 'react';
import '../assets/css/homepage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import debounce from 'lodash/debounce';
import '../assets/css/searchbar.css';
import Nav from './nav/nav';
import CategoryHome from './categoryhome';
import RandomSnack from './randomsnackselector';
import { SearchDataContext } from './searchdata';



class Homepage extends Component {
    constructor(props) {
        super(props);
        const { term } = props.match.params;
    }

   
    getUserInformation(context){
        context.getUserLogIn(); 
    }
    

    render() {
        return  (
            <SearchDataContext.Consumer>{(context) => (
                <div>
                    <CategoryHome />
                    <RandomSnack />
                    {this.getUserInformation(context)}
                </div>
            )}
            </SearchDataContext.Consumer>
        );
    }
}

export default Homepage;