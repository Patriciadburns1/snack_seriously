import React, {Component} from 'react';
import '../assets/css/homepage.css';
import {Link} from 'react-router-dom';
import hero from '../assets/images/hero.png';
import data from '../../server/wizardDummyData.json';
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
        this.ajaxCalltoServerUponUserInput=this.ajaxCalltoServerUponUserInput.bind(this); 
        this.autocompleteFromUser=this.autocompleteFromUser.bind(this); 
    }

    handleInputChange = (event) => {
        let value = event.target.value;
        this.props.history.push('/search/' + value); 
        this.setState({
            userInput: value,
            autocompleteEntries: ''
        })   

        //this.autocompleteFromUser();

    }
    
      componentDidUpdate(event){
         console.log("input changed"); 
      }

      async ajaxCalltoServerUponUserInput(props){  
        const params = this.props.match.params.term; 
        const response = await axios.get('http://danielpaschal.com/patricia.php', {params:{ term:{params}}}); 
        console.log(response);  
    }

    dummyMethod(){
        console.log("this is working"); 
    }


    autocompleteFromUser = debounce( ()=>{
      const params = this.props.match.params.term; 
      //let autoResponse = () => { lodash.debounce(this.dummyMethod.bind(this), 1000)}; 
        console.log('hello?');
    //     if (this.setTimer ===null){
    //         setTimeout(this.ajaxCalltoServerUponUserInput, 3000, params) 
    //     }
    //    clearTimeout(this.) 
    },1000);
    

    render() {
        const userInput= this.state.userInput;  
        const {searchTerm} = this.props.match.params.term || ''; 
        return(
            <div>
                <div className="heroImage">
                    <img src={hero} width="200"/>
                </div>
                <div className="searchBar">
                    <input className="searchArea" value={searchTerm} placeholder="Search by brand or type of snack" onKeyUp={this.autocompleteFromUser} onChange={this.handleInputChange}/>
                    <Link to='MultipleResults'><button onClick={this.ajaxCalltoServerUponUserInput} className="btnSearch">&#x1F50D;</button></Link>
                </div>
                <Link to="/MultipleResults"><div className="btnStyle btnRandomSnack">Pick a Random Snack</div></Link>
            </div>
        )
    }
}

export default Homepage;