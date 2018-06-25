import React from 'react';
import AllergenPage from './allergenPage.js'
import Nav from './nav';
import Home from './home';
import Search from './searchbar';
import '../assets/css/searchbar.css';
import Categories from './categoriespage';
import SavorySweet from './savorysweet';


const App = () => (
    <div>
        <Nav />
        <AllergenPage/> 
        {/*<Search/>*/}
        {/* <Categories /> */}
        {/* <SavorySweet /> */}
        <Home />
        <SavorySweet />
    </div>
);

export default App;
