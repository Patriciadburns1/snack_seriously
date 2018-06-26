import React from 'react';
import AllergenPage from './allergenpage.js'
import Nav from './nav';
import Home from './home';
import Search from './searchbar';
import Categories from './categoriespage';
import SavorySweet from './savorysweet';
import Intro from './introsnackquiz';
import Searchresults from './multipleresultspage';
import { Route } from 'react-router-dom'; 
import Menu from './menu';
import SingleResult from './singleresult';




const App = () => (
  
        <div>
            <Nav/>
            <Route exact path='/' component= {Home}/>
            <Route path='/Search' component={Search}/>
            <Route path='/AllergenPage' component={AllergenPage}/> 
            <Route path='/Categories' component={Categories}/>
            <Route path='/SavorySweet'component={SavorySweet}/> 
            <Route path='/IntroSnackQuiz'component={Intro}/> 

        </div>

);

export default App;
