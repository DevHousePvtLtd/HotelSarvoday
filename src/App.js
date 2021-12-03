import React, { } from 'react';
import Navigation from './Component/Header/Navigation';
import { Switch, Route } from 'react-router-dom'


import './scss/main.css';
import Footer from './Component/Footer/Footer';
import Home from './Component/UI/Home';
import Gallery from './Component/UI/Gallery';

function App() {



  return (
    <>
      <Navigation />
      <Switch >
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

