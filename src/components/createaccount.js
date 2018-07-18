import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/contact.css';
import axios from 'axios'; 


class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form:{
                username: '',
                email:'',
                password: ''
            }
           
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){    
        const {value, name} = event.target; 
        console.log("name", name, "value", value); 
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

    sendContactForm(){
        const {form} = this.state;
        const data = this.formatPostData(form);
    
        axios(`http://localhost:3000/public/api/snackapi.php?action=usersignup`,{
            method: 'POST', 
            data: data, 
            withCredentials: true
        }).then(function(response){
            console.log("Signup", response); 
        });
        
        this.props.history.push('/');
    }


    render() {
        const{ username, email, password } = this.state.form; 
        return (     
            <div> 
            <h2 className='headerForContact'> Create an Account </h2> 
           <form className='contactForm'> 
                <div className='contactFormEmail'> 
                     <input placeholder='UserName' type="text" value={username} name='username' onChange={this.handleInputChange}/>
                </div> 
                <div className='contactFormEmail'> 
                    <input placeholder="Email" type="text" value={email} name='email' onChange={this.handleInputChange} /> 
                </div>
                <div className='contactFormEmail'> 
                    <input placeholder="Password" type="text" value={password} name='password' onChange={this.handleInputChange} /> 
                </div>
                <div className="submitButtonDiv"> 
                <button className="submitButtonContactPage"  type="button" value="submit" onClick={this.sendContactForm.bind(this)}> Submit </button>
                </div> 
           </form> 
           </div> 
        )
    }
}

export default CreateAccount; 
