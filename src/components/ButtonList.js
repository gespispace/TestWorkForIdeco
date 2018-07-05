import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ButtonList = props => {
  console.log(props);
  return (
    <ListItem
      button
      onClick={e => {
        e.preventDefault();
        props.onClick();
      }}
    >
      <ListItemText primary={props.value} />
    </ListItem>
  );
};

export default ButtonList;
