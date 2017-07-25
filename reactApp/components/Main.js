import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import PageOne from './PageOne.js'; 
import PageTwo from './PageTwo.js'; 
import PageThree from './PageThree.js'; 

const Main = () => (
<main>
  <Switch>
    <Route exact path='/PageOne' component={PageOne}/>
    <Route exact path='/PageTwo' component={PageTwo}/>
    <Route exact path='/PageThree' component={PageThree}/>
  </Switch>
</main>
);

export default Main; 
