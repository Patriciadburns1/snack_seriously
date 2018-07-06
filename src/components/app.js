import React from 'react';
import { Route } from 'react-router-dom'; 
import Nav from './nav/nav';
import Homepage from './homepage';
import MultipleResults from './multipleresultspage';
import SingleResult from './singleresultpage/singleresult';
import About from './about';


const App = () => (
        <div>
            <Nav/>
            <Route exact path='/' component= {Homepage}/>
            {/*<Route path='/search/:term?' component= {Homepage}/>*/}
            {/* <Route path='/search/:term/MultipleResults/?' component={MultipleResults}/> */}
            <Route path='/MultipleResults/:term?' component={MultipleResults}/>
            <Route path='/SingleResult' component={SingleResult}/>
            <Route path="/about" component={About}/>
        </div> 

);

export default App;
