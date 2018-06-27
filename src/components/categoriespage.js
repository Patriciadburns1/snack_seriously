import React, {Component} from 'react';
import '../assets/css/categoriespage.css';
import popcornpretzel from '../assets/images/categoriesicons/popcornpretzel.png';
import meat from '../assets/images/categoriesicons/meat.png';
import chipscrackers from '../assets/images/categoriesicons/chipscrackers.png';
import bar from '../assets/images/categoriesicons/bar.png';
import nutsdriedfruit from '../assets/images/categoriesicons/nutsdriedfruit.png';
import candychocolate from '../assets/images/categoriesicons/candychocolate.png';
import { Link } from 'react-router-dom';

class Categories extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return(
            <div className='categoryPageContainer'>
                <h2 className='categoryTitle'>Pick a snack category</h2>
                <div className='categoryContainer'>
                    <Link to='/MultipleResult'>
                        <div className='categoryItem'>
                            <img className='categoryImage' src={popcornpretzel}/>
                            <p className='categoryLabel'>Popcorn &amp; Pretzels</p>
                        </div>
                    </Link>
                    <Link to='/MultipleResult'>
                            <div className='categoryItem'>
                                <img className='categoryImage' src={meat}/>
                                <p className='categoryLabel'>Jerky &amp; Rinds</p>
                            </div>
                    </Link>
                    <Link to='/MultipleResult'>
                            <div className='categoryItem'>
                                    <img className='categoryImage' src={chipscrackers}/>
                                    <p className='categoryLabel'>Chips &amp; Crackers</p>
                            </div>
                    </Link>
                    <Link to='/MultipleResult'>
                            <div className='categoryItem'>
                                <img className='categoryImage' src={bar}/>
                                <p className='categoryLabel'>Snack Bars</p>
                            </div>
                    </Link>
                    <Link to='/MultipleResult'>
                            <div className='categoryItem'>
                                <img className='categoryImage' src={nutsdriedfruit}/>
                                <p className='categoryLabel'>Nuts &amp; Dried Fruit</p>
                            </div>
                    </Link>
                    <Link to='/MultipleResult'>
                            <div className='categoryItem'>
                                <img className='categoryImage' src={candychocolate}/>
                                <p className='categoryLabel'>Candy &amp; Chocolate</p>
                            </div>
                    </Link>
                </div>
                    <div className='footerButtons'>
                        <Link to='/AllergenPage'><div type='button' className='btnStyle btnNormal'>&#8592; Back</div></Link> 
                        <Link to='/'><div type='button' className='btnStyle btnNormal'>Home &#8962;</div></Link>
                    </div>
            </div>
        )
    }
}

export default Categories;