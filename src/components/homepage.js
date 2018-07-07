import React, {Component} from 'react';
import '../assets/css/homepage.css';
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import debounce from 'lodash/debounce';
import '../assets/css/searchbar.css'; 
import Nav from './nav/nav';


class Homepage extends Component {
    constructor(props) {
        super(props); 
        this.setTimer=null; 
        this.state = {
            userInput: ''
        };
        this.handleInputChange=this.handleInputChange.bind(this); 
        // this.ajaxCalltoServerUponUserInput=this.ajaxCalltoServerUponUserInput.bind(this); 
        this.autocompleteFromUser=this.autocompleteFromUser.bind(this); 
    }


    handleInputChange = (event) => {
        let value = event.target.value;
        this.props.history.push( '/search/'+ value );
       
        this.setState({
            userInput: value,

        })   
    }

    //   async ajaxCalltoServerUponUserInput(props){
    //     const params = this.props.match.params.term; 
    //     const response = await axios.get(`http://52.8.24.199/snackapi.php?action=getname&search=${params}`); 
    //     console.log(response); 
    // }

    autocompleteFromUser = debounce( ()=>{
        //   const params = this.props.match.params.term; 
          const {userInput}=this.state; 
          axios.get(`http://52.8.24.199/snackapi.php?action=getauto&search=${userInput}`).then(function(response){
                console.log("server response for autocomplete", response); 
            });
        },500);


    render() {
        const userInput= this.state.userInput;  
        // const searchTerm = this.props.match.params.term || ''; 
        const params = this.props.match.params.term;
        return(
            <div>
                 <div className="searchBarComp">
                <input type="text" value={userInput} onKeyUp={this.autocompleteFromUser}  onChange={this.handleInputChange} placeholder="Search snacks"/>
               <Link to = {`/MultipleResults/${params}`}> <div className="icon"> <i>&#x1F50D;</i> </div> </Link>    
                </div>
            </div>
        )
    }
}

export default Homepage;