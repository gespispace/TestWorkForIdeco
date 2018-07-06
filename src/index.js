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
    planTimeFly: '25.12.2023',
    realTimeFly: '25.12.2025',
    status: 'Planned'
  })
);

store.dispatch(
  addFlight({
    Number: 49,
    cityStart: 'Earth',
    cityEnd: 'Space',
    typeAirCraft: 'Voyager 1',
    planTimeFly: '05.09.1977',
    realTimeFly: '∞',
    status: 'Fly'
  })
);

store.dispatch(
  addFlight({
    Number: 17,
    cityStart: 'Earth',
    cityEnd: 'Moon',
    typeAirCraft: 'Saturn V SA-512',
    planTimeFly: '07.12.1972',
    realTimeFly: '10.12.1972',
    status: 'Arraived'
  })
);
