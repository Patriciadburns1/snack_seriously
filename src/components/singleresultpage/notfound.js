import React from 'react'; 
import '../../assets/css/homepage.css';
import { Link } from 'react-router-dom';
import snacker from '../../assets/images/notfound/snacker.gif';
import '../../assets/css/notfound.css';

export default ()=> {
    return(
        <div className="pageNotFoundContainer">
        <div className="pageNotFound">
            <h3 className="notFoundTitle">Page not found</h3>
        </div>
            <img className="snacker" src={snacker} />
            <Link to='/'> <div className="returnHomePage"> Click here to return to homepage </div> </Link>
        </div> 
    )
}