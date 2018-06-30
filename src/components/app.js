import React from 'react';
import { Route } from 'react-router-dom'; 
import Nav from './nav/nav';
import Homepage from './homepage';
import MultipleResults from './multipleresultspage';
import SingleResult from './singleresult';
 


const App = () => (
        <div>
            <Nav/>
            <Route exact path='/' component= {Homepage}/>
            <Route path='/MultipleResults' component={MultipleResults}/>
            <Route path='/SingleResult' component={SingleResult}/>
        </div> 

);

export default App;
