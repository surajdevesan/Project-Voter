import {List, ListItem} from 'material-ui/List';
import React from 'react';
import chatListClass from './chatList.scss';
import ReactMarkdown from 'react-markdown';
import openSocket from '../utils/socketConnection';
const ChatListComponenet = ({chatList, onChatClick}) => {
  let input = "Hey";
  let socket = openSocket.getSocket();
  socket.on('message', (message) => {
    console.log('@Message recieved', message);
  });
  return(
    <List className='flex-direction'>
      <ListItem
      onClick = {onChatClick}
      primaryText="Suraj"
          secondaryText={
            <ReactMarkdown
            source={input}
          />
          }
          secondaryTextLines={2} >
      </ListItem>
      <ListItem
      primaryText="Suraj"
          secondaryText={
            <p>
            I&apos;ll be in your neig hjhfjdhj jh jdhfjkhjkdsh jkh kjsdh khfkjhsf kjhdsk hkjfh kah ha khfk hakj hkh kdfhhborhood doing errands this weekend. Do you want to grabdsfjsdfjksdajfksadjfklsdjfksadjflksadjflksdjfljasdlfjk brunch?
          </p>
          }
          secondaryTextLines={2} >
      </ListItem>
      <ListItem
      primaryText="Suraj"
          secondaryText={
            <p>
              I&apos;ll be in your neig hjhfjdhj jh jdhfjkhjkdsh jkh kjsdh khfkjhsf kjhdsk hkjfh kah ha khfk hakj hkh kdfhhborhood doing errands this weekend. Do you want to grabdsfjsdfjksdajfksadjfklsdjfksadjflksadjflksdjfljasdlfjk brunch?
            </p>
          }
          secondaryTextLines={2} >
      </ListItem>
      <ListItem
      primaryText="Suraj"
          secondaryText={
            <p>
              I&apos;ll be in your neig hjhfjdhj jh jdhfjkhjkdsh jkh kjsdh khfkjhsf kjhdsk hkjfh kah ha khfk hakj hkh kdfhhborhood doing errands this weekend. Do you want to grabdsfjsdfjksdajfksadjfklsdjfksadjflksadjflksdjfljasdlfjk brunch?
            </p>
          }
          secondaryTextLines={2} >
      </ListItem>
      <ListItem
      primaryText="Suraj"
          secondaryText={
            <p>
              I&apos;ll be in your neig hjhfjdhj jh jdhfjkhjkdsh jkh kjsdh khfkjhsf kjhdsk hkjfh kah ha khfk hakj hkh kdfhhborhood doing errands this weekend. Do you want to grabdsfjsdfjksdajfksadjfklsdjfksadjflksadjflksdjfljasdlfjk brunch?
            </p>
          }
          secondaryTextLines={2} >
      </ListItem>
      <ListItem
      primaryText="Suraj"
          secondaryText={
            <p>
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2} >
      </ListItem>
      <ListItem
      primaryText="Suraj"
          secondaryText={
            <p>
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2} >
      </ListItem>
      <ListItem
      primaryText="Suraj"
          secondaryText={
            <p>
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2} >
      </ListItem>
    </List>

  );
}

export default ChatListComponenet;
