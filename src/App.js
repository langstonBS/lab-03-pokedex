import React, { Component } from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import './App.css';
import Details from './Details.js';
import Main from './Main.js';
import Header from './Header.js';
import Navbar from './Navbar.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <header>
                    <Header />
                    <Navbar />
                </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Main {...routerProps} />} 
                        />
                        <Route 
                            path="/details" 
                            exact
                            render={(routerProps) => <Details {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}