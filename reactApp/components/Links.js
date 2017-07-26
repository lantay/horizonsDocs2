import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Document } from './models';
import mongoose from 'mongoose';
import axios from 'axios';import axios from 'axios';

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
      userId: 'string',
    };
  }

  componentDidMount() {
    axios.get('/docslist'), {
      params: {
        userId: this.state.userId
      }
    }
      .then(function (response) {
        this.setState({
          documents: response
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  createDoc(){
    axios.post('/createDoc'), {
      params: {
        userId: this.state.userId
      }
    }
    .then(function (response) {
      axios.get('/edit/:docId'), {
        params: {
          userId: this.state.userId
        }
      }  
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  
  loadDoc(){

  }
  render() {
    return (

      <div>
        <input type="text" placeholder="Document Name" />
        <input type="submit" value="Create New Document" onSubmit={createDoc()}/>
        <nav>
          <ul>
            <li><Link to='/Document1'>Document 1</Link></li>
            {/* map over the documents in the state to get a list of the documents */}
          </ul>
        </nav>
        <input type="text" placeholder="Paste Document ID" />
        <input type="submit" value="Load Shared Document" onSubmit={loadDoc()} />
      </div>
    );

  }
  export default Links;