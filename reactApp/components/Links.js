import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Document } from './models';
import mongoose from 'mongoose'; 
// We will have to link to each document using a map and the MongoDB ids of each document. 

const Links = () => (
  <div>
    <input type="text" placeholder="Document Name" />
    <input type="submit" value="Create New Document" />
    <nav>
      <ul>
        <li><Link to='/Document1'>Document 1</Link></li>

          {/* Pending quinn's database work   */}
         {Document.find()
          .exec()
          .then((documents) => {
            documents.forEach((document) => {
              <li><Link to={`/${document.name}`}>{document.name}</Link></li>;
            });
          })
        } 
        {/* end pending quinn's database work */}
      </ul>
    </nav>
    <input type="text" placeholder="Paste Document ID" />
    <input type="submit" value="Load Shared Document" />
  </div>
    );

export default Links;