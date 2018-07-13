import React, {Component, createContext} from "react"; 


export const SearchDataContext  = createContext();

class SearchData extends Component{
    constructor(props){
        super(props);
        this.state={
            userInput: "",
            updateTermValue: (newTerm) => {
                this.setState({
                    userInput: newTerm
                })
            }
        }

        
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