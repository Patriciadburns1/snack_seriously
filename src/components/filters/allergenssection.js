import React, { Component } from 'react';
import AllergenIcon from './allergenIcon.js'
import { SearchDataContext } from '../searchdata';


class Allergens extends Component {

    renderItems(context){
        const { allergenArray } = context;
        const Items = allergenArray.map((item, index) => {
            return (
                <AllergenIcon key={index}  clickHandler={()=>{context.handleAllergenClick(index)}} img={require(`./allergenicons/${item.name}.png`)} strike={item.strike} />
                )
            });
        
        return( 
            <div className={context.allergenShow ? "filterPanel active" : "filterPanel"}>
                <div className="allergyPageContainer">
                    <h4 className="allergyTitle"> Select all allergens to avoid </h4>
                    <div className="allergyContainer">
                        {Items}
                    </div>
                </div>
            </div>
        )  
    }

    render() {

        return (
            <SearchDataContext.Consumer>
                {this.renderItems}
            </SearchDataContext.Consumer> )
    }
}

export default Allergens;
