import React, {Component} from 'react'; 
import Egg from '../assets/images/allergenicons/egg.png'; 
import '../assets/css/allergenPage.css';
import Preservatives from '../assets/images/allergenicons/preservatives.png'; 
import Transfat from '../assets/images/allergenicons/transfat.png'; 
import Wheat from '../assets/images/allergenicons/wheat.png'; 
import Soy from '../assets/images/allergenicons/soy.png'; 
import Sugar from '../assets/images/allergenicons/sugar.png'; 
import Corn from '../assets/images/allergenicons/corn.png'; 
import Peanuts from '../assets/images/allergenicons/peanuts.png'; 
import ArtificialColors from '../assets/images/allergenicons/artificialColors.png'; 
import { Link } from 'react-router-dom';
// import Strikethrough from '../assets/images/allergenicons/strikethrough.png'; 


class Allergen extends Component{
    constructor(props){
        super(props);
        this.state={
            allergies: {
                egg: false
            }
        }

        this.addStrikethrough = this.addStrikethrough.bind(this);
    }

    addStrikethrough(){
        console.log("This is the value of this before binding", this);
        this.setState({
            allergies: {
                egg: true
            }
        })
    }

    render(){
        const { egg } = this.state.allergies;

        return(
            <div className="mainAllergenDiv"> <h1 className="allergenHeader"> Allergen page </h1> 
               <div className="allergenGridContainer">
                   <div onClick={ this.addStrikethrough } className={egg ? "allergyImage strikethrough" : "allergyImage"}>
                       <img src={Egg}/> 
                   </div> 
                   <div className="allergyImage">
                       <img src={Preservatives}/> 
                   </div> 
                   <div className="allergyImage">
                       <img src={Transfat}/> 
                   </div> 
                   <div className="allergyImage">
                       <img src={Wheat}/>
                   </div> 
                   <div className="allergyImage">
                        <img src={Corn}/>
                   </div>
                   <div className="allergyImage">
                        <img src={Sugar}/>   
                   </div>
                   <div className="allergyImage">
                        <img src={Soy}/>   
                   </div>
                   <div className="allergyImage">
                        <img src={Peanuts}/> 
                   </div>
                   <div className="allergyImage">
                        <img src={ArtificialColors}/>
                   </div>
               </div>
               <div className="footerButtons">
               <Link to='/IntroSnackQuiz'><div type='button' className='btnStyle btnNormal'>&#8592; Back</div></Link>
               <Link to='/Categories'><div type='button' className='btnStyle btnNormal'>Next &#8594;</div></Link>
               </div> 
            </div>    
        )
    }
}    


export default Allergen;  