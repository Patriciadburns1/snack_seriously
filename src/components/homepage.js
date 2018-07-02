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
        this.props.history.push('/search/' + value); 
        this.setState({
            userInput: value,
            autocompleteEntries: ''
        })   
    }

      componentDidUpdate(event){
         console.log("input changed"); 
      }

      async ajaxCalltoServerUponUserInput(props){  
        const params = this.props.match.params.term; 
        console.log(params); 
        console.log(this); 
        const response = await axios.get('http://danielpaschal.com/patricia.php', {params:{ term:{params}}}); 
        console.log(response);  
    }



    render() {
        const userInput= this.state.userInput;  
        const {searchTerm} = this.props.match.params.term || ''; 
        return(
            <div>
                <div className="heroImage">
                    <img src={hero} width="200"/>
                </div>
                <div className="searchBar">
                    <input className="searchArea" value={searchTerm} placeholder="Search by brand or type of snack" onChange={this.handleInputChange.bind(this)}/>
                    <Link to='MultipleResults'><button onClick={this.ajaxCalltoServerUponUserInput} className="btnSearch">&#x1F50D;</button></Link>
                    {/* <input className="searchArea" value={userInput} placeholder="Search by brand or type of snack" onChange={this.handleInputChange.bind(this)}/> */}
                    {/* <Link to="MultipleResults"><div className="btnSearch">&#x1F50D;</div></Link> */}
                </div>
                <Link to="/MultipleResults"><div className="btnStyle btnRandomSnack">Pick a Random Snack</div></Link>
            </div>
        )
    }
}

export default Homepage;