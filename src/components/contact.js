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
    
        axios.post(`/api/contactMailer/mail_handler.php`,data).then(function(response){
            console.log("server has sent email", response); 
        });
    }


    render() {
        const{name, email, body, subject } = this.state.form; 
        return (     
            <div> 
            <h2 className='headerForContact'> Contact Snack Seriously </h2> 
           <form className='contactForm'> 
                <div className='contactFormEmail'> 
                     <input placeholder='Name' type="text" value={name} name='name' onChange={this.handleInputChange}/>
                </div> 
                <div className='contactFormEmail'> 
                    <input placeholder="Email" type="text" value={email} name='email' onChange={this.handleInputChange} /> 
                </div>
                <div className='contactFormEmail'  > 
                    <input placeholder="Subject" type="text" name="subject" onChange={this.handleInputChange}/>
                </div>
                <div className='contactFormEmail'> 
                    <input placeholder='Message' className='textArea' name="body" name="body" onChange={this.handleInputChange} ></input > 
                </div> 
                <div className="submitButtonDiv"> 
                <button className="submitButtonContactPage"  type="submit" value="submit" onClick={this.sendContactForm.bind(this)}> Submit </button>
                </div> 
           </form> 
           </div> 
        )
    }
}

export default Contact; 
