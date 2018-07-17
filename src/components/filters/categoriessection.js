import React, {Component, Fragment} from 'react';
import { SearchDataContext } from '../searchdata';


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
        const nameArray = ["Popcorn & Pretzels", "Jerky & Rinds", "Chips & Crackers", "Snack Bars", "Nuts & Dried Fruit", "Candy & Chocolate"]
        const imageArray = ["popcornpretzel", "meat", "chipscrackers", "bar", "nutsdriedfruit", "candychocolate"];
        const Items = imageArray.map((item, index) => {
            return ( //className={props.strike ? "allergyImage strike" : "allergyImage"}
                <div key={index} className={context.categoryChosen ? "categoryItem strike" : "categoryItem"} onClick={() => context.handleCategoryClick(index)}>
                    <img  src={require(`./categoriesicons/${item}.png`)} className="categoryImage" />
                    <p className="categoryLabel">{nameArray[index]}</p>
                </div>
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
