import React from 'react';
import Home from './Home';
import { HashRouter } from 'react-router-dom';

const Container = () => (
  <div>
    <HashRouter>
      <Home />
    </HashRouter>
  </div>
); 

export default Container; 