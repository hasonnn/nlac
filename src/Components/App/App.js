import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Online from '../Online/Online';
import About from '../AboutUs/AboutUs';
import Staff from '../Staff/Staff';
import Prayer from '../Ministries/Prayer/Prayer';
import LifeGroup from '../Ministries/LifeGroup/LifeGroup';
import Mission from '../Ministries/Mission/Mission';
import ProjectHope from '../Ministries/ProjectHope/ProjectHope';
import CommunityConnections from '../Ministries/CommunityConnections/CommunityConnections';
import PAWMMM from '../Ministries/PAW-MMM/PAW-MMM';
import Giving from '../Giving/Giving';

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
            <Route path="/staff" element={ <Staff /> } />
            <Route path="/ministry/prayer" element={ <Prayer /> } />
            <Route path="/ministry/life-group" element={ <LifeGroup /> } />
            <Route path="/ministry/missions" element={ <Mission /> } />
            <Route path="/ministry/project-hope" element={ <ProjectHope /> } />
            <Route path="/ministry/community-connections" element={ <CommunityConnections /> } />
            <Route path="/ministry/paw-mmm" element={ <PAWMMM /> } />
            <Route path="/giving" element={ <Giving /> } />
          </Routes> 
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
