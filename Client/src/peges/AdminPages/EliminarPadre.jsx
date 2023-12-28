import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';

const EliminarPadre = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeletePadre = () => {
    // Lógica para eliminar al padre, implementar según tus necesidades
    console.log('Eliminar padre');
    // Cierra el modal después de eliminar
    handleCloseModal();
  };

  return (
    <Container>
      <h2 className="mt-4 mb-4">Eliminar Padre</h2>
      <Button variant="danger" onClick={handleShowModal}>
        Eliminar Padre
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de que deseas eliminar este padre?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDeletePadre}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default EliminarPadre;
