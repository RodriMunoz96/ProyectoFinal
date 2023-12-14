import { GET_ALL_USERS, GET_USER } from "./action-types";

const initialState = {
  allUsers: [],
  user: {},
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

    default:
      return state;
  }
};

export default reducer;
