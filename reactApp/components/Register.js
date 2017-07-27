import React from 'react';
import { Link, hashHistory  } from 'react-router';
// Axios 
import axios from 'axios';

// Passport stuff. We're just going to use Facebook.
// import passport from 'passport';
// var FacebookStrategy = require('passport-facebook').Strategy;

// Material UI stuff 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import FontIcon from 'material-ui/FontIcon';
// import * as colors from 'material-ui/styles/colors'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: '', 
      username: '', 
      password: ''
    };
  }

  componentDidMount() {
    console.log(this.props.router);
    console.log(this.context.router);
    axios.get('http://localhost:3000/')
    .then((res) => {
      this.setState({greeting: res.data});
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  handleUsernameChange (event) {
    this.setState({username: event.target.value});
    console.log('username = ', this.state.username);
  }

  handlePasswordChange (event) {
    this.setState({password: event.target.value});
  }

  registerUser () {
    axios.post('http://localhost:3000/register', {
      username: this.state.username, 
      password: this.state.password
    })
    .then((res) => {
      console.log(res.data);
      // this.props.history.push('/Home');
    })  
    .catch((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <div>
        <h3>Create an account </h3>
        <h3>{this.state.greeting}</h3>
        <TextField 
          onChange={(event) => this.handleUsernameChange(event)} 
          hintText="Enter a username" 
        />
        <TextField 
          onChange={(event) => this.handlePasswordChange(event)} 
          hintText="Enter a password" 
        />
        <RaisedButton label="Register" primary={true} onClick={() => this.registerUser()}/>
      </div>
    );
  }  
}

export default Register;