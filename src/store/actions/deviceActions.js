import {
  FETCH_DEVICES,
  FETCH_DEVICES_SUCCESS,
  FETCH_DEVICES_FAILURE
} from "../constants";
import axios from "axios";

export function fetchDevices() {
  return dispatch => {
    dispatch(request());
    return axios
      .get(`http://localhost:4000/api/devices.json`)
      .then(response => {
        dispatch(success(response.data.data));
      })
      .catch(error => {
        dispatch(failure("Error Occurs"));
      });
  };

  function request() {
    return { type: FETCH_DEVICES };
  }
  function success(payload) {
    return { type: FETCH_DEVICES_SUCCESS, payload };
  }
  function failure(error) {
    return { type: FETCH_DEVICES_FAILURE, error };
  }
}

export function updateDeviceStatus() {
  return dispatch => {
    dispatch({ type: FETCH_DEVICES });
  };
}
