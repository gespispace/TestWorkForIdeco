import React from 'react';
import FlightRow from './FlightRow';

import TableHead from '@material-ui/core/TableHead';

const FlightHead = ({ onClick, value }) => (
  <TableHead>
    <FlightRow
      obj={{
        1: 'Number',
        2: 'Start City',
        3: 'End City',
        4: 'Fligt Type',
        5: 'Time start',
        6: 'Time end',
        7: 'Status'
      }}
    />
  </TableHead>
);

export default FlightHead;
