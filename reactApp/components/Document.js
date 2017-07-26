import React from 'react';
import {
  DefaultDraftBlockRenderMap,
  Editor,
  EditorState,
  RichUtils
} from 'draft-js';
import { Link } from 'react-router-dom';
// Material-UI stuff
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import FontIcon from 'material-ui/FontIcon';
import * as colors from 'material-ui/styles/colors';

// Colorpicker
import { SwatchesPicker } from 'react-color';

// Stuff for left, right, and center text alignments
import { Map } from 'immutable';
const myBlockTypes = DefaultDraftBlockRenderMap.merge(new Map({
  'center': {
    element: 'center'
  }
}));

class Document extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      inlineStyles: {}
    };
  }

  onChange(editorState) {
    this.setState({
      editorState: editorState
    });
  }

  toggleFormat(e, style, block) {
    e.preventDefault();
    if (block) {
      console.log('flag');
      console.log(style);
      this.setState({editorState: RichUtils.toggleBlockType(this.state.editorState, style)});
    } else {
      this.setState({editorState: RichUtils.toggleInlineStyle(this.state.editorState, style)});
    }

  }

  // -------------------------------------------------------------------------------------
  // Function that makes the buttons
  // -------------------------------------------------------------------------------------

  formatButton({icon, style, block}) {
    return (
      <RaisedButton
        backgroundColor={this.state.editorState.getCurrentInlineStyle().has(style) ?
          colors.teal700 : colors.teal200
        }
        icon={<FontIcon className="material-icons">{icon}</FontIcon>}
        // Why can't I have in the argument for the func?
        onMouseDown={(e) => this.toggleFormat(e, style, block)}
      />
    );
  }

  // -------------------------------------------------------------------------------------
  // Colorpicker
  // -------------------------------------------------------------------------------------

  openColorPicker(e) {
    this.setState({
      colorPickerOpen: true,
      colorPickerButton: e.target
    });
  }

  closeColorPicker(e) {
    this.setState({
      colorPickerOpen: false
    });
  }

  formatColor(color) {
    console.log('color = ', color);
    var newInlineStyles = Object.assign(
      {},
      this.state.inlineStyles,
      {
        [color.hex] : {
          color: color.hex
        }
      }
    );
    this.setState({
      inlineStyles: newInlineStyles,
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, color.hex)
    });
    console.log(this.state);
  }

  colorPicker() {
    return (
      <div style={{display: 'inline-block'}}>
        <RaisedButton
          backgroundColor={colors.teal200}
          onTouchTap={this.handleTouchTap}
          label="Select a color"
          onClick={this.openColorPicker.bind(this)}
        />
        <Popover
          open={this.state.colorPickerOpen}
          anchorEl={this.state.colorPickerButton}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.closeColorPicker.bind(this)}
          animation={PopoverAnimationVertical}
        >
        <SwatchesPicker onChangeComplete={this.formatColor.bind(this)}/>
        </Popover>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <div className='toolbar'>
          {this.formatButton({icon: 'format_bold', style: 'BOLD'})}
          {this.formatButton({icon: 'format_italics', style: 'ITALIC'})}
          {this.formatButton({icon: 'format_underlined', style: 'UNDERLINE'})}
          {this.colorPicker()}
          {this.formatButton({icon: 'format_list_numbered', style: 'ordered-list-item', block: true})}
          {this.formatButton({icon: 'list', style: 'unordered-list-item', block: true})}
          {this.formatButton({icon: 'format_align_left', style: 'ordered-list-item', block: true})}
          {this.formatButton({icon: 'format_align_center', style: 'center', block: true})}
          {this.formatButton({icon: 'format_align_right', style: 'ordered-list-item', block: true})}
        </div>
        <Editor
          ref="editor"
          blockRenderMap={myBlockTypes}
          editorState={this.state.editorState} onChange={this.onChange.bind(this)}
          customStyleMap={this.state.inlineStyles}
        />
      </div>
    );
  }
}

export default Document;
