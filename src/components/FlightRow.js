import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import MenuAction from '../containers/MenuAction';
const FlightCell = ({ obj }) => (
  <TableRow>
    {Object.keys(obj).map(
      key => (key !== 'id' ? <TableCell>{obj[key]}</TableCell> : null)
    )}
    {obj[1] !== 'Number' ? <MenuAction id={obj['id']} /> : null}
  </TableRow>
);

export default FlightCell;
