import React from 'react';
import AllergenPage from './allergenpage.js'
import Nav from './nav';
import Home from './home';
import Search from './searchbar';
import Categories from './categoriespage';
import SavorySweet from './savorysweet';
import Intro from './introsnackquiz';
import { Route } from 'react-router-dom'; 
import Menu from './menu';
import MultipleResult from './multipleresultspage';
import SingleResult from './singleresult';

const App = () => (
  
        <div>
            <Nav/>
            <Home />
            <Home />

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

);

export default App;
