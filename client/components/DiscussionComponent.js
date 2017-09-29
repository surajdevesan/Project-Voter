import React from 'react';
import ProjectDetails from './ProjectDetailsComponent';
import ChatList from './ChatListComponent';
import RaisedButton from 'material-ui/RaisedButton';
import PostChat from '../containers/PostChatContainer';
export default class Discussion extends React.Component {
  buttonClick() {
    console.log('@on click');
  }
  render() {
    const style = {
      margin: 12,
    };
    return (
      <div>
        {/* <ProjectDetails /> */}
        {/* <ChatList /> */}
        {/* <PostChat /> */}
        <RaisedButton
          onClick = {this.buttonClick}
          label="Default" style={style} />
      </div>
    );

  }
}
