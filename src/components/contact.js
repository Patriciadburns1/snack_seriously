import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/contact.css';


export default () =>{
    return(
        <div className="contact">
            {/* <Link to="/Contact"><div className="contact"></div></Link> */}
            <input name="name" placeholder="your name"/><br/>
            <input name="email" placeholder="your email address"/><br/>
            <input name="subject" placeholder="Subject"/><br/>
            <textarea name="body" placeholder="Your message"></textarea><br/>
            <button type="submit" name="submit" value="submit">Send Mail</button>
        </div>

    )
}
