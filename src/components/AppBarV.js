import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
});

const AppBarV = props => (
  <AppBar position="absolute" className={props.classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        Flight Table
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles, { withTheme: true })(AppBarV);
