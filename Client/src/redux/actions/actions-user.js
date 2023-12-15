import { GET_ALL_USERS, GET_USER } from "../action-types";
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

      if (!data.length) throw Error("No hay usuarios");
      else {
        console.log(data);
        return dispatch({
          type: GET_ALL_USERS,
          payload: data,
        });
      }
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