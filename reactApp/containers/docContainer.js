var React = require('react');
import { render } from 'react-dom';
var ReactDOM = require('react-dom');
// import App from './components/App';

class Document extends React.Component {
  render() {
    return (
      <div>
        <h1>Sample Document! </h1>
        <button>
          Save Changes
        </button>
      </div>
    );
  }
}

export default Document;
