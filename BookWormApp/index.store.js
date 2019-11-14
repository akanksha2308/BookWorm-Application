import { createStore, applyMiddleware } from 'redux';

import AppReducer from './Reducer/index.reducer';
//import RootSaga from './Sagas/index.saga';

//const sagaMiddleware = createSagaMiddleware();

//moddleware array build...
// const middlewares = (__DEV__) ? [sagaMiddleware, logger] : [sagaMiddleware];
// const middlewares = (global.__DEV__) ? [sagaMiddleware, logger] : [sagaMiddleware];

//const middlewares = [sagaMiddleware];

// let store = createStore(AppReducer);
const store = createStore(AppReducer);

//sagaMiddleware.run(RootSaga);

export default store;
