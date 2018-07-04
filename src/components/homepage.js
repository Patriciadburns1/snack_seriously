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

    async componentDidMount(){
        const resp = await axios.get('/api/test.php');

        console.log('Test Response:', resp);
    }

    handleInputChange = (event) => {
        let value = event.target.value;
        // this.props.history.push('/search/' + value); 
        this.setState({
            userInput: value,
            // autocompleteEntries: ''
        })   

        //this.autocompleteFromUser();

    }
    
    //   componentDidUpdate(event){
    //      console.log("input changed"); 
    //   }

      async ajaxCalltoServerUponUserInput(props){
        try{
        const params = this.props.match.params.term; 
        const response = await axios.get('http://danielpaschal.com/patricia.php', {params:{ term:{params}}});
        } catch (err){
            console.log(response);
        }
    }




    autocompleteFromUser = debounce( ()=>{
    //   const params = this.props.match.params.term; 
    //   console.log(params)
      const {userInput}=this.state; 
      //let autoResponse = () => { lodash.debounce(this.dummyMethod.bind(this), 1000)}; 
        console.log('hello?');
        const response = axios.get('http://danielpaschal.com/patricia.php', {params:{ term:{userInput}}}).then(function(){
            console.log("server response", response); 
        });

    //     if (this.setTimer ===null){
    //         setTimeout(this.ajaxCalltoServerUponUserInput, 3000, params) 
    //     }
    //    clearTimeout(this.) 
    },500);
    

    render() {
        const userInput= this.state.userInput;  
        // const {searchTerm} = this.props.match.params.term || ''; 
        // const params = this.props.match.params.term;
        return(
            <div>
                <div className="heroImage">
                    <img src={hero} width="200"/>
                </div>
                <div className="searchBar">
                    <input className="searchArea" value={userInput} placeholder="Search by brand or type of snack" onKeyUp={this.autocompleteFromUser} onChange={this.handleInputChange}/>
                    <Link to = {`/MultipleResults/${userInput}`} ><button onClick={this.ajaxCalltoServerUponUserInput} className="btnSearch">&#x1F50D;</button></Link>
                </div>
                <Link to="/MultipleResults"><div className="btnStyle btnRandomSnack">Pick a Random Snack</div></Link>
            </div>
        )
    }
}

export default Homepage;