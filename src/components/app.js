import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Nav from './nav/nav';
import SearchData, {SearchDataContext} from './searchdata';
import Homepage from './homepage';
import MultipleResults from './multipleresultspage';
import SingleResult from './singleresultpage/singleresult';
import About from './about';
import Contact from './contact';
import Filters from './filters';
import CategoryHome from './categoryhome';
import SearchBar from './searchbar';

class App extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <div>
                <SearchData>
                    <SearchDataContext.Consumer>
                        {(context)=>(
                            <div>
                                <Nav />
                                {/* <SearchBar /> */}
                                <Route path='/' component={SearchBar} />
                                <Route exact path='/' component={Homepage} />
                                <Route path='/search/:term?' component={Homepage} />
                                <Route path='/search/:term/MultipleResults/?' component={MultipleResults} />
                                <Route path='/MultipleResults/:term?' component={MultipleResults} />
                                <Route path='/SingleResult/:product_id' component={SingleResult} />
                                <Route path='/About' component={About} />
                                <Route path='/Contact' component={Contact} />
                            </div>
                        )}
                    </SearchDataContext.Consumer>
                </SearchData>
            </div> 
        )
    }



}

export default App;
