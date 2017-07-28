import React from 'react';
import Home from './Home';
import { HashRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
const Container = () => (
  <div>
    <HashRouter>
      <Register/>
    </HashRouter>
  </div>
);

export default Container;
