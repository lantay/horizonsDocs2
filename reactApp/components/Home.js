import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Links from './Links.js';
import Document from './Document.js';
import Register from './Register.js';

// In the Switch below, we will have to generate a unique path for each document using a map. We also have to figure out how to pass the unique info for each document when we render. 
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={Register} /> 
          <Route exact path='/Home' component={Links} />
          <Route exact path='/Document1' component={Document} />
        </Switch>
      </div >
    );
  }
}

export default Home;

