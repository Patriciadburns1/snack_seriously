import React, {Component} from 'react';
import '../assets/css/homepage.css';
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import debounce from 'lodash/debounce'; 


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
        // const params = this.props.match.params.term;
        return(
            <div>
                <div className="searchBar">
                    <input className="searchArea" value={userInput} placeholder="Search by brand or type of snack" onKeyUp={this.autocompleteFromUser} onChange={this.handleInputChange}/>
                    <Link to = {`/MultipleResults/${userInput}`} ><button onClick={this.ajaxCalltoServerUponUserInput} className="btnSearch">&#x1F50D;</button></Link>
                </div>
            </div>
        )
    }
}

export default Homepage;