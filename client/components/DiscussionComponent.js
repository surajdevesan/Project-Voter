import React from 'react';
import ProjectDetails from './ProjectDetailsComponenet';
import ChatList from './ChatListComponent';
import PostChat from '../containers/PostChatContainer';
export default class Discussion extends React.Component {
  render() {
    return (
      <div>
        <ProjectDetails />
        <ChatList />
        <PostChat />
      </div>
    );

  }
}
