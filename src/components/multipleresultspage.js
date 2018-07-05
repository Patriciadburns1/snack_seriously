import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/multipleresultspage.css';
import axios from 'axios';
// import Data from '../../server/wizardDummyData';
import Search from "./searchbar";

class MultipleResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snackData: []
        }

        this.handleOnScroll = this.handleOnScroll.bind(this);
    }

    componentDidMount() {
        let term = this.props.match.params.term;
        console.log("term is equal", term);
        let URL = 'http://danielpaschal.com/patricia.php?term=';
        if (!term) {
            //make axios call and display random 
            URL += "random";
        }
        else {
            //display data from homepage with passed params 
            URL += term;
        }
        // axios.get(URL);
        this.getSnackData(URL);
        window.addEventListener('scroll', this.handleOnScroll);
    };

    async getSnackData() {
        try {
            const snackData = await axios.get('http://danielpaschal.com/patricia.php');
            this.setState({
                snackData: [...this.state.snackData, ...snackData.data.items, ...snackData.data.items]
            });
        } catch (err) {
            console.log('Get Data Error:', err.message);
        }
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }


    handleOnScroll() {
                        /// this is returns the root element between html tags                     // this returns a number 0 
                       // Get the number of pixels the content of a <div> element is scrolled horizontally and vertically:
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        // scroll height is equal to how tall your browser window is 
        let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        let clientHeight = document.documentElement.clientHeight || window.innerHeight;
        let scrolledToBottom = (parseInt(scrollTop + clientHeight)) >= scrollHeight;
        if (scrolledToBottom) {
            this.getSnackData();
        }
    
    }



    render() {
        const { snackData } = this.state;
        // console.log(snackData); 

        // const displayedSnack = Data.items.map(function(item, index) {
        const displayedSnack = snackData && snackData.map(function (item, index) {
            return (
                <Link key={index} to={{ pathname: '/SingleResult', state: item }}>
                    <div className="multipleResultsItem">
                        <span>{item.name}</span>
                        <img className="multipleResultsImage" src={`${item.imgURL}`} />
                    </div>
                </Link>
            )

        });
        const { name } = this.state;
        return (
            <div className="multipleResultsContainer">
                <div className="searchBarFilter">
                    <div className="multipleResultsFilter">
                        <div type="button">Filters</div>
                    </div>
                    <Search />
                </div>
                <div className="multipleResultsItemsContainer">
                    {displayedSnack}
                </div>
            </div>
        )
    }
}

export default MultipleResults;
