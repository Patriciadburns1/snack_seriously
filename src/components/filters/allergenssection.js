import React, {Component, Fragment} from 'react';
import Peanuts from './allergenicons/peanuts.png'; 
import Dairy from './allergenicons/dairy.png';
import Egg from './allergenicons/egg.png'; 
import Corn from './allergenicons/corn.png'; 
import TreeNuts from './allergenicons/nuts.png'; 
import Soy from './allergenicons/soy.png'; 
import Wheat from './allergenicons/wheat.png'; 
import Sugar from './allergenicons/sugar.png'; 
import Strikethrough from './allergenicons/strikethrough.png'; 

class Allergens extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.addStrikethrough = this.addStrikethrough.bind(this);
        this.handleAllergenClick = this.handleAllergenClick.bind(this);
    }

    toggleMenu() {
        event.stopPropagation();
        const {visible} = this.state;
        this.setState({
            visible: !visible
        });
    }

    addStrikethrough(){
        console.log("Strikethrough: ", this);
    }

    handleAllergenClick(event) {
        console.log("this worked");
        // this.addStrikethrough();
        // console.log(event.target);
        // let value = event.target.value;
        // this.props.history.push( '/search/'+value );
        // this.setState({
        //     userInput: value,
        // })   
    }

    render() {
        const {visible} = this.state;
        
        const array = ["peanuts", "dairy", "egg", "corn", "nuts", "soy", "wheat", "sugar"];
        const Items = array.map(function(item, index) {
            return (
                <div key={index} className="allergyItem" onClick={()=>{this.handleAllergenClick}}>
                    <img  src={require(`./allergenicons/${item}.png`)} className="allergyImage" value={item}/>
                </div>
            )
        }); 

        // const {peanut} = this.state

        // const { filterItems } = this.props.currentSection;
        // const Items = filterItems.map(function(item, index) {
        //     return <Item key={index} image={item} label={item} />
        // })


        // const {allergens} = FilterIcons.filters;
        // const allergensicons = allergens.map(function(allergenicons, index){
        //     return <img key={index} src={allergenicons} />
        // });
        return (
            <Fragment>
                <div className={visible ? "filterMenu " : "filterMenu active"} onClick={this.toggleMenu}>Allergens</div>
                <div className={visible ? "filterPanel active" : "filterPanel"}>
        
                <div className="allergyPageContainer"> 
                    <h4 className="allergyTitle"> Select all allergens to avoid </h4> 
                    <div className="allergyContainer">
                        
                        {Items}
                        {/* <div className="allergyItem" onClick={this.handleAllergenClick}>
                            <img className="allergyImage" src={Peanuts} /> 
                        </div> 
                        <div className="allergyItem" onClick={this.handleAllergenClick}>
                            <img className="allergyImage" src={Dairy}/> 
                        </div> 
                        <div className="allergyItem" onClick={this.handleAllergenClick}>
                            <img className="allergyImage" src={Egg}/> 
                        </div> 
                        <div className="allergyItem">
                            <img className="allergyImage" src={Corn}/>
                        </div> 
                        <div className="allergyItem">
                                <img className="allergyImage" src={TreeNuts}/>
                        </div>
                        <div className="allergyItem">
                                <img className="allergyImage" src={Soy}/>   
                        </div>
                        <div className="allergyItem">
                                <img className="allergyImage" src={Wheat}/>   
                        </div>
                        <div className="allergyItem">
                                <img className="allergyImage" src={Sugar}/> 
                        </div> */}
                    </div>
                </div>


        
                    <div className="plus"></div>
                </div>
            </Fragment>
        )
    }
}

export default Allergens;
