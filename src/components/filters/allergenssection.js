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
            visible: props.visible,
            strikethrough: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleAllergenClick = this.handleAllergenClick.bind(this);
    }

    toggleMenu() {
        event.stopPropagation();
        const {visible} = this.state;
        this.setState({
            visible: !visible
        });
    }

    componentDidMount() {
        // var foo = document.querySelector("img");
        // foo.addEventListener("click", this.handleAllergenClick);
    }

    handleAllergenClick(event) {
        event.stopPropagation();
        console.log("The state is", this.state);
        console.log("Event: ", event);
        console.log("Current target: ", event.currentTarget);
        let strikethrough = this.state.strikethrough;
        let value = event.target.attributes.value.nodeValue;
        this.setState({
            strikethrough: !strikethrough,
        });  
        // this.props.history.push( '/search/'+value);
        //need to pass value to url
        console.log("the value is: ", value);

    }

    render() {
        const {visible, strikethrough} = this.state;
        const categoryArray = ["peanuts", "dairy", "egg", "corn", "nuts", "soy", "wheat", "sugar"];
        const Items = categoryArray.map((item, index) => {
            return (
                <div key={index} className="allergyItem" onClick={this.handleAllergenClick}>
                    <img  src={require(`./allergenicons/${item}.png`)}  className={strikethrough ? "allergyImage strike" : "allergyImage"}  value={item}/>
                </div>
            )
        }); 

        return (
            <Fragment>
                {/* <div className={visible ? "filterMenu " : "filterMenu active"} onClick={this.toggleMenu}>Allergens</div> */}
                <div className={this.props.visible ? "filterPanel active" : "filterPanel"}>
        
                <div className="allergyPageContainer"> 
                    <h4 className="allergyTitle"> Select all allergens to avoid </h4> 
                    <div className="allergyContainer">
                        {Items}
                    </div>
                </div>


        
                    <div className="plus"></div>
                </div>
            </Fragment>
        )
    }
}

export default Allergens;
