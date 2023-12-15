import { GET_ALL_STUDENTS } from "../action-types";
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
