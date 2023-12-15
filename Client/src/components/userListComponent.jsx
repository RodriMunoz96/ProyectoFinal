import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const UserListComponent = ({ users }) => {
  return (
    <Container>
      <Row>
        {users.map((user) => (
          <Col key={user.id} lg={3} md={4} sm={6} xs={12}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{`${user.nombre} ${user.apellidoPaterno} ${user.apellidoMaterno}`}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.type}</Card.Subtitle>
                <Card.Text>Email: {user.email}</Card.Text>
                <Card.Text>{user.complete ? 'Completo' : 'Incompleto'}</Card.Text>
                <Card.Text>{user.validate ? 'Validado' : 'No Validado'}</Card.Text>
                <Card.Text>{user.state ? 'Activo' : 'Inactivo'}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserListComponent;
