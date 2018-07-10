import React, {Component, Fragment} from 'react';
import '../assets/css/categorieshomepage.css';

class CategoryHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
        }

    }

    // toggleStrikethrough() {
    //     event.stopPropagation();
    //     const {clicked} = this.state;
    //     this.setState({
    //         clicked: !false
    //     });
    // }

    addStrikethrough(){
        event.stopPropagation();
        console.log("This is the value of this before binding", this);
    }
    render() {
        // const {clicked} = this.state;

        const nameArray = ["Popcorn & Pretzels,", "Jerky & Rinds", "Snack Bars", "Nuts & Dried Fruit", "Candy & Chocolate"]
        const imageArray = ["popcornpretzel", "meat", "chipscrackers", "bar", "nutsdriedfruit", "candychocolate"];
        const Items = imageArray.map((item, index) => {
            return (
                <div key={index} className="categoryHomepageItem" onClick={this.addStrikethrough.bind(this)}>
                    <img  src={`../filters/categoriesicons/${item}.png`} className="categoryHomepageImage" />
                </div>
            )
        }); 
        return (
            <Fragment>
                <div className='categoryHomepageContainer'>
                    <h4 className='categoryHomepageTitle'>Pick a snack category</h4>
                    <div className='categoryHomepageContainer'>
                        { Items }
                </div>
                    <div className="plus"></div>
                </div>
            </Fragment>
        )
    }
}

export default CategoryHome;