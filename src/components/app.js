import React from 'react';
import { Route } from 'react-router-dom'; 
import Nav from './nav/nav';
import Homepage from './homepage';
import MultipleResult from './multipleresultspage';
import SingleResult from './singleresult';
import About from './about';


const App = () => (
        <div>
            <Nav/>
            <Route exact path="/" component= {Homepage}/>
            <Route path="/MultipleResult" component={MultipleResult}/>
            <Route path="/SingleResult" component={SingleResult}/>
            <Route path="/about" component={About}/>
        </div> 

);

export default App;
