import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/contact.css';
//import axios from 'axios';
import { SearchDataContext } from './searchdata';


class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCheck:{
                msg: "4-15 characters",
                msgClass: "regularMsg",
                valid: false
            },
            emailCheck:{
                msg: "valid email address",
                msgClass: "regularMsg",
                valid: false
            },
            passwordCheck:{
                msg: "at least 1 letter, 1 number, and at least 8 characters",
                msgClass: "regularMsg",
                valid: false
            },
            submitMsg: "",
            form:{
                username: '',
                email:'',
                password: ''
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const regexUser = /^[a-z0-9_-]{3,15}$/ig;
        const regexEmail = /(.+)@(.+){2,}\.(.+){2,}/;
        const regexPassword = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;

        if(regexUser.test( this.state.form.username)){
            this.setState({
                userCheck : {msg : "valid username",
                            msgClass : "regularMsg",
                            valid: true
                }
            }, this.checkValid);
        } else {
            this.setState({
                userCheck : {msg: "4-15 characters(no special characters)",
                            msgClass : "warning",
                            valid: false
                }
            })
        }

        if(regexEmail.test( this.state.form.email)){
            this.setState({
                emailCheck: {msg : "valid email address",
                            msgClass : "regularMsg",
                            valid: true
                }
            }, this.checkValid);
        } else {
            this.setState({
                emailCheck: {msg : "enter a valid email address",
                            msgClass : "warning",
                            valid: false
                }
            })
        }

        if(regexPassword.test( this.state.form.password)){
            this.setState({
                passwordCheck: {msg: "valid password",
                                msgClass : "regularMsg",
                                valid: true
                }
            }, this.checkValid);
        } else {
            this.setState({
                passwordCheck: {msg: "at least 1 letter, 1 number, and at least 8 characters(no special characters)",
                                msgClass : "warning",
                                valid: false
                }
            })
        }

        const {value, name} = event.target;
        const{form}= this.state; 
        form[name]= value; 
        this.setState({
           form: {...form},
        })  
    }

    formatPostData(data){
        const params = new URLSearchParams();
        for(let [k, v] of Object.entries(data)){
            params.append(k, v);
        }
        return params;
    }

    checkValid(){
        if(this.state.userCheck.valid && this.state.emailCheck.valid && this.state.passwordCheck.valid){
            this.setState({
                submitMsg : ""
            })

        }
    }

    async sendContactForm(context){
        if(this.state.userCheck.valid && this.state.emailCheck.valid && this.state.passwordCheck.valid) {
            const {form} = this.state;
            try {
                await context.sendNewUsertoServer(form);
                this.props.history.push('/');
            } catch (err) {
                console.warn('Did not create a new user');
            }
        } else {
            this.setState({
                submitMsg : "invalid username or email or password"
            })
        }
    }


    render() {
        const{ username, email, password } = this.state.form; 
        

        return(
            <SearchDataContext.Consumer>{(context) => (
                <div> 
                <h2 className='headerForContact'> Create an Account </h2> 
               <form className='contactForm'> 
                    <div className='contactFormEmail'> 
                         <input placeholder='UserName' autoComplete="off" type="text" value={username} name='username' onChange={this.handleInputChange}/>
                    </div>
                    <div className={this.state.userCheck.msgClass}>{this.state.userCheck.msg}</div>

                    <div className='contactFormEmail'> 
                        <input placeholder="Email" type="text" autoComplete="off" value={email} name='email' onChange={this.handleInputChange} /> 
                    </div>
                    <div className={this.state.emailCheck.msgClass}>{this.state.emailCheck.msg}</div>

                    <div className='contactFormEmail'> 
                        <input placeholder="Password" type="password" autoComplete="off" value={password} name='password' onChange={this.handleInputChange} />
                    </div>
                    <div className={this.state.passwordCheck.msgClass}>{this.state.passwordCheck.msg}</div>

                    <div className="submitButtonDiv"> 
                    <button className="submitButtonContactPage"  type="button" value="submit" onClick={this.sendContactForm.bind(this,context)}> Submit </button>
                    </div>
                    <div className="warning">{this.state.submitMsg}</div>
               </form> 
            {/* { !context.userLoggedIn ? context.validUser ? null :<div className="divCheck"> Username or email already in use </div>  :this.props.history.push('/')} */}
               </div> 
    
            )}
            </SearchDataContext.Consumer> 
        )    
    }
}

export default CreateAccount; 


