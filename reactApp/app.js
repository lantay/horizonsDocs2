var React = require('react');
var ReactDOM = require('react-dom');
import Container from './components/Container';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// import Draft from '../node_modules/draft-js/dist/Draft.css';
require ('./css/main.css');

// import Welcome from './components/Welcome';
/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})

ReactDOM.render(
  <MuiThemeProvider>
      <div>
        <Container />
      </div>
  </MuiThemeProvider>,
   document.getElementById('root')
);
