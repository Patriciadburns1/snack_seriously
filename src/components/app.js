import React from 'react';
import AllergenPage from './allergenpage.js'
import Nav from './nav';
import Homepage from './homepage';
import Search from './searchbar';
import Categories from './categoriespage';
import SavorySweet from './savorysweet';
import Intro from './introsnackquiz';
import { Route } from 'react-router-dom'; 
import Menu from './menu';
import MultipleResult from './multipleresultspage';
import SingleResult from './singleresult';
import Ingredient from './ingredient'; 

const App = () => (
        <div> 
        <div>
            {/* <Nav/> */}
            {/* <Homepage /> */}
            {/* <Homepage /> */}
            
            {/* <Route exact path='/' component= {Home}/>
            <Route path='/Search' component={Search}/>
            <Route path='/AllergenPage' component={AllergenPage}/> 
            <Route path='/Categories' component={Categories}/>
            <Route path='/SavorySweet'component={SavorySweet}/> 
            <Route path='/IntroSnackQuiz'component={Intro}/> 
            <Route path='/MultipleResult' component={MultipleResult}/>
            <Route path='/SingleResult' component={SingleResult}/>
            <Route path='/Menu' component={Menu}/> */}
            
        </div>
            <div> 
            <Ingredient/> 
            </div>
        </div> 

);

export default App;
