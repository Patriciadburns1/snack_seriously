import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/multipleresultspage.css';
import axios from 'axios';
import noImage from '../assets/images/imagenotfound.jpeg';
import Filters from './filters';


class MultipleResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snackData: [],
            offset: 0
        }

        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.getSnackData=this.getSnackData.bind(this); 
        this.onRouteChange=this.onRouteChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
        this.getSnackData();   

    };
    
    async getSnackData() {
        let URL = '/api/snackapi.php?action=';
        let term = this.props.match.params.term; // '' || name || undefined
        let querystring = null;
        let filterID = this.props.match.params.filterID;
        let categoryID = this.props.match.params.categoryID;
        let offset= this.state.offset; 
        const regex= /^[1-6]+$/;
        if(!term && filterID && categoryID){
            querystring = `getfilter&filterid=${filterID}&categoryid=${categoryID}&limit=12&offset=${offset}`;
        } else if (!term) {
            querystring = "getrandom";
        } else if (regex.test(term)) {
            querystring = `getcategory&categoryid=${term}&limit=12&offset=${offset}`;
        } else  {
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

    onRouteChange(){
        this.setState({
            snackData:[],
            offset:0
        },
        ()=>{
            this.getSnackData(); 
        }
        )
    }

    componentDidUpdate(prevProps){ 
        if(this.props.location !== prevProps.location){

            this.onRouteChange(); 
        }
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
    
    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    render() {
        const snackData = this.state.snackData;
        if (snackData) {
            var displayedSnack = snackData.map((item, index) => {
                return (
                    <Link key={index} to={`/singleresult/${item.ID}`}>
                        <div className="multipleResultsItem">
                            <div>
                                <img className="multipleResultsImage"  src={!item.img_url ? noImage : item.img_url} />
                            </div>
                            <div>
                                <span className="multipleResultsDescription">{item.name}</span>
                            </div>
                        </div>
                    </Link>
                )
            });
        }

        return (
            <div>
                <Filters />
                <div className="multipleResultsContainer" id="multiplePageTop">
                    <div className="multipleResultsItemsContainer">
                        { displayedSnack }
                    </div>
                    <div className="toTopButton" onClick={this.topFunction}></div>
                </div>
            </div>
        )
    }
}

export default MultipleResults;
