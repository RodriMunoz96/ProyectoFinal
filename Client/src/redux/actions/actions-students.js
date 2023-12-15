import {
  GET_ALL_STUDENTS,
  GET_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "../action-types";
import axios from "axios";

const URL = "http://localhost:3000/estudiantes";

export const createStudent = (data) => {
  return async () => {
    try {
      const response = await axios.post(URL, data);
      return response;
    } catch (error) {
      return error.message;
    }
  };
};

export const getAllStudents = () => {
  return async (dispatch) => {
    try {
      const { data } = axios.get(URL);

        return dispatch({
          type: GET_ALL_STUDENTS,
          payload: data,
        });   
    } catch (error) {
      return error.message;
    }
  };
};

export const getStudent = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/${id}`);

      return dispatch({
        type: GET_STUDENT,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const updateStudent = (id, newData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${URL}/${id}`, newData);

      return dispatch({
        type: UPDATE_STUDENT,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${URL}/${id}`);

      return dispatch({
        type: DELETE_STUDENT,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
