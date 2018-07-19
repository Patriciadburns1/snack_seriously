import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/multipleresultspage.css';
import axios from 'axios';
import noImage from '../assets/images/imagenotfound.jpeg';
import SearchData, { SearchDataContext } from './searchdata';
import emptyFav from '../assets/images/emptyFav.png';

class UserFavorites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snackData: [],
            offset: 0
        }

        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.getSnackData = this.getSnackData.bind(this);
        this.onRouteChange = this.onRouteChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
        this.getSnackData();
    };


    async getSnackData() {
        let URL = '/api/snackapi.php?action=getfavorites&limit=12';
        let querystring = null;
        let offset = this.state.offset;

        querystring = `&offset=${offset}`;

        URL += querystring;
        try {
            const snackData = await axios(URL, {
                method: 'GET',
                withCredentials: true

            });
            this.setState({
                snackData: [...this.state.snackData, ...snackData.data.data],
                offset: offset + 12
            });
        } catch (err) {
            console.log('Get Data Error:', err.message);
        }
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    onRouteChange() {
        this.setState({
            snackData: [],
            offset: 0
        },
            () => {
                this.getSnackData();
            }
        )
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
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

    render() {
        const { snackData, offset } = this.state;
        if (offset === 0) {
            return (
                <SearchDataContext.Consumer>{(context) => (
                    <Fragment>
                        <div className="logOutButtonDiv">
                            <Link to='/'> <button className='logOutButton' type='button' onClick={context.logOut}> Logout </button> </Link>
                        </div>
                        <div className='emptySnack'>
                            <img src={emptyFav}/>
                        </div>
                        <div className="addSnacks"> You can add your favorite snacks! </div>
                )}
                </SearchDataContext.Consumer>
            )
        }

        if (snackData) {
            var displayedSnack = snackData.map((item, index) => {
                return (
                    <Link key={index} to={`/singleresult/${item.ID}`}>
                        <div className="multipleResultsItem">
                            <div>
                                <img className="multipleResultsImage" src={!item.img_url ? noImage : item.img_url} />
                            </div>
                            <div>
                                <span className="multipleResultsDescription">{item.name}</span>
                            </div>
                        </div>
                    </Link>
                )


            });
        }
        const { name } = this.state;
        const userInput = this.state.userInput;
        const params = this.props.match.params.term || '';

        return (
            <SearchDataContext.Consumer>{(context) => (
                <Fragment>
                    <div className="multipleResultsContainer">
                        <div className="multipleResultsItemsContainer">
                            {displayedSnack}
                        </div>
                    </div>
                </Fragment>
            )}
            </SearchDataContext.Consumer>
        )
    }
}

export default UserFavorites;
