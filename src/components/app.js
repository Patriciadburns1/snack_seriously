import React from 'react';
import AllergenPage from './allergenpage.js'
import Nav from './nav';
import Home from './home';
import Search from './searchbar';
import '../assets/css/searchbar.css';
import Categories from './categoriespage';
import SavorySweet from './savorysweet';
import { Route } from 'react-router-dom'; 


const App = () => (
  
        <div>
            <Nav />
            <Route exact path='/' component= {Home}/>
            <Route path='/Search' component={Search}/>
            <Route path='/AllergenPage' component={AllergenPage}/> 
            <Route path='/Categories' component={Categories}/>
            <Route path='/SavorySweet'component={SavorySweet}/> 
        </div>

);

export default App;
