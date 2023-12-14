import { GET_ALL_USERS, GET_USER, GET_ALL_STUDENTS } from "./action-types";

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
