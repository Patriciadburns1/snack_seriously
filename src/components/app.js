import React from 'react';
import { Route } from 'react-router-dom'; 
import Nav from './nav/nav';
import Homepage from './homepage';
import AllergenPage from './allergenpage.js'
import Search from './searchbar';
import Categories from './categoriespage';
import SavorySweet from './savorysweet';
import Intro from './introsnackquiz';
import MultipleResult from './multipleresultspage';
import SingleResult from './singleresult';
import Nutritionalfacts from './nutritionalfacts';



const App = () => (
  
        <div>
            <Nav/>
            {/*<Route exact path='/' component= {Home}/>*/}
            {/* <Menu /> */}
            <Homepage />
            {/* <Route exact path='/' component= {Home}/>
            <Route path='/Search' component={Search}/>
            <Route path='/AllergenPage' component={AllergenPage}/> 
            <Route path='/Categories' component={Categories}/>
            <Route path='/SavorySweet'component={SavorySweet}/> 
            <Route path='/IntroSnackQuiz'component={Intro}/> 
            {/*<SingleResult/>*/}
            {/* <Nutritionalfacts/> */}
            {/* <Route path='/MultipleResult' component={MultipleResult}/>
            <Route path='/SingleResult' component={SingleResult}/>
            <Route path='/Menu' component={Menu}/> */}
            
        </div>

);

export default App;
