import React, { Component } from 'react';
import '../../assets/css/stylesheet.css';
import './nav.css';
import '../../assets/css/buttons.css';
import MenuButton from './menubutton';
import Menu from './menu';
import SnackSeriouslyLogo from '../../assets/images/logo/snackSeriouslyLogo.png';
import { Route, Link } from 'react-router-dom';
import Filters from '../filters';
import SearchBar from "../searchbar";
import { SearchDataContext } from '../searchdata';

class Nav extends Component {
    constructor(props) {
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
        const { visible } = this.state;
        this.setState({
            visible: !visible
        })
    }

    render() {
        const { visible } = this.state;
        return (
            <SearchDataContext.Consumer>{(context) => (
                <div className="navBar">
                    <div className="nav-content">
                        <div>
                            <div className="menu">
                                <MenuButton handleMenuClick={this.handleMenuClick} visible={visible} />
                                <Menu handleMenuClick={this.handleMenuClick} visible={visible} />
                            </div>
                            <div className="navSearch">
                                <Link to="/"><img className="snackImage" src={SnackSeriouslyLogo} /></Link>
                            </div>
                            <div className="profile">
                                {!context.userName ? "Welcome Guest!" : <p> Hi {context.userName}! </p>}
                            </div>
                        </div>
                        <Route path='/' component={SearchBar} />

                    </div>
                </div>
            )}
            </SearchDataContext.Consumer>
        )
    }
}

export default Nav;