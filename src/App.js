import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import HandleNinjas from './components/HandleNinjas';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavigationBar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/ninjas" component={HandleNinjas}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
