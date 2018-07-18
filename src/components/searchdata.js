import React, { Component, createContext } from "react";
import axios from 'axios';
import { ifError } from "assert";

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

    handleFilterClick(){
        const {categoryArray, allergenArray} = this.state;
        debugger;
        for (let eachItem in categoryArray){
            categoryArray[eachItem].selected = false;
        }
        for (let eachItem in allergenArray){
            allergenArray[eachItem].strike = false;
        }
        this.setState({
            show: false,
            allergenShow: false,
            categoryShow: false,
            filterID: null,
            categoryID: null,
            allergenArray: [...allergenArray],
            categoryArray: [...categoryArray]
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

        const { data, data: { success, error, name }} = await axios(`/api/snackapi.php?action=userlogin`, {
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
        axios(`/api/snackapi.php?action=userlogout`, {
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