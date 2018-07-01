import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/multipleresultspage.css';
import axios from 'axios';
import Data from '../../server/wizardDummyData';
import Search from "./searchbar";


class Searchresults extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     snackData: null
        // }
    }

    // make axios call to server 
    // we take that data and set in this.setState
    // be able to be able to access each object in the data array ( so each image/ name / description would be in an)
    // then we take thar in the render function 
  
   
    // componentDidMount() {
    //     debugger;
    //     console.log("This is the current directory", __dirname);
    //     getSnackData();
    // }

    // async getSnackData() {
    //     const snackData = await axios.get('/api/php/getSnackData.php').then(function(data) {
    //         console.log("Logging our data from potential wizard query", data);

    //     });

    //     this.setState({
    //         snackData: snackData
    //     });
    // }

    render(){
    console.log(Data); 
        // const { snackData } = this.state;

        const displayedSnack = Data.items.map(function(item, index) {
        // const displayedSnack = snackData.map(function(item, index) {

            return (
                <Link key={index} to ={{pathname: '/SingleResult', state: item}}>
                    <div className="multipleResultsItem">
                        <span>{item.name}</span>
                        <img className="multipleResultsImage" src={`${item.imgURL}`} />
                    </div>
                </Link>
            )
        });
    // const{ name}= this.state; 
        return (
            <div className="multipleResultsContainer">
                <div className="multipleResultsFilter">
                    <div type="button">Filters</div>
                </div>
                <Search/>
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
