import React from 'react';


//className={strikethrough ? "allergyImage strike" : "allergyImage"}
export default (props)=>{
    return (
        <div onClick={props.clickHandler} className="allergyItem">
            <img  src={props.img}  className={props.strike ? "allergyImage strike" : "allergyImage"} />
        </div>
    )
}