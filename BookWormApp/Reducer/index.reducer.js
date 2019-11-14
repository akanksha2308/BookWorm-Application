import { combineReducers } from 'redux';
import Books from './books.reducer';

//combined all reducers
const AppReducer = combineReducers({
    Books
});

export default AppReducer;

