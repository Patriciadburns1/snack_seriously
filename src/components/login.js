import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/contact.css';
import axios from 'axios';
import { SearchDataContext } from './searchdata';


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                password: ''
            }

        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({
            form: { ...form },
        })
    }

    formatPostData(data) {
        const params = new URLSearchParams();

        for (let [k, v] of Object.entries(data)) {
            params.append(k, v);
        }

        return params;
    }

    async sendContactForm(context) {
        const { form } = this.state;
        
        try {
            await context.getUserLogIn(form);

            this.props.history.push('/');
        } catch (err){
            console.warn('Invalid email and/or password');
        }
    }
    
    renderName(){
        let userName = this.state.userName;  
    }


    render() {
        const { name, password } = this.state.form;
        if(this.state.userName != undefined){
            return(
                <SearchDataContext.Consumer>{(context) => (
                    <div>
                        {this.renderName()}
                    </div>
                )}
                </SearchDataContext.Consumer>
            )
        }

        return (
            <SearchDataContext.Consumer>{(context) => (
                <div>
                    <h2 className='headerForContact'> Log In </h2>
                    <form className='contactForm'>
                        <div className='contactFormEmail'>
                            <input placeholder='Name or Email' type="text" value={name} name='name' onChange={this.handleInputChange} />
                        </div>
                        <div className='contactFormEmail'>
                            <input placeholder="Password" type="password" value={password} name='password' onChange={this.handleInputChange} />
                        </div>
                        <div className="submitButtonDiv">
                            <button
                                className="submitButtonContactPage"
                                type="button"
                                value="submit" 
                                onClick={this.sendContactForm.bind(this, context)}
                            > 
                                Submit 
                            </button>
                        </div>
                        <div className="createAccount">
                            <p> Need an account?  <Link to='/CreateAccount'> Sign up </Link></p>
                        </div>
                    </form>
                </div>
            )}
            </SearchDataContext.Consumer>
        )
    }
}

export default LogIn; 
