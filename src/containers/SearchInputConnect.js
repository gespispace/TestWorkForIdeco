import { connect } from 'react-redux';
import { setSearchInput } from '../actions/actions';
import SearchInput from '../components/SearchInput';

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

const SearchInputConnet = connect(mapStateToProps, mapDispatchToProps)(
  SearchInput
);

export default SearchInputConnet;
