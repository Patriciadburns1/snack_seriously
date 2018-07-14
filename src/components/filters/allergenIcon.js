import React from 'react';

export default (props)=>{
    return (
        <div onClick={props.clickHandler} className="allergyItem" indexnum={props.indexnum}>
            <img  src={props.img}  className={props.strike ? "allergyImage strike" : "allergyImage"} />
        </div>
    )
}