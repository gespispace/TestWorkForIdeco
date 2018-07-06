import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import timetableFlight from './reducers/reducers.js';
import App from './components/App';

import {
  addFlight,
  editFlight,
  setStatusFlight,
  setVisibilityFilter,
  setAmount
} from './actions/actions.js';

let store = createStore(timetableFlight);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

console.log(store.getState());

let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(
  addFlight({
    Number: 174,
    cityStart: 'Earth',
    cityEnd: 'Mars',
    typeAirCraft: 'Falcon Heavy',
    departureTime: '25.12.2023',
    arrivalTime: '25.12.2025',
    status: 'Planned'
  })
);

store.dispatch(
  addFlight({
    Number: 49,
    cityStart: 'Earth',
    cityEnd: 'Space',
    typeAirCraft: 'Voyager 1',
    departureTime: '05.09.1977',
    arrivalTime: '∞',
    status: 'Fly'
  })
);

store.dispatch(
  addFlight({
    Number: 17,
    cityStart: 'Earth',
    cityEnd: 'Moon',
    typeAirCraft: 'Saturn V SA-512',
    departureTime: '07.12.1972',
    arrivalTime: '10.12.1972',
    status: 'Arraived'
  })
);
