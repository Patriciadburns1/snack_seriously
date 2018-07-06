import React, {Component} from 'react';
import '../../assets/css/stylesheet.css';
import './nav.css';
import '../../assets/css/buttons.css';
import MenuButton from './menubutton';
import Menu from './menu';
import Search from '../searchbar';
import SnackSeriouslyLogo from '../../assets/images/logo/snackSeriouslyLogo.png';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

    }
    
    handleMenuClick(event) {
        this.toggleMenu();
        event.stopPropagation();
      } 

    toggleMenu() {
        const {visible} = this.state;
        this.setState({
            visible: !visible
        })
    }

    render(){
        const {visible} = this.state;
        return (
            <div className="navBar">
                <MenuButton handleMenuClick={this.handleMenuClick} visible={visible}/>
                <Menu handleMenuClick={this.handleMenuClick}
                    visible={visible}/>
                <div className="navSearch">
                {/*<div className="logo">Logo</div>*/}
                    <div className="navImage">
                        <img src={SnackSeriouslyLogo}/>
                    </div>
                    <Search/>
                </div>
            </div>
        )
    }
}

export default Nav;