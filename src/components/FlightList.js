import React from 'react';
import FlightRow from './FlightRow';
import FlightHead from './FlightHead';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

const FlightList = ({ flights, onFlightsClick }) => (
  <Table>
    <FlightHead />

    <TableBody>
      {Object.keys(flights).map(key => (
        <FlightRow key={flights[key].id} obj={flights[key]} />
      ))}
    </TableBody>
  </Table>
);

export default FlightList;
