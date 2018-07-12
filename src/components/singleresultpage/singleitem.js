import React from 'react'; 
import '../../assets/css/singleitem.css';
import noImage from '../../assets/images/imagenotfound.jpeg';

export default (props) => {
 return(
     <div className="singleItemContainer"> 
        <h2>{props.name}</h2>
        <p>{props.manu}</p>
        <img src={!props.img ? noImage : props.img}className="singleItemImage"/>
    </div> 
 )
}
