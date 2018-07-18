import React, { Component } from 'react';
import '../../assets/css/singleitem.css';
import noImage from '../../assets/images/imagenotfound.jpeg';
import buyFromAmazon from '../../assets/images/buy-now-with-amazon.png'
import empty_like from '../../assets/images/empty_like.png'
import like from '../../assets/images/like.png'
//import dislike from '../../assets/images/dislike.png'
import axios from 'axios';

class SingleItem extends Component{
    constructor(props){
        super(props);
        //localhost:3000/public/api/snackapi.php?action=getfavcheck&id=1
        this.favorite = false;

        this.state = {
            like : empty_like

        }
    }

    componentDidMount(){
        this.checkApi();

    };

    async checkApi(){
        const checkfav = await axios.get(`http://localhost:3000/public/api/snackapi.php?action=getfavcheck&id=${this.props.product_id}`);
        console.log('checkfav',checkfav.data.data);
        this.favorite = checkfav.data.data;
        console.log('this.favorite',this.favorite);
        //this.setState({favorite : checkfav.data});
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
        const response = axios.get(`http://localhost:3000/public/api/snackapi.php?action=addtofav&product_id=${product_id}&choice=true`);
    }

    dontCareItem(product_id){
        const response = axios.get(`http://localhost:3000/public/api/snackapi.php?action=addtofav&product_id=${product_id}&choice=false`);
    }

    handleLike(){
        //http://localhost:3000/public/api/snackapi.php?action=addtofav&product_id=1&choice=true
        //localhost:8000/public/api/snackapi.php?action=getfavorites&limit=12&offset=0
        //if (this.state.like === empty_like){
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

        console.log(this.props.product_id);
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