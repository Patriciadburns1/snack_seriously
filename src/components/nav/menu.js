import React, {Component} from 'react';
import './menu.css';

class Menu extends Component {
    render() {
        return(
            <div className={this.props.visible ? "show" : "hide"} id="menuContainer" onClick={this.props.handleMenuClick}>
                <div className="menuLinkStyle">Home</div>
                <div className='menuLinkStyle'>Snack Search</div>              
                <div className='menuLinkStyle'>Random Snack</div>
            </div>
        )
    }
}

export default Menu;
