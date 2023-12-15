import {
  GET_ALL_USERS,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_ALL_STUDENTS,
} from "./action-types";

const initialState = {
  allUsers: [],
  user: {},
  allStudents: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };

    case UPDATE_USER:
      return {
        ...state,
        user: payload,
      };

    case DELETE_USER:
      return {
        ...state,
        allUsers: state.allUsers.filter((user) => user.id !== payload),
      };

    case GET_ALL_STUDENTS:
      return {
        ...state,
        allStudents: payload,
      };

    default:
      return state;
  }
};

export default reducer;
