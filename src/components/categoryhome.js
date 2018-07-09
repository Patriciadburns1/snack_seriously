import React, {Component, Fragment} from 'react';

class CategoryHome extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     visible: false,
        // }

        // this.toggleMenu = this.toggleMenu.bind(this);
    }

    // toggleMenu() {
    //     event.stopPropagation();
    //     const {visible} = this.state;
    //     this.setState({
    //         visible: !visible
    //     });
    // }

    addStrikethrough(){
        // console.log("This is the value of this before binding", this);
    }
    render() {
        // const {visible} = this.state;

        const nameArray = ["Popcorn & Pretzels,", "Jerky & Rinds", "Snack Bars", "Nuts & Dried Fruit", "Candy & Chocolate"]
        const imageArray = ["popcornpretzel", "meat", "chipscrackers", "bar", "nutsdriedfruit", "candychocolate"];
        const Items = imageArray.map((item, index) => {
            return (
                <div key={index} className="categoryHomepageItem">
                    <img  src={`../filters/categoriesicons/${item}.png`} className="categoryHomepageImage" />
                </div>
            )
        }); 
        return (
            <Fragment>
                {/* <div className={visible ? "filterMenu " : "filterMenu active"} onClick={this.toggleMenu}>Categories</div>
                <div className={visible ? "filterPanel active" : "filterPanel"}> */}

                <div className='categoryHomepageContainer'>
                    <h4 className='categoryHomepageTitle'>Pick a snack category</h4>
                    <div className='categoryHomepageContainer'>
                        { Items }
                        {/* <div className='categoryItem'>
                            <img className='categoryImage' src={popcornpretzel}/>
                            <p className='categoryLabel'>Popcorn &amp; Pretzels</p>
                        </div>
                        <div className='categoryItem'>
                            <img className='categoryImage' src={meat}/>
                            <p className='categoryLabel'>Jerky &amp; Rinds</p>
                        </div>
                        <div className='categoryItem'>
                                <img className='categoryImage' src={chipscrackers}/>
                                <p className='categoryLabel'>Chips &amp; Crackers</p>
                        </div>
                        <div className='categoryItem'>
                            <img className='categoryImage' src={bar}/>
                            <p className='categoryLabel'>Snack Bars</p>
                        </div>
                        <div className='categoryItem'>
                            <img className='categoryImage' src={nutsdriedfruit}/>
                            <p className='categoryLabel'>Nuts &amp; Dried Fruit</p>
                        </div>
                        <div className='categoryItem'>
                            <img className='categoryImage' src={candychocolate}/>
                            <p className='categoryLabel'>Candy &amp; Chocolate</p>
                        </div> */}
                    {/* </div> */}
                </div>
        
                    <div className="plus"></div>
                </div>
            </Fragment>
        )
    }
}

export default CategoryHome;