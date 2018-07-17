import React, { Component, createContext } from "react";
import axios from 'axios';

export const SearchDataContext = createContext();

class SearchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            userLoggedIn: false,
            userName: '',
            updateTermValue: this.updateTermValue.bind(this),
            show: false,
            allergenShow: false,
            categoryShow: false,
            filterID: null,
            categoryID: null,
            toggleAllFilter: this.toggleAllFilter.bind(this),
            toggleFilters: this.toggleFilters.bind(this),
            getUserLogIn: this.getUserLogIn.bind(this),
            dataFromServer: this.dataFromServer.bind(this),
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

    updateTermValue(newTerm) {
        this.setState({
            userInput: newTerm
        });
    }

    toggleAllFilter() {
        const { show } = this.state;
        this.setState({
            show: !show
        });
    }

    toggleFilters(clickTab, oppositeTab) {
        //clickTab is name of tab clicked
        //oppositeTab is thee other tab not in use
        const clickedTabBool = !this.state[clickTab];
        //set key and value 
        //[clickTab] is replaced with string of clickedTab and the value is opposite of original value
        //set [oppositeTab] to false since no longer in use. 
        this.setState({
            [clickTab]: clickedTabBool,
            [oppositeTab]: false
        });
        console.log("Toggle filter,", this.state);

    }

    handleAllergenClick(index) {
        const { allergenArray } = this.state;
        const newArray = [...allergenArray];
        newArray[index].strike = !newArray[index].strike;

        this.setState({
            allergenArray: newArray,
            filterID: index
        });
    }

    handleCategoryClick(index) {
        this.setState({
            categoryID: index
        });
    }

    formatPostData(data) {
        const params = new URLSearchParams();

        for (let [k, v] of Object.entries(data)) {
            params.append(k, v);
        }

        return params;
    }

    dataFromServer(response) {
        this.setState({
            userLoggedIn: true,
            userName: response.data.username,
        })
        console.log("data from server is being called"); 
    }

    // user LOG IN FUNCTION TO MAKE AXIOS CALL 
    getUserLogIn() {
        // this needs to be fixed / bandaid 
        if(this.state.userLoggedIn) return;

        console.log('this is axios call on login');
        const data = this.formatPostData({
            name: '',
            password: ''
        });
        axios(`http://localhost:3000/public/api/snackapi.php?action=userlogin`, {
            method: 'POST',
            data: data,
            withCredentials: true
        }).then( (response) => {
            console.log("you have logged in!", response);
            this.dataFromServer(response); 
        });
    }

    render() {
        console.log('STATE:', this.state);
        return (
            <SearchDataContext.Provider value={this.state}>
                {this.props.children}
            </SearchDataContext.Provider>
        )
    }
}

export default SearchData;