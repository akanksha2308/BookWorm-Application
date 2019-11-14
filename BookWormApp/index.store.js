import { createStore } from 'redux';

import AppReducer from './Reducer/index.reducer';

const store = createStore(AppReducer);

export default store;
