import {
  GET_ALL_STUDENTS,
  GET_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "../action-types";
import axios from "axios";

const URL = "http://localhost:3000/estudiantes";

export const getAllStudents = () => {
  return async (dispatch) => {
    try {
      const { data } = axios.get(URL);
      if (!data.length) {
        throw Error("No hay usuarios");
      } else {
        return dispatch({
          type: GET_ALL_STUDENTS,
          payload: data,
        });
      }
    } catch (error) {
      return error.message;
    }
  };
};
