import React, { Component } from "react";
import '../assets/css/testmenubutton.css';
 
class Testmenubutton extends Component {
  render() {
    return (
      <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}
 
export default Testmenubutton;