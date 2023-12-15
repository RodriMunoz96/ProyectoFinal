import {
  GET_ALL_USERS,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
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
  allUsers: [],
  user: {},
  allStudents: [],
  student: {},
  allParents: [],
  parent: {},
};

// Define el reducer que gestionará las acciones y actualizará el estado
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STUDENT:
      // Agrega un nuevo estudiante a la lista
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case GET_ALL_STUDENTS:
      // Actualiza la lista de estudiantes con los datos obtenidos de la acción
      return {
        ...state,
        students: action.payload,
      };

    case GET_STUDENT_BY_ID:
      // Actualiza los detalles del estudiante con los datos obtenidos de la acción
      return {
        ...state,
        detailStudent: action.payload,
      };

    // Otras acciones para actualizar, eliminar, buscar por nombre, limpiar detalles y filtros...
    

    case CLEAR_STUDENT_DETAIL:
      // Borra los detalles del estudiante (se utiliza para limpiar los detalles)
      return {
        ...state,
        detailStudent: {},
      };

    case BY_GRADE:
      // Filtra la lista de estudiantes por grado
      let filteredByGrade = state.students.filter(
        (student) => student.grade === action.payload
      );
      return {
        ...state,
        filteredStudents: filteredByGrade,
      };

    case BY_PARENT:
      // Filtra la lista de estudiantes por padre
      let filteredByParent = state.students.filter(
        (student) => student.parentId === action.payload
      );
      return {
        ...state,
        filteredStudents: filteredByParent,
      };

    case BY_TEACHER:
      // Filtra la lista de estudiantes por profesor
      let filteredByTeacher = state.students.filter(
        (student) => student.teacherId === action.payload
      );
      return {
        ...state,
        filteredStudents: filteredByTeacher,
      };

    case BY_SUBJECT:
      // Filtra la lista de estudiantes por asignatura
      let filteredBySubject = state.students.filter(
        (student) => student.subject === action.payload
      );
      return {
        ...state,
        filteredStudents: filteredBySubject,
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
      // Devuelve el estado sin cambios si la acción no es reconocida
      return { ...state };
  }
};

export default studentReducer; // Exporta el reducer para su uso en la aplicación
