import React from 'react';
import FlightRow from './FlightRow';
import FlightHead from './FlightHead';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  table: {
    minWidth: '200px'
  }
});

const FlightList = ({ flights, onFlightsClick, classes }) => (
  <Table className={classes.table}>
    <FlightHead />

    <TableBody>
      {Object.keys(flights).map(key => (
        <FlightRow key={flights[key].id} obj={flights[key]} />
      ))}
    </TableBody>
  </Table>
);

export default withStyles(styles)(FlightList);
