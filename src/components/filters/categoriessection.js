import React, {Component, Fragment} from 'react';
import { SearchDataContext } from '../searchdata';
import CategoryIcon from './categoryIcon';

class Categories extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     visible: props.visible,
        // }

        // this.toggleMenu = this.toggleMenu.bind(this);
    }

    // toggleMenu() {
    //     // event.stopPropagation();
    //     const {visible} = this.state;
    //     this.setState({
    //         visible: !visible
    //     });
    // }

    // addStrikethrough(){
    //     // console.log("This is the value of this before binding", this);
    // }

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
        // const {visible} = this.state;
        return (
            <SearchDataContext.Consumer>
            {/*  <Fragment> */}
                {/* <div className={visible ? "filterMenu " : "filterMenu active"} onClick={this.toggleMenu}>Categories</div> */}
                {this.renderItems}
             {/* </Fragment> */}
            </SearchDataContext.Consumer>
        )
    }
}

export default Categories;
