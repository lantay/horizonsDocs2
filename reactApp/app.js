var React = require('react');
import { render } from 'react-dom';
var ReactDOM = require('react-dom');
// import App from './components/App';
import Document from './containers/docContainer';
import DocsPortal from './containers/docsPortalContainer'


/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})


ReactDOM.render(
  <DocsPortal />,
   document.getElementById('root'));
