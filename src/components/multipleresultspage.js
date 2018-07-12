import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/multipleresultspage.css';
import axios from 'axios';
import Search from "./searchbar";
import noImage from '../assets/images/imagenotfound.jpeg';

class MultipleResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snackData: [],
            offset: 0
        }

        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this); 
        this.getSnackData=this.getSnackData.bind(this); 
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
        this.getSnackData();
    };
    

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            userInput: value,

        })  
        this.props.history.push('/search/' + value);      
     }


    async getSnackData() {
        let URL = 'http://api.snackseriously.com/snackapi.php?action=';
        let term = this.props.match.params.term; // '' || name || undefined
        console.log(this.props);
        let querystring = null;
        let offset= this.state.offset; 
        const regex= /^[1-6]+$/;
        console.log("term is equal", term);
        if (!term) {
            querystring = "getrandom";
        } else if (regex.test(term)) {
            querystring = `getcategory&categoryid=${term}&limit=12&offset=${offset}`;
            // console.log(querystring);
        }
        else {
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
        const snackData = this.state.snackData;
        console.log(snackData); 
        if (snackData) {
            var displayedSnack = snackData.map((item, index) => {
                return (
                    <Link key={index} to={`/singleresult/${item.ID}`}>
                        <div className="multipleResultsItem">
                            <span>{item.name}</span>
                            <img className="multipleResultsImage"  src={!item.img_url ? noImage : item.img_url} />
                        </div>
                    </Link>
                )


            });
        }
        const { name } = this.state;
        const userInput= this.state.userInput;  
        const params = this.props.match.params.term || '';

        return (
            <div> 
                 <div>
                 <div className="searchBarComp">
                <input autoFocus type="text" value={userInput}  onChange={this.handleInputChange} placeholder="Search snacks"/>
              <Link to= {`/MultipleResults/${params}`} > <span className="icon" onClick={this.getSnackData}> <i>&#x1F50D;</i> </span> </Link>
                </div>
            </div>
            <div className="multipleResultsContainer">
                <div className="searchBarFilter">
                    <div className="multipleResultsFilter">
                    </div>
                </div>
                <div className="multipleResultsItemsContainer">
                    { displayedSnack }
                </div>
            </div>
            </div> 
        )
    }
}

export default MultipleResults;
