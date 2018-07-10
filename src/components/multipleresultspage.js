import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/multipleresultspage.css';
import axios from 'axios';
import Search from "./searchbar";

class MultipleResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snackData: null
        }

        this.handleOnScroll = this.handleOnScroll.bind(this);
    }

    componentDidMount() {
        // debugger;
        let term = this.props.match.params.term;
        console.log("term is equal", term);
        if (!term) {
                axios.get('http://api.snackseriously.com/snackapi.php?action=getrandom').then((response) => {
                // console.log(response);
                const snackData = response.data;

                this.setState({
                    snackData: snackData
                })
                    console.log('This is from axios:', snackData);

            })
        }
        else {
        axios.get(`http://api.snackseriously.com/snackapi.php?action=getname&search=${term}`).then(function(response){

            console.log(response); 
            const snackData = response.data;
            this.setState({
                snackData: snackData
            })
        })
     
        }
        // this.getSnackData(URL);
        window.addEventListener('scroll', this.handleOnScroll);
    };



    async getSnackData() {
        let term = this.props.match.params.term;
        console.log("term is equal", term);

        let URL = `http://api.snackseriously.com/snackapi.php?action=getname&search=${term}`;
        try {
            const snackData = await axios.get(URL);
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
        // if (scrolledToBottom) {
        //     // this.getSnackData();
        // }
    
    }

    render() {
        const { snackData } = this.state;
        console.log('The state:', snackData);


        // const displayedSnack = Data.items.map(function(item, index) {
        if (snackData) {
            var displayedSnack = snackData.data.map((item, index) => {
                return (
                    <Link key={index} to={`/singleresult/${item.product_id}`}>
                        <div className="multipleResultsItem">
                            <span>{item.name}</span>
                            <img className="multipleResultsImage" src={`${item.img_url}`} />
                        </div>
                    </Link>
                )


            });
        }

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
                        {/* <div type="button">Filters</div> */}
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
