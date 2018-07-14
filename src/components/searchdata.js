import React, {Component, createContext} from "react";


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
            allegenIndex: null,
            filterID: 3,
            categoryID: 1,
            toggleAllFilter: this.toggleAllFilter.bind(this),
            toggleFilters: this.toggleFilters.bind(this)
       }
   }

   updateTermValue(newTerm){
       this.setState({
           userInput: newTerm
       });
   }
  
   toggleAllFilter() {
        //const { show, allergenShow, categoryShow } = this.state;
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

   render(){
       return(
           <SearchDataContext.Provider value={this.state}>
               {this.props.children}
           </SearchDataContext.Provider>  
       )
   }
}

export default SearchData;