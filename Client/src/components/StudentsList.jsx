import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllStudents } from '../redux/actions';
import { Card, Row, Col } from 'react-bootstrap';
import StudentCards from './StudentCards';

const StudentsList = ({ students, getAllStudents }) => {
  // Se utiliza useEffect para cargar los estudiantes cuando el componente se monta
  useEffect(() => {
    // Llamada a la acción para obtener todos los estudiantes
    getAllStudents();
  }, [getAllStudents]);  // Dependencia: ejecutar el efecto solo cuando getAllStudents cambia

  return (
    <div>
      {/* Título de la lista de estudiantes */}
      <h2>List of Students</h2>
      
      {/* Row de Bootstrap: se configura para mostrar 1 columna en pantallas pequeñas, 2 en medianas, 3 en grandes, y 4 en extra grandes */}
      <Row xs={1} md={2} lg={3} xl={4}>
        {students.map(student => (
          // Col de Bootstrap: cada estudiante se coloca en una columna
          <Col key={student.id} className="mb-4">
            {/* Se pasa cada propiedad del estudiante como prop a StudentCards */}
            <StudentCards {...student} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

// Mapeo del estado de Redux a props
const mapStateToProps = state => ({
  students: state.allStudents,
});

// Mapeo de las acciones de Redux a props
const mapDispatchToProps = {
  getAllStudents,
};

// Conectar el componente a Redux
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
