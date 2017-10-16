import React from 'react';
import './app.css';
import logo from '../assets/images/logo.svg';
import reactPumpkin from '../assets/images/october-react-logo-glow.png';
import webs from '../assets/images/web-corner.png';
import spider from '../assets/images/spider.png';

const App = () => (
    <div>
        <div className="app">
            <img src={reactPumpkin} className="logo rotate"/>
            <h1>Welcome to React</h1>
            <img src={webs} className="webs-r"/>
            <img src={webs} className="webs-l"/>
            <img src={spider} className="spider shake"/>
        </div>
    </div>
);

export default App;
