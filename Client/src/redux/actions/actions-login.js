import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
} from "../action-types";
import axios from "axios";

const URL = "http://localhost:3000/login";

export const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST });

export const loginUserSuccess = (token) => {
  sessionStorage.setItem("token", token);

  return { type: LOGIN_USER_SUCCESS, payload: token };
};

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const loginUser = (loginData) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const response = await axios.post(URL, loginData);

    dispatch(loginUserSuccess(response.data.token));
  } catch (error) {
    console.error("Error en la autenticación:", error);
    dispatch(
      loginUserFailure(
        error.response
          ? error.response.data
          : "Hubo un problema con la autenticación del usuario"
      )
    );
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");

  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userId");
  return { type: LOGOUT_USER };
};
