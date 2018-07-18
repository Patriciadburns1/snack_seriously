import React, { Component } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import SearchData, { SearchDataContext } from '../searchdata';


class Menu extends Component {


    render() {
        return (
            <SearchDataContext.Consumer>{(context) => (
                <div className={this.props.visible ? "invisibleMenuContainer show" : "invisibleMenuContainer hide"} onClick={this.props.handleMenuClick}>
                    <div className={this.props.visible ? "show" : "hide"} id="menuContainer" onClick={this.props.handleMenuClick}>
                        <Link to="/"> <div className="menuLinkStyle">Home</div></Link>
                        {context.userLoggedIn ? <div className="menuLinkStyle" onClick={context.logOut}> Log Out </div> : <Link to="/LogIn"> <div className="menuLinkStyle"> Log In </div> </Link>}
                        {context.userLoggedIn ? <Link to="/UserFavorites"> <div className="menuLinkStyle"> User Favorites </div> </Link> : null}
                        <Link to="/MultipleResults"><div className='menuLinkStyle'>Random Snack</div></Link>
                        <Link to="/About"><div className="menuLinkStyle">About</div></Link>
                        <Link to="/Team"><div className="menuLinkStyle">Team</div></Link>
                        <Link to="/Contact"><div className="menuLinkStyle">Contact</div></Link>
                    </div>
                </div>
            )}
            </SearchDataContext.Consumer>
        );
    }
}

export default Menu;
