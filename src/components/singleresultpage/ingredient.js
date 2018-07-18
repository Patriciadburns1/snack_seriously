import React, {Component} from 'react'; 

const Ingredient = (props) => {
    return(
      
        <div className="ingredientContainer"> INGREDIENTS: {props.ingredients} </div>
    )
}


export default Ingredient; 