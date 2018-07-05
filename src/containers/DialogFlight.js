import React from 'react';

import { connect } from 'react-redux';
import { addFlight } from '../actions/actions';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class DialogFlightC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: {}
    };
  }

  handleChange = e => {
    const obj = Object.assign(this.state.obj);

    obj[e.target.name] = e.target.value;

    this.setState({ obj: obj });
  };

  handleCreator = () => {
    console.log(this.state.obj);
    this.props.onCreator(this.state.obj);
    this.props.handleClose();
  };

  handleCancel = () => {
    console.log(this.state.obj);
    this.props.handleClose();
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Creator Flight</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="id"
            id="name"
            label="Number"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="cityStart"
            id="name"
            label="Start City"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="cityEnd"
            id="name"
            label="End City"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="typeAirCraft"
            id="name"
            label="Fligt Type	"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="planTimeFly"
            id="name"
            label="	Time start"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="realTimeFly"
            id="name"
            label="Time end"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="status"
            id="name"
            label="Status"
            fullWidth
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleCreator} color="primary">
            Creator
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: ownProps.value
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreator: e => {
      dispatch(addFlight(e));
    }
  };
};

const DialogFlight = connect(mapStateToProps, mapDispatchToProps)(
  DialogFlightC
);

export default DialogFlight;
