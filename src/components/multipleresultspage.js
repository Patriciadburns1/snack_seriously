import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/multipleresultspage.css';
import axios from 'axios';
// import Data from '../../server/wizardDummyData';
import Search from "./searchbar";

class Searchresults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snackData: null
        }
    }

    componentDidMount() {
        // console.log("This is the current directory", __dirname);
        this.getSnackData();
    };

    async getSnackData() {
        try {
        const snackData = await axios.get('http://danielpaschal.com/patricia.php');
        this.setState({
            snackData: snackData.data.items
        }); 
    } catch (err) {
        console.log('Get Data Error:', err.message);
        }   
    };


    render(){
        const { snackData } = this.state;
        console.log(snackData); 

        // const displayedSnack = Data.items.map(function(item, index) {
        const displayedSnack = snackData && snackData.map(function(item, index) {
            return (
                <Link key={index} to ={{pathname: '/SingleResult', state: item}}>
                    <div className="multipleResultsItem">
                        <span>{item.name}</span>
                        <img className="multipleResultsImage" src={`${item.imgURL}`} />
                    </div>
                </Link>
            )
        
        });
    const{ name}= this.state; 
        return (
            <div className="multipleResultsContainer">
                <div className="searchBarFilter">
                    <div className="multipleResultsFilter">
                        <div type="button">Filters</div>
                    </div>
                    <Search/>
                </div>
                <div className="multipleResultsItemsContainer">
                    { displayedSnack }
                </div>
                <div className="footerButtons">
                    <Link to="/"><div type="button" className="btnStyle btnNormal">&#8592; Back</div></Link>
                    <Link to="/"><div type="button" className="btnStyle btnNormal">Home &#8594;</div></Link>
                </div>
            </div>
        )
    }
}

export default Searchresults;
