import React, {Component} from 'react';
import './menu.css';

class Menu extends Component {
    render() {
        return(
            <div className={this.props.visible ? "show" : "hide"} id="menuContainer" onClick={this.props.handleMenuClick}>
                {/* <div className="xStyle">X</div> */}
                <div className="menuStyle">Home</div>
                <div className='menuStyle'>Snack Search</div>              
                <div className='menuStyle'>Random Snack</div>
            </div>
        )
    }
}

export default Menu;
