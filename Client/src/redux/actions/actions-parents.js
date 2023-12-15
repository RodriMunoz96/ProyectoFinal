import axios from "axios";
import {
  GET_ALL_PARENTS,
  GET_PARENT,
  UPDATE_PARENT,
  DELETE_PARENT,
} from "../action-types";

const URL = "http://localhost:3001/parents";

export const createParent = (data) => {
  return async () => {
    try {
      const response = await axios.post(URL, data);
      return response;
    } catch (error) {
      return error.message;
    }
  };
};

export const getAllParents = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL);

      return dispatch({
        type: GET_ALL_PARENTS,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const getParent = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/${id}`);

      return dispatch({
        type: GET_PARENT,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const updateParent = (id, newData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${URL}/${id}`, newData);

      return dispatch({
        type: UPDATE_PARENT,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const deleteParent = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${URL}/${id}`);

      return dispatch({
        type: DELETE_PARENT,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
