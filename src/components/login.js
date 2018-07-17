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
        console.log("name", name, "value", value);
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

    sendContactForm() {
        const { form } = this.state;
        const data = this.formatPostData(form);

        //localhost:8000/public/api/snackapi.php?action=userlogin
        //http://api.snackseriously.com/snackapi.php?action=userlogin
        // axios.post(`http://localhost:8000/public/api/snackapi.php?action=userlogin`,data).then(function(response){
        //     console.log("server call Success", response); 
        // });

        axios(`http://localhost:3000/public/api/snackapi.php?action=userlogin`, {
            method: 'POST',
            data: data,
            withCredentials: true
        }).then(function (response) {
            console.log("you have logged in!", response);
        });
    }
    
    renderName(){
        let userName = this.state.userName;  
        console.log("username", userName); 
    }


    render() {
        console.log(this.state.userName); 
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
                <div>
                <h2 className='headerForContact'> Log In </h2>
                <form className='contactForm'>
                    <div className='contactFormEmail'>
                        <input placeholder='Name or Email' type="text" value={name} name='name' onChange={this.handleInputChange} />
                    </div>
                    <div className='contactFormEmail'>
                        <input placeholder="Password" type="text" value={password} name='password' onChange={this.handleInputChange} />
                    </div>
                    <div className="submitButtonDiv">
                        <Link to='/UserFavorites'> <button className="submitButtonContactPage" type="submit" value="submit" onClick={this.sendContactForm.bind(this)}> Submit </button> </Link>
                    </div>
                    <div className="createAccount">
                        <p> Need an account?  <Link to='/CreateAccount'> Sign up </Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default LogIn; 
