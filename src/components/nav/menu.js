import React, {Component} from 'react';
import './menu.css';

class Menu extends Component {
    render() {
        return(
            <div className={this.props.visible ? "show" : "hide"} id="menuContainer" onClick={this.props.handleMouseDown}>
                <div className="xStyle">X</div>
                <div className="menuStyle">Home</div>
                <div className='menuStyle'>Search</div>              
                <div className='menuStyle'>Random</div>
            </div>
        )
    }
}

export default Menu;
