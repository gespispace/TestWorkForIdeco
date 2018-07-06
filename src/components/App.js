import React from 'react';
import VisibleFlightList from '../containers/VisibleFlightList';
import AppBarV from '../containers/AppBarV';
import DrawerV from './DrawerV';

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minWidth: 0,
    overflowX: 'auto'
  },
  toolbar: theme.mixins.toolbar
});

const App = props => (
  <div className={props.classes.root}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarV />
      <DrawerV />
      <main className={props.classes.content}>
        <div className={props.classes.toolbar} />
        <VisibleFlightList />
      </main>
    </MuiThemeProvider>
  </div>
);

export default withStyles(styles)(App);
