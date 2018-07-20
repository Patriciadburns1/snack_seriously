import React, {Component, Fragment} from 'react';
import '../../assets/css/filters.css';



class Section extends Component {
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
        const {peanut} = this.state

        const { filterItems } = this.props.currentSection;
        // const Items = filterItems.map(function(item, index) {
        //     return <Item key={index} image={item} label={item} />
        // })



        // const {allergens} = FilterIcons.filters;
        // const allergensicons = allergens.map(function(allergenicons, index){
        //     return <img key={index} src={allergenicons} />
        // });
        return (
            <Fragment>
                {/* <div className={visible ? "filterMenu " : "filterMenu active"} onClick={this.toggleMenu}>{this.props.currentSection }</div>
                <div className={visible ? "filterPanel active" : "filterPanel"}>
         */}
        {/* ALLERGENS */}
                {/* <div className="allergyPageContainer"> 
                    <h4 className="allergyTitle"> Select all allergens to avoid </h4> 
                    <div className="allergyContainer">
                        <div className="allergyItem" >
                            <img className="allergyImage" src={Peanuts}/> 
                        </div> 
                        <div className="allergyItem">
                            <img className="allergyImage" src={Dairy}/> 
                        </div> 
                        <div className="allergyItem">
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
                        </div>
                    </div>
                </div>  */}

        {/* CATEGORIES */}
                {/* <div className='categoryPageContainer'>
                    <h4 className='categoryTitle'>Pick a snack category</h4>
                    <div className='categoryContainer'> */}
                        {/* { Items } */}
                        {/* <div className='categoryItem'>
                            <img className='categoryImage' src={popcornpretzel}/>
                            <p className='categoryLabel'>Popcorn &amp; Pretzels</p>
                        </div>
                        <div className='categoryItem'>
                            <img className='categoryImage' src={meat}/>
                            <p className='categoryLabel'>Jerky &amp; Rinds</p>
                        </div>
                        <div className='categoryItem'>
                                <img className='categoryImage' src={chipscrackers}/>
                                <p className='categoryLabel'>Chips &amp; Crackers</p>
                        </div>
                        <div className='categoryItem'>
                            <img className='categoryImage' src={bar}/>
                            <p className='categoryLabel'>Snack Bars</p>
                        </div>
                        <div className='categoryItem'>
                            <img className='categoryImage' src={nutsdriedfruit}/>
                            <p className='categoryLabel'>Nuts &amp; Dried Fruit</p>
                        </div>
                        <div className='categoryItem'>
                            <img className='categoryImage' src={candychocolate}/>
                            <p className='categoryLabel'>Candy &amp; Chocolate</p>
                        </div> */}
                    {/* </div> */}
                {/* </div>
        
                    <div className="plus"></div> */}
                {/* </div> */}
            </Fragment>
        )
    }
}

export default Section;
