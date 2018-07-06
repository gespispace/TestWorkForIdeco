import React from 'react';
import { connect } from 'react-redux';
import { setSearchInput } from '../actions/actions';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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

const mapStateToProps = (state, ownProps) => {
  return {
    value: ownProps.value
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: e => {
      dispatch(setSearchInput(e.target.value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(SearchInput)
);
