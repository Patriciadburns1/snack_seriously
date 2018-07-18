import React, { Component, createContext } from "react";
import axios from 'axios';

export const SearchDataContext = createContext();

class SearchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appstart:false,
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
            logOut: this.logOut.bind(this),
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
        const clickedTabBool = !this.state[clickTab];
        this.setState({
            [clickTab]: clickedTabBool,
            [oppositeTab]: false
        });
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
            appstart: true,
            userLoggedIn: response.success,
            userName: response.name,
        })
    }


    async getUserLogIn(userData = null) {
        if(this.state.appstart && !userData) return;

        if(userData && (!userData.name || !userData.password)){
            throw new Error('Missing user data');
        }

        const dataToSend = userData || { name: '', password: ''};

        const postData = this.formatPostData(dataToSend);

        const { data, data: { success, error, name }} = await axios(`http://localhost:3000/public/api/snackapi.php?action=userlogin`, {
            method: 'POST',
            data: postData,
            withCredentials: true
        });

        if(!success && name){
            throw new Error(error);
        }

        this.dataFromServer(data); 
    }


    logOut() {
        axios(`http://localhost:3000/public/api/snackapi.php?action=userlogout`, {
            method: 'POST',
            withCredentials: true
        }).then( (response)=> {
            this.setState({
                userLoggedIn: false,
                userName: ''
            })
        });
    }


    render() {
        return (
            <SearchDataContext.Provider value={this.state}>
                {this.props.children}
            </SearchDataContext.Provider>
        )
    }
}

export default SearchData;