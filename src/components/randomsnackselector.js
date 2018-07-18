import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/randomsnackselector.css';
import { Link } from 'react-router-dom';
import noImage from '../assets/images/imagenotfound.jpeg';

class RandomSnack extends Component {
    constructor(props){
        super(props);

        this.state = {
            snackData: null,
            image: null,
            counter: 0
        };
    }

    componentDidMount() {
        this.getRandomData();
    }

    async getRandomData() {
        let URL = '/api/snackapi.php?action=';
        let querystring = "getrandom";
        URL += querystring;
        try {
            const snackData = await axios.get(URL);
            this.setState({
                snackData: snackData.data.data,
            });
        } catch (err) {
            console.log('Get Data Error:', err.message);
        }
    }

    handleNextPictureClick() {
        let { counter } = this.state;

        this.setState({
            counter: this.state.counter + 1
        });

        if(counter === 10) {
            this.getRandomData();
            this.setState({
                counter: 0
            });
        }
    }

    render() {
        const randomSnack = this.state.snackData;
        const { counter } = this.state;

        if(!randomSnack){
            return <div className="randomSnackContainer loadingRandom">Loading snack...</div>
        }

        let random = null;

        if (counter < randomSnack.length){
            random = randomSnack[counter + 1];
        }

        let image = random.img_url;
        let item_id = random.ID;

        if(!image){
            image = noImage
        }

        return (
            <div className="randomSnackContainer">
                <div className="randomButtonContainers">
                    <div onClick={this.handleNextPictureClick.bind(this)} className="leftRandomSnackBtn">
                        <span className="randomLButtonSymbol">Try Again</span>
                    </div>

                        <img src={image} id="randomImage" onClick={this.nextPicture} alt="Random Snack"/>

                    <Link to ={`/singleresult/${item_id}`} >
                        <div className="rightRandomSnackBtn">
                            <span className="randomRButtonSymbol">Go to Snack</span>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

}

export default RandomSnack;



