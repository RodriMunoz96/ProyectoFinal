import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
} from "../action-types";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const URL = "http://localhost:3000/login";

export const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST });

export const loginUserSuccess = (token) => {
  sessionStorage.setItem("token", token);
  console.log("Token almacenado en sessionStorage:", token);

  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;

  sessionStorage.setItem("userId", userId);

  return { type: LOGIN_USER_SUCCESS, payload: token };
};

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const loginUser = (loginData) => async (dispatch) => {
  console.log("Logindata:", loginData);
  dispatch(loginUserRequest());
  try {
    const response = await axios.post(URL, loginData);
    console.log("Respuesta del servidor:", response.data);
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
