import { AUTHENTICATE_USER_REQUEST, AUTHENTICATE_USER_SUCCESS, AUTHENTICATE_USER_FAILURE } from '../actions/types';

const INITIAL_STATE = {
  data: '',
  isFetching: null,
  errorMsg: null
};

const currentUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER_REQUEST:
      return {
        ...state,
        isFetching: action.payload,
        data: '',
        errorMsg: null
      };
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        errorMsg: null
      };
    case AUTHENTICATE_USER_FAILURE:
      return {
        ...state,
        data: '',
        isFetching: false,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};

export default currentUserReducer;
