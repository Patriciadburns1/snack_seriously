import React from 'react'; 
import '../../assets/css/singleitem.css';

export default (props) => {
 return(
     <div className="singleitemContainer"> 
        <h2>{props.name}</h2>
        <p>{props.manu}</p>
        <img src={props.img}className="singleitemImage"/>
    </div> 
 )
}
