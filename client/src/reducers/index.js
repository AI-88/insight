import { combineReducers } from 'redux';
import currentUserReducer from './current_user_reducer';
import customerDataReducer from './customer_data_reducer';

const rootReducer = combineReducers({
  current_user: currentUserReducer,
  customer_data: customerDataReducer
});

export default rootReducer;
