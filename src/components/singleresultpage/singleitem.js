import React, { Component } from 'react';
import '../../assets/css/singleitem.css';
import noImage from '../../assets/images/imagenotfound.jpeg';
import buyFromAmazon from '../../assets/images/buy-now-with-amazon.png'
import empty_like from '../../assets/images/empty_like.png'
import like from '../../assets/images/like.png'
import dislike from '../../assets/images/dislike.png'

class SingleItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            like : empty_like,
            rotate: ""
        }
    }

    handleBuy(){
        window.open(this.props.amazon_url,'_blank');
    }

    handleLike(){
        if (this.state.like === empty_like || this.state.like === dislike ){
            this.setState({
                like : like,
                rotate : "rotateUP"
            })
        } else {
            this.setState({
                like : dislike,
                rotate : "rotateDown"
            })
        }

    }


    render(){

        return(
        <div className="singleItemContainer">
            <h2>{this.props.name}</h2>
            <p>{this.props.manu}</p>
            <img src={!this.props.img ? noImage : this.props.img} className="singleItemImage"/>
            <img onClick={this.handleLike.bind(this)} className={`likeItem ${this.state.rotate}`} src={this.state.like}/>
            <img onClick={this.handleBuy.bind(this)} className='buyFromAmazon' src={buyFromAmazon}/>
        </div>
        )
    }
}


export default SingleItem;