import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/contact.css';
import axios from 'axios'; 


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form:{
                name: '',
                email: '',
                subject: '',
                body: ''
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
        axios.post(`http://localhost:8000/api/contactMailer/mail_handler.php`,data).then(function(response){
            console.log("server has sent email", response); 
        });
    }


    render() {
        const{name, email, body, subject } = this.state.form; 
        console.log(this.state.form);
        return (
            <div className="contactForm">
            {/* <form onSubmit={this.sendContactForm.bind(this)}>  */}
                <div> 
                <label htmlFor="name"> Name: </label>
                <input type="text" value={name} name='name' onChange={this.handleInputChange}/>
                </div> 
                <div> 
                <label htmlFor="email"> Email: </label> 
                <input type="text" value={email} name='email' onChange={this.handleInputChange} /> 
                </div>
                <div> 
                <label htmlFor="subject"> Subject:  </label> 
                <input type="text" name="subject" onChange={this.handleInputChange}/>
                </div>
                <div> 
                <label htmlFor="body"> Body: </label> 
                <textarea name="body" name="body" onChange={this.handleInputChange} ></textarea> 
                </div> 
                <button type="submit"  value="submit" onClick={this.sendContactForm.bind(this)}> BUTTON </button>
            {/* </form>  */}
            </div>
        )
    }
}

export default Contact; 
