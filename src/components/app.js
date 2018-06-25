import React from 'react';
import AllergenPage from './allergenPage.js'



import Nav from './nav';
import Search from './searchbar';
import '../assets/css/searchbar.css';
import Categories from './categoriespage';
import SavorySweet from './savorysweet';


const App = () => (
    <div>
        <Nav />

        <AllergenPage/> 

{/*//         <Search/>*/}
        {/* <Categories /> */}
             <SavorySweet />
    </div>
);

export default App;
