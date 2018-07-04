import { connect } from 'react-redux';
import { setAmount } from '../actions/actions';
import FlightList from '../components/FlightList';

const getVisibleFlights = (flights, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return flights;
    default:
      return flights;
  }
};

const mapStateToProps = state => {
  return {
    flights: getVisibleFlights(state.flights, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFlightsClick: id => {
      dispatch(setAmount(id));
    }
  };
};

const VisibleFlightList = connect(mapStateToProps, mapDispatchToProps)(
  FlightList
);

export default VisibleFlightList;
