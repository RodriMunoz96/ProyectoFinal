
import React from 'react';
import { Card } from 'react-bootstrap';

const StudentCard = ({
  id,
  idDocumento,
  nombres,
  apellidoPat,
  apellidoMat,
  Nacionalidad,
  fechNac,
  sexo,
  peso,
  estatura,
  alergias,
  grupoSanguineo,
  contactoEmerg,
  fotoPerfil,
  fotoDocumento,
  state,
}) => {
  const defaultImage = "https://www.pexels.com/es-es/foto/ninos-riendo-entre-mujer-y-hombre-durante-el-dia-1206101/"; 

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={fotoPerfil || defaultImage} alt={`${nombres} ${apellidoPat}`} />
      <Card.Body>
        <Card.Title>{nombres} {apellidoPat} {apellidoMat}</Card.Title>
        <Card.Text>ID: {id}</Card.Text>
        <Card.Text>Documento ID: {idDocumento}</Card.Text>
        <Card.Text>Nacionalidad: {Nacionalidad}</Card.Text>
        <Card.Text>Fecha de Nacimiento: {new Date(fechNac).toLocaleDateString()}</Card.Text>
        <Card.Text>Sexo: {sexo}</Card.Text>
        <Card.Text>Peso: {peso} kg</Card.Text>
        <Card.Text>Estatura: {estatura} cm</Card.Text>
        <Card.Text>Alergias: {alergias}</Card.Text>
        <Card.Text>Grupo Sanguíneo: {grupoSanguineo}</Card.Text>
        <Card.Text>Contacto de Emergencia: {contactoEmerg}</Card.Text>
        
        <Card.Text>Estado: {state ? "Activo" : "Inactivo"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
