import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import HandleNinjas from './components/HandleNinjas';
import Post from './components/Post';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavigationBar />
          {/* <Switch /> component helps stops rendering routes once a matching route is found it won't check routes next to matched one */}
          <Switch>
            {/* By default router props are only assigned to components defined as prop to <Route /> component to assign router props to other components we need to use a higher order component of react router named withRouter (see in <NavigationBar /> component) */}
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/ninjas" component={HandleNinjas}/>
            {/* Dynamic routes */}
            <Route path="/:post_id" component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
