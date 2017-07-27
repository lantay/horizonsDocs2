import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newDocName: '',
      documents: [],
      userId: ''
    };
  }

  componentDidMount() {
    // axios.get('/docslist'), {
    //   params: {
    //     userId: this.state.userId
    //   }
    // }
    // .then(function(response) {
    //   this.setState({
    //     documents: response
    //   });
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
  }
  // -------------------------------------------------------------------------------------
  // Creating a new doc 
  // -------------------------------------------------------------------------------------

  handleNewDocName(event) {
    this.setState({newDocName: event.target.value});
  }

  createDoc() {
    axios.post('http://localhost:3000/createDoc', {
      userId: this.state.userId, 
      docName: this.state.newDocName
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  loadDoc(){

  }

  render() {
    return (
      <div>
        <TextField 
          onChange={(event) => this.handleNewDocName(event)} 
          hintText="Document name" 
        />
        <RaisedButton 
          label = "Create a new document"
          primary= {true}
          onClick = {() => this.createDoc()}
        />
        <nav>
          <ul>
            <li><Link to='/Document1'>Document 1</Link></li>
            {/* map over the documents in the state to get a list of the documents */}
          </ul>
        </nav>
        <input type="text" placeholder="Paste Document ID" />
        <input type="submit" value="Load Shared Document" onSubmit={()=>this.loadDoc()} />
      </div>
    );
  }
}
export default Links;