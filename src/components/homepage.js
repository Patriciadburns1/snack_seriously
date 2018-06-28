import React, {Component} from 'react';
import '../assets/css/homepage.css';
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

    async getSnackData () {
        this.setState({
            data: data
        })
        console.log("The data is: ", data);
    }

    // async getResultData() {
    //     try {
    //         const resp = await axios.get(`${this.base_url}/todos${this.api_key}`);
    //         this.setState({
    //             list: resp
    //         });
    //     } catch (err) {
    //         console.log('Get Data Error:', err.message);
    //     }
    // }
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
                    <div className="btnSearch" onClick={this.getSnackData.bind(this)}>&#x1F50D;</div>
                </div>
                <div className="btnStyle btnRandomSnack">
                    Pick a Random Snack!
                </div>
            </div>
        )
    }
}

export default Homepage;