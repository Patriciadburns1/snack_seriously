import React, { Component } from 'react';
import '../../assets/css/singleitem.css';
import noImage from '../../assets/images/imagenotfound.jpeg';
import buyFromAmazon from '../../assets/images/buy-now-with-amazon.png';
import empty_like from '../../assets/images/LIKE-empty.png';
import like from '../../assets/images/LIKE-true.png';
import axios from 'axios';

class SingleItem extends Component{
    constructor(props){
        super(props);
        this.favorite = false;
        this.state = {
            like : empty_like
        }
    }

    componentDidMount(){
        this.checkApi();

    };

    async checkApi(){
        const checkfav = await axios.get(`/api/snackapi.php?action=getfavcheck&id=${this.props.product_id}`);
        this.favorite = checkfav.data.data;
        if(this.favorite){
            this.setState({
                like : like
            })
        }
    };

    handleBuy(){
        window.open(this.props.amazon_url,'_blank');
    }

    likeItem(product_id){
        const response = axios.get(`/api/snackapi.php?action=addtofav&product_id=${product_id}&choice=true`);
    }

    dontCareItem(product_id){
        const response = axios.get(`/api/snackapi.php?action=addtofav&product_id=${product_id}&choice=false`);
    }

    handleLike(){
        if (this.state.like === empty_like){
            this.likeItem(this.props.product_id);
            this.setState({
                like : like
            })
        } else {
            this.dontCareItem(this.props.product_id);
            this.setState({
                like : empty_like
            })
        }
    }

    render(){
        return(
        <div className="singleItemContainer">
            <h2>{this.props.name}</h2>
            <p>{this.props.manu}</p>
            <img src={!this.props.img ? noImage : this.props.img} className="singleItemImage"/>
            <img onClick={this.handleLike.bind(this)} className={`likeItem`} src={this.state.like}/>
            <img onClick={this.handleBuy.bind(this)} className='buyFromAmazon' src={buyFromAmazon}/>
        </div>
        )
    }
}

export default SingleItem;