import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import notificationClass from './notificationDetails.scss';

const NotificationDetailsComponenet = (props) => (
  // <Drawer width={300}
  <div>
    <Subheader> Activity </Subheader>
    <List className="notification-class">
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Show your status"
        secondaryText="Your status is visible to everyone you use with"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
    </List>
    <Divider />
    <Subheader> PR Notification </Subheader>
    <List
      className="notification-class">
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Profile photo"
        secondaryText="Change your Google+ profile photo"
      />
      <ListItem
        primaryText="Show your status"
        secondaryText="Your status is visible to everyone you use with"
      />
    </List>
    <Divider />

  </div>
);

export default NotificationDetailsComponenet;
