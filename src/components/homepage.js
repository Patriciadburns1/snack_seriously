import React, {Component} from 'react';
import '../assets/css/homepage.css';
import {Link} from 'react-router-dom';
import hero from '../assets/images/hero.png';
import data from '../../server/wizardDummyData.json';


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        };
        this.base_url = '';
    }

    handleInputChange = (event) => {
        let value = event.target.value;
        this.setState({
            userInput: value
        })
        
    }


    render() {
        const {userInput} = this.state;
        console.log(this.state);
        return(
            <div>
                <div className='heroImage'>
                    <img src={hero} width="200"/>
                </div>
                <div className="searchBar">
                    <input className="searchArea" value={userInput} placeholder="Search by brand or type of snack" onChange={this.handleInputChange.bind(this)}/>
                    <Link to='MultipleResults'><div className="btnSearch">&#x1F50D;</div></Link>
                </div>
                <Link to='MultipleResults'><div className="btnStyle btnRandomSnack">Pick a Random Snack</div></Link>
            </div>
        )
    }
}

export default Homepage;