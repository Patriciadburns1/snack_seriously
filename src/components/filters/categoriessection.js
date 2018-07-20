import React, {Component} from 'react';
import { SearchDataContext } from '../searchdata';
import CategoryIcon from './categoryIcon';

class Categories extends Component {

    renderItems(context){
        const { categoryArray } = context;
        const Items = categoryArray.map((item, index) => {
            return ( 
                <CategoryIcon image={require(`./categoriesicons/${item.image}.png`)} name={item.name} key={index} clickHandler={() => {context.handleCategoryClick(index)}} selected={item.selected}/>
            )
        });
        return(
            <div className={context.categoryShow ? "filterPanel active" : "filterPanel"}>
                    <div className='categoryPageContainer'>
                        <h4 className='categoryTitle'>Pick a snack category</h4>
                        <div className='categoryContainer'>
                            { Items }
                        </div>
                    </div>
                </div>
        )
    }
    render() {
        return (
            <SearchDataContext.Consumer>
                {this.renderItems}
            </SearchDataContext.Consumer>
        )
    }
}

export default Categories;
