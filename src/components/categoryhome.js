import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/categorieshomepage.css';

class CategoryHome extends Component {
    render() {
        // const nameArray = ["Popcorn & Pretzels", "Chips & Crisps", "Nuts, Seeds & Dried Fruit", "Bars", "Cookies", "Candy & Chocolate"]
        const imageArray = ["popcornpretzel", "chipscrackers", "nutsdriedfruit", "bar", "cookies", "candychocolate"];
        const valueArray = [1, 2, 3, 4, 5, 6]
        const Items = imageArray.map((item, index) => {
            return (
                <Link key={index} to= {`/MultipleResults/${valueArray[index]}`}>
                <div  className="categoryHomepageItem" >
                    <img src={require(`./filters/categoriesicons/${item}.png`)} className="categoryHomepageImage" />
                    {/* <p>{nameArray[index]}</p> */}
                </div>
                </Link>
            )
        });
     
        return (
            <Fragment>
                <div className='categoryHomepageContainer'>
                    <div className='categoryHomepageGrid'>
                        { Items}
                </div>
                    <div className="plus"></div>
                </div>
            </Fragment>
        )
    }
}

export default CategoryHome;