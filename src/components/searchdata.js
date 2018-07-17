import React, {Component, createContext} from "react";
import axios from 'axios';
import { ifError } from "assert";

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
            categoryArray: [{
                name: "Popcorn & Pretzels",
                image: "popcornpretzel",
                selected: false
            }, {
                name: "Chips & Crisps",
                image: "chipscrackers",
                selected: false
            }, {
                name: "Nuts, Seeds & Dried Fruit",
                image: "nutsdriedfruit",
                selected: false
            }, {
                name: "Bars",
                image: "bar",
                selected: false
            }, {
                name: "Cookies",
                image: "meat",
                selected: false
            }, {
                name: "Chocolate",
                image: "candychocolate",
                selected: false
            }]   
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

    }

    handleAllergenClick(index) {
        let {allergenArray, filterID} = this.state;
        allergenArray[index].strike = !allergenArray[index].strike;
        if (allergenArray[index].strike){
            if (filterID == null){
                filterID = filterID + (index+1);
            } else {
                filterID = filterID + ','+ (index+1);
            }
        } else {
            let checkarray = filterID.split(',');
            let allergenIndex = checkarray.indexOf(''+(index+1));
            checkarray.splice(allergenIndex,1)
            filterID = checkarray.join(',');
        }
        
        this.setState({
            allergenArray: [...allergenArray],
            filterID: filterID
        });

    }

    handleCategoryClick(index){
        const {categoryArray} = this.state;
        for (let eachItem in categoryArray){
            categoryArray[eachItem].selected = false;
        }
        categoryArray[index].selected = !categoryArray[index].selected;
        this.setState({
            categoryID: index+1,
            categoryArray: [...categoryArray]
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