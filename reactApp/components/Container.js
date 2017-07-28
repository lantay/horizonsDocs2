import React from 'react';
import Router from './Router';
import { HashRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
const Container = () => (
  <div>
    <HashRouter>
      <Router />
    </HashRouter>
  </div>
);

export default Container;
