import React, {Component, createContext} from "react";
import axios from 'axios';

export const SearchDataContext  = createContext();

class SearchData extends Component{
   constructor(props){
       super(props);
       this.state={
           userInput: "",
           updateTermValue: this.updateTermValue.bind(this),
            show: false,
            allergenShow: false,
            categoryShow: false,
            filterID: null,
            categoryID: null,
            toggleAllFilter: this.toggleAllFilter.bind(this),
            toggleFilters: this.toggleFilters.bind(this),
            allergenArray: [{
                name: "peanuts",
                strike: false
            }, {
                name: "dairy",
                strike: false
            }, {
                name: "egg",
                strike: false
            }, {
                name: "corn",
                strike: false
            }, {
                name: "nuts",
                strike: false
            }, {
                name: "soy",
                strike: false
            }, {
                name: "wheat",
                strike: false
            }, {
                name: "sugar",
                strike: false
            },],
            handleAllergenClick: this.handleAllergenClick.bind(this),
            handleCategoryClick: this.handleCategoryClick.bind(this),        
       }
   }

   updateTermValue(newTerm){
       this.setState({
           userInput: newTerm
       });
   }
  
   toggleAllFilter() {
        const{show} = this.state;
        this.setState({
            show:!show
        });
    }

    toggleFilters( clickTab, oppositeTab) {
        //clickTab is name of tab clicked
        //oppositeTab is thee other tab not in use
        const clickedTabBool = !this.state[clickTab];
        //set key and value 
        //[clickTab] is replaced with string of clickedTab and the value is opposite of original value
        //set [oppositeTab] to false since no longer in use. 
        this.setState({
            [clickTab]:clickedTabBool,
            [oppositeTab]:false
        });
        console.log("Toggle filter,", this.state);

    }

    handleAllergenClick(index) {
        const {allergenArray} = this.state;
        const newArray = [...allergenArray];
        newArray[index].strike = !newArray[index].strike;

        this.setState({
            allergenArray: newArray,
            filterID: index
        });
    }

    handleCategoryClick(index){
        this.setState({
            categoryID: index
        });
    }

   render(){
       return(
           <SearchDataContext.Provider value={this.state}>
               {this.props.children}
           </SearchDataContext.Provider>  
       )
   }
}

export default SearchData;