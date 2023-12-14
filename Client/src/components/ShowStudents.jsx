//import React from "react";
import Table from "react-bootstrap/Table";

const ShowStudents = () => {
  const students = [
    { name: "Pepe", course: "9", id: 1 },
    { name: "Andy", course: "8", id: 2 },
    { name: "Lucas", course: "8", id: 3 },
    { name: "Gabriel", course: "8", id: 4 },
    { name: "Dario", course: "8", id: 5 },
    { name: "Juan", course: "8", id: 6 },
  ];

  return (
    <Table striped bordered hover>
      {/* Aquí deberías incluir tus filas y columnas */}
      {/* Por ejemplo, una fila de encabezado */}
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Curso</th>
          <th>Eliminar</th>
          {/* Agrega más encabezados según tu estructura de datos */}
        </tr>
      </thead>
      {/* Filas de datos */}
      <tbody>
        {students &&
          students[0] &&
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default ShowStudents;
