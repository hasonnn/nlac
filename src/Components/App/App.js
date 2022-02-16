import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Online from '../Online/Online';
import About from '../AboutUs/AboutUs';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" index element={ <Home /> } />
            <Route path="/online" element={ <Online /> } />
            <Route path="/about-us" element={ <About /> } />
          </Routes> 
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
