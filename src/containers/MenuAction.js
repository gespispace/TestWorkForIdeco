import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { connect } from 'react-redux';
import { deleteFlight } from '../actions/actions';
import DialogFlight from './DialogFlight';

class MenuActionC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      open: false
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseDialog = () => {
    this.setState({ open: false });
  };

  handleClose = actionType => {
    this.setState({ anchorEl: null });
    switch (actionType) {
      case 'edit':
        this.setState({ open: true });
        break;
      case 'delete':
        this.props.onDeleteFlight(this.props.id);
        break;
      default:
        break;
    }
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.handleClose('edit')}>Edit</MenuItem>
          <MenuItem onClick={() => this.handleClose('delete')}>Delete</MenuItem>
        </Menu>
        <DialogFlight
          open={this.state.open}
          handleClose={this.handleCloseDialog}
          edit={true}
          id={this.props.id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    flights: state.flights[ownProps.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteFlight: id => {
      dispatch(deleteFlight(id));
    }
  };
};

const MenuAction = connect(mapStateToProps, mapDispatchToProps)(MenuActionC);

export default MenuAction;
