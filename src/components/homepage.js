import React, {Component} from 'react';
import '../assets/css/homepage.css';
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import debounce from 'lodash/debounce';
import '../assets/css/searchbar.css'; 
import Nav from './nav/nav';
import CategoryHome from './categoryhome';
import RandomSnack from './randomsnackselector';



class Homepage extends Component {
    constructor(props) {
        super(props); 

        const {term} = props.match.params;

        this.setTimer=null; 
        this.state = {
            userInput: term || ''
        };
        this.handleInputChange=this.handleInputChange.bind(this); 
        this.autocompleteFromUser=debounce(this.autocompleteFromUser, 1000).bind(this); 

    }


    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            userInput: value,

        })  
        this.props.history.push('/search/' + value);     
    }

    autocompleteFromUser(){
        const {userInput}=this.state;
        axios.get(`http://api.snackseriously.com/snackapi.php?action=getauto&search=${userInput}`).then(function(response){
            console.log("server response for autocomplete", response); 
        });
    }


    render() {
        const userInput= this.state.userInput;  
        const params = this.props.match.params.term || '';
        return(
            <div>
            <CategoryHome />
            <RandomSnack/>
            </div>
        )
    }
}

export default Homepage;