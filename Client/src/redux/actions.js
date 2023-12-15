import axios from 'axios';
import {
  CREATE_STUDENT,
  GET_ALL_STUDENTS,
  GET_STUDENT_BY_ID,
  UPDATE_STUDENT_BY_ID,
  DELETE_STUDENT_BY_ID,
  GET_STUDENT_BY_NAME,
  CLEAR_STUDENT_DETAIL,
  BY_GRADE,
  BY_PARENT,
  BY_TEACHER,
  BY_SUBJECT,
} from './action-types';

// Acción para crear un nuevo estudiante
export const createStudent = (studentData) => async (dispatch) => {
  try {
    const response = await axios.post('/estudiantes', studentData);
    const newStudent = response.data;
    dispatch({
      type: CREATE_STUDENT,
      payload: newStudent,
    });
  } catch (error) {
    console.error('Error creating student:', error);
  }
};

// Acción para obtener la lista de estudiantes
export const getAllStudents = () => async (dispatch) => {
  try {
    const response = await axios.get('/estudiantes');
    const students = response.data;
    dispatch({
      type: GET_ALL_STUDENTS,
      payload: students,
    });
  } catch (error) {
    console.error('Error fetching students:', error);
  }
};

// Acción para obtener un estudiante por su ID
export const getStudentById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/estudiantes/${id}`);
    const student = response.data;
    dispatch({
      type: GET_STUDENT_BY_ID,
      payload: student,
    });
  } catch (error) {
    console.error('Error fetching student by ID:', error);
  }
};

// Otras acciones para actualizar, eliminar, buscar por nombre, limpiar detalles y filtros...


// Acción para filtrar por grado
export const filterByGrade = (grade) => {
  return {
    type: BY_GRADE,
    payload: grade,
  };
};

// Acción para filtrar por padre
export const filterByParent = (parentId) => {
  return {
    type: BY_PARENT,
    payload: parentId,
  };
};

// Acción para filtrar por profesor
export const filterByTeacher = (teacherId) => {
  return {
    type: BY_TEACHER,
    payload: teacherId,
  };
};

// Acción para filtrar por asignatura
export const filterBySubject = (subject) => {
  return {
    type: BY_SUBJECT,
    payload: subject,
  };
};
