import React from 'react';
import { Switch, Route } from 'react-router';
import Links from './Links';
//still need to change
import Document from './Document';
import Register from './Register';

// In the Switch below, we will have to generate a unique path for each document using a map. We also have to figure out how to pass the unique info for each document when we render.
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Register} />
          <Route exact path='/Home' render={(userid) => <Links id={userid} />} />
          <Route exact path='/Document1' component={Document} />
        </Switch>
      </div>
    );
  }
}

export default Home;
