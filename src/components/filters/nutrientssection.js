import React, {Component, Fragment} from 'react';

class Nutrients extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        event.stopPropagation();
        const {visible} = this.state;
        this.setState({
            visible: !visible
        });
    }

    addStrikethrough(){
        // console.log("This is the value of this before binding", this);
    }
    render() {
        const {visible} = this.state;
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
             
                <div className={visible ? "filterMenu " : "filterMenu active"} onClick={this.toggleMenu}>Nutrients</div>
                <div className={visible ? "filterPanel active" : "filterPanel"}>


                <div className='nutrientsPageContainer'>
                    <h4 className='nutrientsTitle'>Less than (per single serving)</h4>
                    <div className='nutrientsContainer'>
                        <div className='nutrientsItem'>
                            <p className='nutrientsLabel'>Calories</p>
                            <input />
                        </div>
                        <div className='nutrientsItem'>
                            <p className='nutrientsLabel'>Total Fat</p>
                            <input />
                        </div>
                        <div className='nutrientsItem'>
                            <p className='nutrientsLabel'>Cholesterol</p>
                            <input />
                        </div>
                        <div className='nutrientsItem'>
                            <p className='nutrientsLabel'>Sodium</p>
                            <input />
                        </div>
                        <div className='nutrientsItem'>
                            <p className='nutrientsLabel'>Total Carbohydrates</p>
                            <input />
                        </div>
                        <div className='nutrientsItem'>
                            <p className='nutrientsLabel'>Dietary Fiber</p>
                            <input />
                        </div>
                    </div>
                </div>
        
                   <div className="plus"></div>
                </div> 
            </Fragment>
        )
    }
}

export default Nutrients;
