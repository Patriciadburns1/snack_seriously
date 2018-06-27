import React, {Component} from 'react';
import '../assets/css/homepage.css';
import hero from '../assets/images/hero.png';
import data from '../../server/wizardDummyData.json';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = ''
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    async getSnackData () {
        this.setState({
            data: data
        })
        console.log(data);
    }
    render() {
        return(
            <div>
                <div className='heroImage'>
                    <img src={hero} width="200"/>
                </div>
                <div className="searchBar">
                    <input className="searchArea" placeholder="Search by brand or type of snack" ref={input => this.search = input} onChange={this.handleInputChange}/>
                    <div className="btnSearch" onClick={this.getSnackData.bind(this)}>&#x1F50D;</div>
                </div>
                <div className="btnStyle btnRandomSnack">
                    Random Snack!
                </div>
            </div>
        )
    }
}

export default Homepage;