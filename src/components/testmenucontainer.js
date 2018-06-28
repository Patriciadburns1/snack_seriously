import React, { Component } from "react";
import '../assets/css/test.css'
import Testmenubutton from './testmenubutton';
import Testmenu from './testmenu';
 
class MenuContainer extends Component {

  constructor(props, context) {
    super(props, context);
   
    this.state = {
      visible: false
    };
   
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  } 
  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }
  render() {
    return (
      <div>
        <Testmenubutton handleMouseDown={this.handleMouseDown}/>
        <Testmenu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuContainer;