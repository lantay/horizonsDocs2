import React from 'react';
import { Link, hashHistory  } from 'react-router';
import axios from 'axios';

// Material UI stuff
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Welcome to the MOQ DOCS Login!',
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    //little confused by this DidMount command
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

  handleUsername (event) {
    this.setState({username: event.target.value});
    console.log('username = ', this.state.username);
  }

  handlePassword (event) {
    this.setState({password: event.target.value});
  }

  loginUser () {
    axios.post('http://localhost:3000/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then((res) => {
      console.log(res.data);
      console.log("you have successfully sent a login request!");
      // this.props.history.push('/Home');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <div>
        <h3>Login </h3>
        <h3>{this.state.greeting}</h3>
        <TextField
          onChange={(event) => this.handleUsername(event)}
          hintText="Enter a username"
        />
        <TextField
          onChange={(event) => this.handlePassword(event)}
          hintText="Enter a password"
        />
        <RaisedButton label="Login" primary={true} onClick={() => this.loginUser()}/>
      </div>
    );
  }
}

export default Login;
