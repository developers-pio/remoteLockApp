import {
  FETCH_DEVICES,
  FETCH_DEVICES_SUCCESS,
  FETCH_DEVICES_FAILURE
} from "../constants";

const initialState = {
  loading: false,
  error: null,
  data: null
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEVICES:
      return {
        ...state,
        loading: true
      };
    case FETCH_DEVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };
    case FETCH_DEVICES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default deviceReducer;
