import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { fullWhite } from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/note-add';

const style = {
  margin: 15,
};

class CreateNewPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton
            backgroundColor="#a4c639"
            icon={<ActionAndroid color={fullWhite} style={{ 'margin-top': 6 }} />}
            style={style}
            onClick={this.handleOpen}
          />
          <Dialog
            title="Creating a new Project"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
            Only actions can close this dialog.
        </Dialog>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default CreateNewPoll;
