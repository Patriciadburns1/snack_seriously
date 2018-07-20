import React, { Component } from 'react';

export default (WrappedComponent, context) => {
    class UserAuth extends Component {
        componentDidMount() {
            if (!context.userLoggedIn) {
                this.props.history.push('/')

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



