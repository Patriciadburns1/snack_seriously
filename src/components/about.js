import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/about.css';


export default () =>{
    return(
        <div>
            <Link to="/About">
                <div className="about">
                    We are SNACKING SERIOUSLY!
                </div>
            </Link>
            <div className="grid-container">
                <div className="item1">
                    <h2>Vikki Okamura</h2>
                    <p>"Lord and Tyrant"</p>
                    <a href="https://github.com/vokamura" target="_blank">Vikki's Github</a>
                    <br></br>
                    <a href="http://www.vikkiokamura.com" target="_blank">Portfolio</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/vikki-okamura/" target="_blank">Linkedin</a>
                </div>
                <div className="item2">
                    <h2>Patricia Burns</h2>
                    <p>"P.Burns"</p>
                    <a href="https://github.com/Patriciadburns1" target="_blank">Patricia's Github</a>
                    <br></br>
                    <a href="http://www.codelikeagirlpatriciaburns.com" target="_blank">Portfolio</a>
                    <br></br>
                    <a href="https://https://www.linkedin.com/in/patricia-burns-aa62b616/" target="_blank">LinkedIn</a>
                </div>
                <div className="item3">
                    <h2>Peter Nguyen</h2>
                    <p>"Evil Genius"</p>
                    <a href="https://github.com/P-nguyen" target="_blank">Peter's Github</a>
                    <br></br>
                    <a href="http://peteranguyen.com" target="_blank">Portfolio</a>
                    <br></br>
                    <a href="https://https://www.linkedin.com/in/peter-nguyen-22b98325/" target="_blank">LinkedIn</a>

                </div>
                <div className="item4">
                    <h2>James Wang</h2>
                    <p>"Negative Nancy"</p>
                    <a href="https://github.com/jamesnewking" target="_blank">James's Github</a>
                    <br></br>
                    <a href="http://jameswww.com" target="_blank">Portfolio</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/james-w/" target="_blank">Linkedin</a>

                </div>
                <div className="item5">
                    <h2>Jeff Lieu</h2>
                    <p>"Thing 1"</p>
                    <a href="https://github.com/jeffreylieu" target="_blank">Jeff's Github</a>
                    <br></br>
                    <a href="http://jefflieu.com" target="_blank">Portfolio</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/jeffrey-lieu-0496518/" target="_blank">LinkedIn</a>
                </div>
                <div className="item6">
                    <h2>Lou Pruitt</h2>
                    <p>"Thing 2"</p>
                    <a href="https://github.com/Chyort" target="_blank">Lou's Github</a>
                    <br></br>
                    <a href="http://www.herbertluispruitt.com" target="_blank">Portfolio</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/herbert-pruitt-1a0764158/" target="_blank">Linkedin</a>
                </div>
            </div>
            <div className="mentors">
                Special thanks to our mentors: <br></br>
                Andy Ong, <br></br>Tim Horist, <br></br>and Randy Gonzalez!!
            </div>
        </div>

    )
}
