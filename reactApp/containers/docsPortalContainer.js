import React from 'react';
import {Link, Route} from 'react-router-dom';



class DocsPortal extends React.Component {
  render() {
    return (
      <div>
          <h1>MOQ Portal </h1>
          <form>
                 <input type="text" name="createDocumentText"/>
                 <input type="submit" name="submitDocumentText"/>
          </form>
          {/* <Route exact={true} path="/" component={GameContainer}/> */}
      </div>
    );
  }
}





export default DocsPortal;
