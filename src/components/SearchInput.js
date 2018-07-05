import React from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '200px'
  }
});

const SearchInput = props => (
  <TextField
    id="uncontrolled"
    label="Search City"
    onChange={props.onChange}
    className={props.classes.textField}
  />
);

export default withStyles(styles)(SearchInput);
