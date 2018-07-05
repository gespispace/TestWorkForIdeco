import React from 'react';
import ButtomFilter from '../containers/FilterTable';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 240
  },
  toolbar: theme.mixins.toolbar
});

const DrawerV = props => (
  <Drawer
    variant="permanent"
    classes={{
      paper: props.classes.drawerPaper
    }}
  >
    <div className={props.classes.toolbar} />
    <List component="nav">
      <ButtomFilter filter="SHOW_ALL" value="All" />
      <ButtomFilter filter="SHOW_COMPLETED" value="fly" />
    </List>
  </Drawer>
);

export default withStyles(styles)(DrawerV);
