import React from 'react';
import VisibleFlightList from '../containers/VisibleFlightList';
import AppBarV from './AppBarV';
import DrawerV from './DrawerV';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

const App = props => (
  <div className={props.classes.root}>
    <AppBarV />
    <DrawerV />
    <main className={props.classes.content}>
      <div className={props.classes.toolbar} />
      <VisibleFlightList />
    </main>
  </div>
);

export default withStyles(styles, { withTheme: true })(App);
