import React from 'react';
import '../assets/css/about.css';

export default () => {
    return (
        <div className="aboutPageContainer">
            <h3 className="aboutHeader">About Snack Seriously</h3>
            <div>
                Snack Seriously was created by six amazing and hard-working developers as a student project, to help others discover snacks to eat.
            </div>

            <table>
                <tbody>
                    <tr>
                        <th className="aboutTechHeader">Front-End Tech</th>
                        <th className="aboutTechHeader">Back-End Tech</th>
                    </tr>
                    <tr>
                        <td>ReactJS</td>
                        <td>PHP</td>
                    </tr>
                    <tr>
                        <td>Context API</td>
                        <td>MySQL</td>
                    </tr>
                    <tr>
                        <td>CSS3</td>
                    </tr>
                </tbody>
            </table>
            
            <h3 className="aboutHeader">Snack Disclaimer</h3>
            <div>Snack Seriously is not responsibly for any snacks that is eaten due to any discoveries made on snackseriously.com</div>
            <h3 className="aboutHeader">Amazon Affiliate Disclosure</h3>
            <div>Snack Seriously is a participant in the Amazon Services LLS Associates Program, an affiliate advertising program designed to provide a means for website owners to earn advertising fees by advertising and linking to amazon.com, audible.com, and any other website that may be affiliated with Amazon Service LLC Associates Program.</div>
        </div>
    )
}