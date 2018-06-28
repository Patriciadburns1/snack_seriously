import React, {Component} from 'react';
 
class MenuButton extends Component {
  render() {
    return (
      <div className="menuIconContainer" onClick={this.props.handleMenuClick}> 
            <div className="topBar"></div>
            <div className="midBar"></div>
            <div className="botBar"></div>
        </div>
    );
  }
}
 
export default MenuButton;