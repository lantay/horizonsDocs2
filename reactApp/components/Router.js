import React from 'react';
import { Switch, Route } from 'react-router';
import Portal from './Portal';
import Document from './Document';
import Register from './Register';

// In the Switch below, we will have to generate a unique path for each document using a map. We also have to figure out how to pass the unique info for each document when we render. 
class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '597b734955a3ae0359e9d4bf', 
      docs: []
    };
  }

  setUser(userId) {
    this.setState({userId: userId});
  }

  setDocs(docs) {
    this.setState({docs: docs});
    console.log(this.state.docs);
  }

  render() {
    return (
      <div>
        <Switch>
          {/* <Route exact path='/Login' component={Login} /> */}
          <Route exact path='/Register' 
            render={() => 
              <Register 
                setUser={(userId) => this.setUser(userId)} 
              />
            } 
          /> 
          <Route exact path='/' render={() => 
            <Portal 
              userId={this.state.userId} 
              setDocs={(docs) => this.setDocs(docs)}
            />} 
          />
          {this.state.docs.map(doc => 
            <Route key={doc._id} exact path={'/'+doc._id} render={() => 
              <Document docId={doc._id} />} 
            />
          )}
          <Route exact path='/Document1' component={Document} />
        </Switch>
      </div>
    );
  }
}

export default Router;

