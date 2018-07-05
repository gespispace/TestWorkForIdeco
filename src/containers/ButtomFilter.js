import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions';
import ButtonList from '../components/ButtonList';

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

const ButtomFilter = connect(mapStateToProps, mapDispatchToProps)(ButtonList);

export default ButtomFilter;
