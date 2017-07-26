import React from 'react'; 
import { Switch, Route, Link } from 'react-router-dom';

// We will have to link to each document using a map and the MongoDB ids of each document. 

const Links = () => (
  <div>
    <nav>
      <ul>
        <li><Link to='/Document1'>Document 1</Link></li>
      </ul>
    </nav>
  </div>
);

export default Links;