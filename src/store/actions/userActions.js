import {
  FETCH_USER_REQUEST,
  FETCH_USER_REQUEST_SUCCESS,
  FETCH_USER_REQUEST_FAILURE
} from "../constants";
import axios from "axios";

export function fetchUsers() {
  return dispatch => {
    dispatch(request());
    return axios
      .get(`http://localhost:4000/api/users.json`)
      .then(response => {
        dispatch(success(response.data.data));
      })
      .catch(error => {
        dispatch(failure("Error Occurs"));
      });
  };

  function request() {
    return { type: FETCH_USER_REQUEST };
  }
  function success(payload) {
    return { type: FETCH_USER_REQUEST_SUCCESS, payload };
  }
  function failure(error) {
    return { type: FETCH_USER_REQUEST_FAILURE, error };
  }
}
