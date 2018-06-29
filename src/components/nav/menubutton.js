import React, {Component} from 'react';
 
class MenuButton extends Component {
  render() {
    return (
      <div id="menuIconContainer" className={this.props.visible ? "animateBar" : ""} onClick={this.props.handleMenuClick}> 
            <div className="topBar"></div>
            <div className="midBar"></div>
            <div className="botBar"></div>
        </div>
    );
  }
}
 
export default MenuButton;