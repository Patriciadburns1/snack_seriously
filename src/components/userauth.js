import React, { Component } from 'react';

export default (WrappedComponent, context) => {
    class UserAuth extends Component {
        componentDidMount() {
            if (!context.userLoggedIn) {
                this.props.history.push('/')
                console.log('component did mount on userAuth page'); 
            } else {
                console.log("user logged in"); 
            }
        }
       

        componentDidUpdate() {
            if (!context.userLoggedIn) {
                this.props.history.push('/');
            }
        }


        render() {

            return !context.userLoggedIn
                ? <p>Redirecting...</p>
                : <WrappedComponent {...this.props}/>
        }
    }

    return UserAuth;

}



