import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

class Document extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
      <div>
        <Toolbar>
          <RaisedButton label="Bold" primary={true} />
          <RaisedButton label="Italics" primary={true} />
          <RaisedButton label="Underline" primary={true} />
        </Toolbar>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default Document;