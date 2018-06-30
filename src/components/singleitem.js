import React from 'react'; 
import '../assets/css/singleitem.css';

export default (props) => {
 return(
     <div className="singleitemContainer"> 
         <img src={props.img}className="singleitemImage"/>
         <h2>{props.name}</h2>
         <p>{props.manu}</p>
    </div> 
 )
}
