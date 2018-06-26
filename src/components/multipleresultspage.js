import React, { Component } from 'react';
import '../assets/css/multipleresultspage.css';
import glutenfreeone from '../assets/images/multipleresultsimages/glutenfreeone.png';
import glutenfreetwo from '../assets/images/multipleresultsimages/glutenfreetwo.png'
import glutenfreethree from '../assets/images/multipleresultsimages/glutenfreethree.png'
import glutenfreefour from '../assets/images/multipleresultsimages/glutenfreefour.png'
import glutenfreefive from '../assets/images/multipleresultsimages/glutenfreefive.png'
import glutenfreesix from '../assets/images/multipleresultsimages/glutenfreesix.png'

class Searchresults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="multipleResultsContainer">
                <div className="multipleResultsItemsContainer">
                    <div className="multipleResultsItem">
                        <img className="multipleResultsImage" src={glutenfreeone} alt=""/>
                        <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div className="multipleResultsItem">
                        <img className="multipleResultsImage" src={glutenfreetwo} alt=""/>
                        <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div className="multipleResultsItem">
                        <img className="multipleResultsImage" src={glutenfreethree} alt=""/>
                        <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div className="multipleResultsItem">
                        <img className="multipleResultsImage" src={glutenfreefour} alt=""/>
                        <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div className="multipleResultsItem">
                        <img className="multipleResultsImage" src={glutenfreefive} alt=""/>
                        <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div className="multipleResultsItem">
                        <img className="multipleResultsImage" src={glutenfreesix} alt=""/>
                        <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </div>
                <div className='footerButtons'>
                    <a href='#'><div type='button' className='btnStyle btnNormal'>Back</div></a>
                    <a href='#'><div type='button' className='btnStyle btnNormal'>Next</div></a>
                </div>
            </div>
        )
    }
}

export default Searchresults;