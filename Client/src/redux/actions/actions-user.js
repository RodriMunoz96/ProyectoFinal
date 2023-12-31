import {
  GET_ALL_USERS,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_USER_ACTIVE,
} from "../action-types";
import axios from "axios";

const URL = "http://localhost:3000/user";

export const createUser = (data) => {
  return async () => {
    try {
      const response = await axios.post(URL, data);
      return response;
    } catch (error) {
      return error.message;
    }
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL);

      return dispatch({
        type: GET_ALL_USERS,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/${id}`);

      return dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const updateUser = (id, newData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${URL}/${id}`, newData);

      return dispatch({
        type: UPDATE_USER,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${URL}/${id}`);

      return dispatch({
        type: DELETE_USER,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const setUserActive = (userId) => {
  return {
    type: SET_USER_ACTIVE,
    payload: userId,
  };
};
