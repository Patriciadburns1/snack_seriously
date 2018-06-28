import React, {Component} from 'react';
 
class MenuButton extends Component {
  render() {
    return (
    //   <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
      <div className="menuIconContainer" onClick={this.props.handleMouseDown}> 
            <div className="topBar"></div>
            <div className="midBar"></div>
            <div className="botBar"></div>
        </div>
    );
  }
}
 
export default MenuButton;