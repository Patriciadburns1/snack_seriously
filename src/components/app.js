import React from 'react';
import AllergenPage from './allergenPage.js'
import Nav from './nav';
import Home from './home';
import Search from './searchbar';
import '../assets/css/searchbar.css';
import Categories from './categoriespage';
import SavorySweet from './savorysweet';
import Intro from './introsnackquiz';
import Searchresults from './multipleresultspage';


const App = () => (
    <div>
        <Nav />
        <Searchresults/>
        {/*<AllergenPage/> */}
        {/*<Search/>*/}
        {/* <Categories /> */}
             {/*<Intro/>*/}
        {/*<Home />*/}
        {/*<SavorySweet />*/}
    </div>
);

export default App;
