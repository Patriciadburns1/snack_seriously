import React, {Component} from 'react';
import './menu.css';
import {Link} from 'react-router-dom';


class Menu extends Component {
    render() {
        return(
            <div className={this.props.visible ? "show" : "hide"} id="menuContainer" onClick={this.props.handleMenuClick}>
                <Link to="/"><div className="menuLinkStyle">Home</div></Link>
                <Link to="MultipleResult"><div className='menuLinkStyle'>Random Snack</div></Link>
                <Link to="About"><div className="menuLinkStyle">About</div></Link>
            </div>
        )
    }
}

export default Menu;
