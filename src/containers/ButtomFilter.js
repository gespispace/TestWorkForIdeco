import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ButtonList = props => {
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

const mapStateToProps = (state, ownProps) => {
  return {
    value: ownProps.value
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList);
