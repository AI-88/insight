import axios from 'axios';
import * as types from './types';

export const fetchCurrentUser = () => async dispatch => {
  dispatch({ type: types.AUTHENTICATE_USER_REQUEST, payload: true });
  try {
    const request = await axios.get('/api/current_user');
    const { data } = request;
    dispatch({ type: types.AUTHENTICATE_USER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: types.AUTHENTICATE_USER_FAILURE, payload: e });
  }
};

export const fetchSubscriptionsData = () => async dispatch => {
  dispatch({ type: types.FETCH_SUBSCRIPTIONS_DATA_REQUEST, payload: true });
  try {
    const request = await axios.get('/api/SUBSCRIPTIONS_DATA');
    const { data } = request;
    dispatch({ type: types.FETCH_SUBSCRIPTIONS_DATA_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: types.FETCH_SUBSCRIPTIONS_DATA_FAILURE, payload: e });
  }
};
