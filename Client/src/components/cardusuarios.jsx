import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

const UserCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/usuarios');
        setUsers(response.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Row>
      <h2>Usuarios</h2>
      {users.map((user) => (
        <Col key={user.id} lg={4} md={6} sm={12}>
          <Card style={{ marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>{user.username}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Tipo: {user.type}</Card.Subtitle>
              <Card.Text>Email: {user.email}</Card.Text>
              <Card.Text>Nombre completo: {`${user.nombre} ${user.apellidoPaterno} ${user.apellidoMaterno}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserCard;
