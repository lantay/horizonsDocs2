import React from 'react'; 
import { Link } from 'react-router-dom';

const Links = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/PageOne'>Page One</Link></li>
        <li><Link to='/PageTwo'>Page Two</Link></li>
        <li><Link to='/PageThree'>Page Three</Link></li>
      </ul>
    </nav>  
  </header>
);

export default Links;