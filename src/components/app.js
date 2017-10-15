import React from 'react';
import './app.css';
import logo from '../assets/images/logo.svg';
import reactPumpkin from '../assets/images/react-pumpkin.png';
import webs from '../assets/images/web-corner.png';

const App = () => (
    <div>
        <div className="app">
            <img src={reactPumpkin} className="logo rotate"/>
            <h1>Welcome to React</h1>
            <img src={webs} className="webs-r"/>
            <img src={webs} className="webs-l"/>
        </div>
    </div>
);

export default App;
