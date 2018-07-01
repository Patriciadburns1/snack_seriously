import React, {Component} from 'react';
import '../assets/css/homepage.css';
import {Link} from 'react-router-dom';
import hero from '../assets/images/hero.png';
import data from '../../server/wizardDummyData.json';
import axios from 'axios'; 


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.Data=[]; 
        this.state = {
            userInput: ''
        };
        // this.base_url = '';
        this.ajaxCalltoServerUponUserInput=this.ajaxCalltoServerUponUserInput.bind(this); 

    }

    handleInputChange = (event) => {
        let value = event.target.value;
        // this.props.history.push('/search/' + value); 
        this.setState({
            userInput: value,
            autocompleteEntries: ''
        })   
    }

      componentDidUpdate(){
         console.log("input changed"); 
      }

      async ajaxCalltoServerUponUserInput(props){  
        const{params}= this.props.match.params; 
        // // this.props.history.push(`${this.props.match.params.term}/search/${searchIDs.join(',')}`)
        // this.props.history.push('/search/' + value); 
        const response =  await axios.get('http://danielpaschal.com/patricia.php', {params:{ term:{params}}}).then( function(){
                  console.log(response);
               })
          }



    render() {
        const {userInput} = this.state;
        const {searchTerm} = this.props.match.params.term || ''; 
        console.log("user input:", userInput);
        return(
            <div>
                <div className='heroImage'>
                    <img src={hero} width="200"/>
                </div>
                <div className="searchBar">
                    <input className="searchArea" value={searchTerm} placeholder="Search by brand or type of snack" onChange={this.handleInputChange.bind(this)}/>
                    <Link to='MultipleResults'><button onClick={this.ajaxCalltoServerUponUserInput} className="btnSearch">&#x1F50D;</button></Link>
                </div>
                <Link to='MultipleResults'><div className="btnStyle btnRandomSnack">Pick a Random Snack</div></Link>
            </div>
        )
    }
}

export default Homepage;