import React, {Component} from 'react';
import '../assets/css/stylesheet.css';
import '../assets/css/nav.css';
import '../assets/css/buttons.css'
// import hamburger from '../assets/images/hamburger.png';
import {Link} from 'react-router-dom';

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuIsOpen: false
        }
    }
    
    toggleMenu() {
        const {menuIsOpen} = this.state;
        this.setState({
            menuIsOpen: !menuIsOpen
        })
    }

    render(){
        const {menuIsOpen} = this.state;
        console.log(menuIsOpen)
        return (
            <div className="navBar">
                <div 
                    className={menuIsOpen ? '.menuSlide .menuIconContainer': '.menuIconContainer'} 
                    onClick={this.toggleMenu.bind(this)}> 
                    <div className="topBar"></div>
                    <div className="midBar"></div>
                    <div className="botBar"></div>
                </div>
                {/* <div 
                        className="menuIconContainer"
                        onClick={this.toggleMenu.bind(this)}> 
                    <div className={menuIsOpen ? "topBar animateBar" : "topBar"}></div>
                    <div className={menuIsOpen ? "midBar animateBar" : "midBar"}></div>
                    <div className={menuIsOpen ? "botBar animateBar" : "botBar"}></div>
                </div> */}
                {/* <div className='hamburgerMenu'>
                    <img src={hamburger}/>
                </div> */}
                <div className="logo">Logo</div>
            </div>
        )
    }
}

export default Homepage;