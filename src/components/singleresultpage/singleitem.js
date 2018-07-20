import React, { Component } from 'react';
import '../../assets/css/singleitem.css';
import noImage from '../../assets/images/imagenotfound.jpeg';
import buyFromAmazon from '../../assets/images/buy-now-with-amazon.png';
import empty_like from '../../assets/images/LIKE-empty.png';
import like from '../../assets/images/LIKE-true.png';
import axios from 'axios';
import { SearchDataContext } from '../searchdata';

class SingleItem extends Component {
    constructor(props) {
        super(props);
        this.favorite = false;
        this.state = {
            like: empty_like
        }
    }

    componentDidMount() {
        this.checkApi();

    };

    async checkApi() {
        const checkfav = await axios.get(`/api/snackapi.php?action=getfavcheck&id=${this.props.product_id}`);
        this.favorite = checkfav.data.data;
        if (this.favorite) {
            this.setState({
                like: like
            })
        }
    };

    handleBuy() {
        window.open(this.props.amazon_url, '_blank');
    }

    likeItem(product_id) {
        const response = axios.get(`/api/snackapi.php?action=addtofav&product_id=${product_id}&choice=true`);
    }

    dontCareItem(product_id) {
        const response = axios.get(`/api/snackapi.php?action=addtofav&product_id=${product_id}&choice=false`);
    }

    handleLike(context) {
        if(context.userLoggedIn){
            if (this.state.like === empty_like) {
                this.likeItem(this.props.product_id);
                this.setState({
                    like: like
                })
            } else {
                this.dontCareItem(this.props.product_id);
                this.setState({
                    like: empty_like
                })
            }

        }
     }
      
    

    render() {
        return (
        <SearchDataContext.Consumer>{(context) => (
                <div className="singleItemContainer">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.manu}</p>
                    <img src={!this.props.img ? noImage : this.props.img} className="singleItemImage" height="300" width="300" />
                    <img onClick={this.handleLike.bind(this,context)} className={`likeItem`} src={this.state.like} />
                    {context.userLoggedIn ? null : <p> Log in to add to favorites </p> }
                    <img onClick={this.handleBuy.bind(this)} className='buyFromAmazon' src={buyFromAmazon} />
                </div>
            )}
        </SearchDataContext.Consumer>
        )
    }
}

export default SingleItem;