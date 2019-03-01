import { combineReducers } from 'redux';
import currentUserReducer from './current_user_reducer';
import subscriptionsDataReducer from './subscriptions_data_reducer';

const rootReducer = combineReducers({
  current_user: currentUserReducer,
  subscriptions_data: subscriptionsDataReducer
});

export default rootReducer;
