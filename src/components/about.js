import React from 'react';
import '../assets/css/about.css';
import frontend from '../assets/images/tech_logo/front_end.jpeg';
import react from '../assets/images/tech_logo/react.png';
import php from '../assets/images/tech_logo/php.png';
import aws from '../assets/images/tech_logo/aws.png';
import mysql from '../assets/images/tech_logo/mysql.png';


export default () => {
    return (
        <div className="aboutPageContainer">
            <h3 className="aboutHeader">About Snack Seriously</h3>
            <div>
                Snack Seriously was created by six amazing and hard-working developers as a student project, to help others discover snacks to eat.
            </div>
            <div>
                <img className="techlogo" src={frontend}/>
                <img className="techlogo" src={react}/>
                <img className="techlogo" src={php}/>
                <img className="techlogo" src={mysql}/>
                <img className="techlogo" src={aws}/>
            </div>
            <h3 className="aboutHeader">Snack Disclaimer</h3>
            <div>Snack Seriously CANNOT guarantee the the validity of the information found on snackseriously.com.  Please check products and ingredients before purchasing.</div>
            <h3 className="aboutHeader">Amazon Affiliate Disclosure</h3>
            <div>Snack Seriously is a participant in the Amazon Services LLS Associates Program, an affiliate advertising program designed to provide a means for website owners to earn advertising fees by advertising and linking to amazon.com, audible.com, and any other website that may be affiliated with Amazon Service LLC Associates Program.</div>
        </div>
    )
}