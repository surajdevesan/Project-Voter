import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';

const ProjectDetails = (props) => {
  console.log('@heeeee', props)
  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <ListItem
          primaryText="Project Name"
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <IconMenu
          iconButtonElement={
            <IconButton touch={true}>
              <NavigationExpandMoreIcon />
            </IconButton>
          }
        >
          <MenuItem primaryText="More Info" onClick={props.click}/>
        </IconMenu>
      </ToolbarGroup>
    </Toolbar>
  );
}

export default ProjectDetails;

// <div>
//       <AppBar
//       title="Title"
//       iconClassNameRight="muidocs-icon-navigation-expand-more"
//     />
//     {/* <h1 onClick = {props.buttonClick}>Project Name</h1>
//     <RaisedButton onClick={props.click} label="Send" primary={true} /> */}
//     </div>
