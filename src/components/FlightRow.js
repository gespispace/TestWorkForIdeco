import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const FlightCell = ({ obj }) => (
  <TableRow>
    {Object.keys(obj).map(key => <TableCell>{obj[key]}</TableCell>)}
  </TableRow>
);

export default FlightCell;
