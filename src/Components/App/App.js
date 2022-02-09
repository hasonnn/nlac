import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from '../Navbar/Navbar';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" index element={ <Home /> } />
          </Routes> 
        </Router>
      </>
    )
  }
}

export default App;
