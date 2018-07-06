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
    id: 12,
    cityStart: 'Yeakaterinbyrg',
    cityEnd: 'Moscow',
    typeAirCraft: 'Boing 55',
    planTimeFly: 1530634698680,
    realTimeFly: 1530634998680,
    status: 'fly'
  })
);

store.dispatch(
  addFlight({
    id: 14,
    cityStart: 'Yeakaterinbyrg',
    cityEnd: 'Moscow',
    typeAirCraft: 'Boing 55',
    planTimeFly: 1530634698680,
    realTimeFly: 1530634998680,
    status: 'fly'
  })
);
