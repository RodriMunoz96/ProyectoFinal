import {
  GET_ALL_USERS,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_USER_ACTIVE,
  GET_STUDENT,
  GET_ALL_STUDENTS,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  GET_ALL_PARENTS,
  GET_PARENT,
  UPDATE_PARENT,
  DELETE_PARENT,
} from "./action-types";

// Define el estado inicial del almacenamiento Redux para estudiantes
const initialState = {
  loggedUser: {},
  allUsers: [],
  user: {},
  allStudents: [],
  student: {},
  allParents: [],
  parent: {},
};

// Define el reducer que gestionará las acciones y actualizará el estado
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };

    case GET_USER:
      return {
        ...state,
        user: payload,
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

    case SET_USER_ACTIVE:
      return {
        ...state,
        loggedUser: { id: payload },
      };

    case GET_STUDENT:
      return {
        ...state,
        student: payload,
      };

    case GET_ALL_STUDENTS:
      return {
        ...state,
        allStudents: payload,
      };

    case UPDATE_STUDENT:
      return {
        ...state,
        student: payload,
      };

    case DELETE_STUDENT:
      return {
        ...state,
        allStudents: state.allStudents.filter(
          (student) => student.id !== payload
        ),
      };

    case GET_PARENT:
      return {
        ...state,
        parent: payload,
      };

    case GET_ALL_PARENTS:
      return {
        ...state,
        allParents: payload,
      };

    case UPDATE_PARENT:
      return {
        ...state,
        parent: payload,
      };

    case DELETE_PARENT:
      return {
        ...state,
        allParents: state.allParents.filter((parent) => parent.id !== payload),
      };

    default:
      return state;
  }
};

export default rootReducer;
