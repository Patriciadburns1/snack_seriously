import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/multipleresultspage.css';
import axios from 'axios';
import Search from "./searchbar";

class MultipleResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snackData: [],
            offset: 0
        }

        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.handleItemClicked = this.handleItemClicked.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
        this.getSnackData();
    };



    async getSnackData() {
        let URL = 'http://api.snackseriously.com/snackapi.php?action=';
        let term = this.props.match.params.term; // '' || name || undefined
        let querystring = null;
        let offset= this.state.offset; 
        console.log("term is equal", term);
        if (!term) {
            querystring = "getrandom";
        } else {
            querystring = `getname&search=${term}&offset=${offset}`;
        }
        URL += querystring;


        try {
            const snackData = await axios.get(URL);
            this.setState({
                snackData: [...this.state.snackData, ...snackData.data.data],
                offset: offset+12
            });
        } catch (err) {
            console.log('Get Data Error:', err.message);
        }
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }



    handleOnScroll() {
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        let clientHeight = document.documentElement.clientHeight || window.innerHeight;
        let scrolledToBottom = (parseInt(scrollTop + clientHeight)) >= scrollHeight;
        if (scrolledToBottom) {
            this.getSnackData();
        }
    }


    render() {
        const { snackData } = this.state;
        const displayedSnack = snackData.map((item, product_id) => {
            return (
                <Link productid ={product_id} key={product_id} to={{ pathname: '/SingleResult', state: item }}>
                    <div onClick={this.handleItemClicked} className="multipleResultsItem">
                        <span>{item.name}</span>
                        <img className="multipleResultsImage" src={`${item.img_url}`} />
                    </div>
                </Link>
            )
        });
        const { name } = this.state;
        return (
            <div> 
                 <div>
                 <div className="searchBarComp">
                <input type="text"  placeholder="Search snacks"/>
               <div className="icon"> <i>&#x1F50D;</i> </div> 
                </div>
            </div>
            <div className="multipleResultsContainer">
                <div className="searchBarFilter">
                    <div className="multipleResultsFilter">
                    </div>
                </div>
                <div className="multipleResultsItemsContainer">
                    {displayedSnack}
                </div>
            </div>
            </div> 
        )
    }
}

export default MultipleResults;
