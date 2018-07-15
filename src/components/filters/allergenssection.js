import React, { Component, Fragment } from 'react';
import AllergenIcon from './allergenIcon.js'
import { SearchDataContext } from '../searchdata';


class Allergens extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     allergenArray: [{
        //         name: "peanuts",
        //         strike: false
        //     }, {
        //         name: "dairy",
        //         strike: false
        //     }, {
        //         name: "egg",
        //         strike: false
        //     }, {
        //         name: "corn",
        //         strike: false
        //     }, {
        //         name: "nuts",
        //         strike: false
        //     }, {
        //         name: "soy",
        //         strike: false
        //     }, {
        //         name: "wheat",
        //         strike: false
        //     }, {
        //         name: "sugar",
        //         strike: false
        //     },]
        // }

        // this.handleAllergenClick = this.handleAllergenClick.bind(this);
                // this.toggleMenu = this.toggleMenu.bind(this);

    }

    // toggleMenu() {
        // event.stopPropagation();
        // const { visible } = this.state;
        // this.setState({
        //     visible: !visible
        // });
    // }


    // handleAllergenClick(index) {
    //     const {allergenArray} = this.state;
    //     const newArray = [...allergenArray];
    //     newArray[index].strike = !newArray[index].strike;
    //     this.setState({
    //         allergenArray: newArray,
    //         allergenIndex: index
    //     });
    // }

    renderItems(context){
        const { allergenArray } = context;
        const Items = allergenArray.map((item, index) => {
            return (
                <AllergenIcon key={index}  clickHandler={()=>{context.handleAllergenClick(index)}} img={require(`./allergenicons/${item.name}.png`)} strike={item.strike} />
                )
            });

        return( 
            <div className={context.show ? "filterPanel active" : "filterPanel"}>
                    <div className="allergyPageContainer">
                        <h4 className="allergyTitle"> Select all allergens to avoid </h4>
                        <div className="allergyContainer">
                            {Items}
                        </div>
                    </div>
                </div>
        );  
    }

    render() {
        // const { allergenArray } = context;

        // const Items = allergenArray.map((item, index) => {
        //     return (
        //         <AllergenIcon key={index} indexnum={index} clickHandler={()=>{this.handleAllergenClick(index)}} img={require(`./allergenicons/${context.allergenArray.name}.png`)} strike={context.allergenArray.strike} />
        //     )
        // });

        // return <SearchDataContext.Consumer>{(context) => (
            return  (
                <SearchDataContext.Consumer>
                    {/* <Fragment> */}
                        {/* <div className={visible ? "filterMenu " : "filterMenu active"} onClick={this.toggleMenu}>Allergens</div> */}
                        {/* <div className={this.props.visible ? "filterPanel active" : "filterPanel"}> */}
                        {/* <div className={context.visible ? "filterPanel active" : "filterPanel"}>
                            <div className="allergyPageContainer">
                                <h4 className="allergyTitle"> Select all allergens to avoid </h4>
                                <div className="allergyContainer">
                                    {Items}
                                </div>
                            </div>
                        </div> */}
                        {this.renderItems}
                    {/* </Fragment> */}
            </SearchDataContext.Consumer> )
    }
}

export default Allergens;
