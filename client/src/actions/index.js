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
