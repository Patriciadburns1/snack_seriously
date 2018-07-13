import React, {Component, Fragment} from 'react';
import popcornpretzel from './categoriesicons/popcornpretzel.png';
import meat from './categoriesicons/meat.png';
import chipscrackers from './categoriesicons/chipscrackers.png';
import bar from './categoriesicons/bar.png';
import nutsdriedfruit from './categoriesicons/nutsdriedfruit.png';
import candychocolate from './categoriesicons/candychocolate.png';

class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: props.visible,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        event.stopPropagation();
        const {visible} = this.state;
        this.setState({
            visible: !visible
        });
    }

    addStrikethrough(){
        // console.log("This is the value of this before binding", this);
    }
    render() {
        const {visible} = this.state;
        const {peanut} = this.state

        const nameArray = ["Popcorn & Pretzels", "Jerky & Rinds", "Chips & Crackers", "Snack Bars", "Nuts & Dried Fruit", "Candy & Chocolate"]
        const imageArray = ["popcornpretzel", "meat", "chipscrackers", "bar", "nutsdriedfruit", "candychocolate"];
        const Items = imageArray.map((item, index) => {
            return (
                <div key={index} className="categoryItem">
                    <img  src={require(`./categoriesicons/${item}.png`)} className="categoryImage" />
                    <p className="categoryLabel">{nameArray[index]}</p>
                </div>
            )
        }); 

        return (
            <Fragment>
                {/* <div className={visible ? "filterMenu " : "filterMenu active"} onClick={this.toggleMenu}>Categories</div> */}
                <div className={this.props.visible ? "filterPanel active" : "filterPanel"}>
                    <div className='categoryPageContainer'>
                        <h4 className='categoryTitle'>Pick a snack category</h4>
                        <div className='categoryContainer'>
                            { Items }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Categories;
