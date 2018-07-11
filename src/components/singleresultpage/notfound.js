import React from 'react'; 
import '../../assets/css/homepage.css';
import { Link } from 'react-router-dom';


export default ()=> {
    return(
        <div> 
        <div className="pageNotFound"> Page not found </div> 
            <Link to='/'> <div className="returnHomePage"> Click here to return to homepage </div> </Link> 
        </div> 
    )
}