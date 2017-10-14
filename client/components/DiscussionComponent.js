import React from 'react';
import ProjectDetails from './ProjectDetailsComponent';
import ChatList from '../containers/ChatListContainer';
import RaisedButton from 'material-ui/RaisedButton';
import PostChat from '../containers/PostChatContainer';
import Divider from 'material-ui/Divider';
import ChatMessage from './ChatMessageComponent';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import NotificationDetails from './NotificationDetailsComponent';
import DiscussionStyle from './discussion.scss';

export default class Discussion extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          open: false
      }
    }
  buttonClick() {
    console.log('@hereeee');
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const style = {
      margin: 12,
    };
    console.log('#render', this.state.open);
    return (
      <div >
        <ProjectDetails />
        <Divider />
        <div className='display'>
        <ChatList />
        {/* <NotificationDetails  />
        <Divider />
        <PostChat /> 
         <RaisedButton
          onClick={this.buttonClick}
          label="Default" style={style} /> 
        <ChatMessage /> */}
        </div>
      </div>
    );

  }
}
