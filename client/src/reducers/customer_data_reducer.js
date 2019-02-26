import { FETCH_CUSTOMER_DATA_REQUEST, FETCH_CUSTOMER_DATA_SUCCESS, FETCH_CUSTOMER_DATA_FAILURE } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  errorMsg: null
};

const customerDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_DATA_REQUEST:
      return {
        ...state,
        isFetching: action.payload,
        data: [],
        errorMsg: null
      };
    case FETCH_CUSTOMER_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        errorMsg: null
      };
    case FETCH_CUSTOMER_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        data: [],
        errorMsg: action.payload
      };
    default:
      return state;
  }
};

export default customerDataReducer;
