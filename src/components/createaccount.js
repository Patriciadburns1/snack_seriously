import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/contact.css';
import axios from 'axios'; 
import { SearchDataContext } from './searchdata';


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
        //console.log("name", name, "value", value); 
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

    async sendContactForm(context){
        const { form } = this.state;
        try {
            await context.sendNewUsertoServer(form);

            this.props.history.push('/');
        } catch (err){
            console.warn('Did not create a new user');
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
                         <input placeholder='UserName' type="text" value={username} name='username' onChange={this.handleInputChange}/>
                    </div> 
                    <div className='contactFormEmail'> 
                        <input placeholder="Email" type="text" value={email} name='email' onChange={this.handleInputChange} /> 
                    </div>
                    <div className='contactFormEmail'> 
                        <input placeholder="Password" type="text" value={password} name='password' onChange={this.handleInputChange} /> 
                    </div>
                    <div className="submitButtonDiv"> 
                    <button className="submitButtonContactPage"  type="button" value="submit" onClick={this.sendContactForm.bind(this,context)}> Submit </button>
                    </div> 
               </form> 
               </div> 
    
            )}
            </SearchDataContext.Consumer> 
        )    
    }
}

export default CreateAccount; 
