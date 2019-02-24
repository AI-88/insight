import { combineReducers } from 'redux';
import currentUserReducer from './current_user_reducer';

const rootReducer = combineReducers({
  current_user: currentUserReducer
});

export default rootReducer;
