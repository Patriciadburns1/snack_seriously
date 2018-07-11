import React from 'react';
import { Route } from 'react-router-dom'; 
import Nav from './nav/nav';
import Homepage from './homepage';
import MultipleResults from './multipleresultspage';
import SingleResult from './singleresultpage/singleresult';
import About from './about';
import Contact from './contact';

import Filters from './filters';
import CategoryHome from './categoryhome';

const App = () => (
        <div>
            {/* <Filters /> */}
            <Nav/>
             {/*<CategoryHome />*/}
            <Route exact path='/' component= {Homepage}/>
            <Route path='/search/:term?' component= {Homepage}/>
            <Route path='/search/:term/MultipleResults/?' component={MultipleResults}/>
            <Route path='/MultipleResults/:term?' component={MultipleResults}/>
            <Route path='/SingleResult/:product_id' component={SingleResult}/>
            <Route path='/About' component={About}/>
            <Route path='/Contact' component={Contact}/>
        </div> 

);

export default App;
