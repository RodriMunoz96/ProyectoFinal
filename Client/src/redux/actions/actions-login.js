import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../action-types";
import axios from "axios";

const URL = "http://localhost:3000/login";

export const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST });

export const loginUserSuccess = (token, userId) => {
  localStorage.setItem("token", token);
  return { type: LOGIN_USER_SUCCESS, payload: { token, userId } };
};

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const loginUser = (loginData) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const response = await axios.post(URL, loginData);
    const { token, userId } = response.data;
    dispatch(loginUserSuccess(token, userId));
  } catch (error) {
    dispatch(
      loginUserFailure(
        error.response
          ? error.response.data
          : "Hubo un problema con la autenticación del usuario"
      )
    );
  }
};
