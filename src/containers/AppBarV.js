import React from 'react';
import DialogFlight from './DialogFlight';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SearchInput from './SearchInput';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  flex: {
    flex: 1
  }
});
class AppBarV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <AppBar position="absolute" className={this.props.classes.appBar}>
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            noWrap
            className={this.props.classes.flex}
          >
            Flight Table Number of flights: {this.props.number}
          </Typography>
          <SearchInput />
          <IconButton onClick={this.handleClickOpen} color="inherit">
            <Add />
          </IconButton>
          <DialogFlight open={this.state.open} handleClose={this.handleClose} />
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: Object.keys(state.flights).length
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AppBarV));
