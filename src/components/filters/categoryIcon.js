import React from 'react';


export default (props)=>{
    return (
        <div onClick={props.clickHandler} className={props.selected ? "categoryItem circled" : "categoryItem"}>
            <img  src={props.image} className="categoryImage"/>
            <p className="categoryLabel">{props.name}</p>
        </div>
    )
}

