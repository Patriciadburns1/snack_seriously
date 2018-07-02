import React, {Component} from 'react'; 
import Data from '../../../server/wizardDummyData'; 

const Ingredient = (props) => {
    return(
      
        <div className="ingredientContainer"> Ingredients: {props.ingredients} </div>
    )
}


export default Ingredient; 