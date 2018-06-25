import React, {Component} from 'react'; 
import Egg from '../assets/images/egg.png'; 
import Noeggs from '../assets/images/no-eggs.png'; 
import './allergenPage.css'; 
import Preservatives from '../assets/images/preservatives.png'; 
import Transfat from '../assets/images/transfat.png'; 
import Wheat from '../assets/images/wheat.png'; 
import Soy from '../assets/images/soy.png'; 
import Sugar from '../assets/images/sugar.png'; 
import Nuts from '../assets/images/nuts.png'; 
import Corn from '../assets/images/corn.png'; 
import Peanuts from '../assets/images/peanuts.png'; 
import ArtificialColors from '../assets/images/artificialColors.png'; 




class Allergen extends Component{
    constructor(props){
        super(props);
        this.state={
            image: '',
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
            <div className="mainAllergenDiv"> <h1 className="header"> Allergen page </h1> 
               <div className="grid-container">
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
                   <div className="allergyImage">
                   </div>
               </div>
               <div className="footerButtons">
               <div type='button' className='btnStyle btnNormal'>Home</div>
               <div type='button' className='btnStyle btnNormal'>Next</div>
               </div> 
            </div>    
        )
    }
}    


export default Allergen;  