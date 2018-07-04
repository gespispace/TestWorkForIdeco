import React from 'react';
import VisibleFlightList from '../containers/VisibleFlightList';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

const App = props => (
  <Paper className={props.root}>
    <VisibleFlightList />
  </Paper>
);

export default withStyles(styles)(App);
