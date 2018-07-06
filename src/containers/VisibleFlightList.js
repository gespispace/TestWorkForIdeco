import { connect } from 'react-redux';
import { deleteFlight } from '../actions/actions';
import FlightList from '../components/FlightList';

const getVisibleFlights = (flights, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return flights;
    case 'SHOW_PLANNED':
      return Object.values(flights).filter(v => v.status === 'Planned');
    case 'SHOW_ARRAIVED':
      return Object.values(flights).filter(v => v.status === 'Arraived');
    case 'SHOW_FLY':
      return Object.values(flights).filter(v => v.status === 'Fly');
    default:
      return flights;
  }
};

const getVisibleFlightsWithSearch = (flights, searchText) => {
  return Object.values(flights).filter(
    v =>
      v.cityStart.toLowerCase().includes(searchText.toLowerCase()) ||
      v.cityEnd.toLowerCase().includes(searchText.toLowerCase())
  );
};

const mapStateToProps = state => {
  return {
    flights:
      state.searchInput === ''
        ? getVisibleFlights(state.flights, state.visibilityFilter)
        : getVisibleFlightsWithSearch(state.flights, state.searchInput)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteFlight: id => {
      dispatch(deleteFlight(id));
    }
  };
};

const VisibleFlightList = connect(mapStateToProps, mapDispatchToProps)(
  FlightList
);

export default VisibleFlightList;
