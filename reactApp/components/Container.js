import React from 'react';
import Home from './Home';
import { HashRouter } from 'react-router-dom';
import Login from './Login';

const Container = () => (
  <div>
    <HashRouter>
      <Login/>
    </HashRouter>
  </div>
);

export default Container;
