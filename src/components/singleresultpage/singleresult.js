import React, { Component } from 'react';
import '../../assets/css/singleresult.css'
import { Link } from 'react-router-dom';
import Nutritionalfacts from './nutritionalfacts';
import Ingredient from './ingredient';
import SingleItem from './singleitem'
import axios from 'axios';
import NotFound from './notfound';




class SingleResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            singleItem: null,
            error: false,
            loading: true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    onClickShowModal(){

    }

    componentDidMount() {
        this.getSingleResult();
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            userInput: value,
        })
        this.props.history.push('/search/' + value);
    }

    async getSingleResult() {
        const { product_id } = this.props.match.params;
        const response = await axios.get(`http://api.snackseriously.com/snackapi.php?action=getproduct&product_id=${product_id}`);
        this.setState({
            singleItem: response.data,
            loading: false
        }, () => {
            if (!this.state.singleItem.success) {
                this.setState({
                    singleItem: null,
                    error: true
                })
            }
        });
    }


    render() {
        const { singleItem, error, loading } = this.state;

        if (!loading && error) {
            return (
                <div> <NotFound /> </div>
            )
        }

        if (loading && !singleItem || !singleItem.success) {
            return <h1>Loading...</h1>;
        } 
        else {
            const { nutrients, ingredients, img_url, name, manu, per_container, size, unit, weight } = this.state.singleItem.data;
            const params = this.props.match.params.term || '';
            return (
                    <div className="singleResultContainer">
                        <SingleItem name={name} manu={manu} img={img_url} />
                        <Nutritionalfacts nutrition={nutrients} per_container={per_container} size={size} unit={unit} weight={weight} />
                        <Ingredient ingredients={ingredients} />
                    </div>
            )
        }
    }
}

export default SingleResult;