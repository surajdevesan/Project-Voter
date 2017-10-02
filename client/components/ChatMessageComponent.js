import React from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardText } from 'material-ui/Card';
import ChatMessageClass from './chatMessage.scss';
import IconButton from 'material-ui/IconButton';
import SendButton from 'material-ui/svg-icons/content/send';
import openSocket from 'socket.io-client';

const sendMessage = () => {
  const socket = openSocket('http://localhost:8000');
  socket.on('timer', timestamp => console.log('@Message reciewved'));  
  socket.emit('subscribeToTimer', 1000);
  
}
const ChatMessage = () => (
  <div className='absolute-position'>
    <TextField
      hintText="Type your message here.."
      multiLine={true}
      style={{width: '85%'}}
      rows={1}
    />
    <IconButton tooltip="SVG Icon">
      <SendButton onClick = {sendMessage} />
    </IconButton>
  </div>
);

export default ChatMessage;
