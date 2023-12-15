import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AsesoresContacto = () => {
    const asesores = [
        {
            nombre: 'Juan Pérez',
            cargo: 'Asesor Principal',
            correo: 'juan@example.com',
            telefono: '123-456-7890',
            imagen: 'https://media.istockphoto.com/id/1354898581/es/foto/foto-de-un-joven-empresario-usando-una-computadora-port%C3%A1til-en-una-oficina-moderna.jpg?s=612x612&w=0&k=20&c=ill7Gebgk_9_xh-pai6iODyhz1x644E_WhwzZgVbS6I=',
            genero: 'varon',
        },
        {
            nombre: 'María Rodríguez',
            cargo: 'Asesora de Comunicación',
            correo: 'maria@example.com',
            telefono: '234-567-8901',
            imagen: 'https://media.istockphoto.com/id/1399395748/es/foto/alegre-mujer-de-negocios-con-gafas-posando-con-las-manos-bajo-la-cara-mostrando-su-sonrisa-en.jpg?s=612x612&w=0&k=20&c=0y9KGEHKrwRUhZX2b7OH-SPUJ9t_HPf9Dle5khT77bg=',
            genero: 'mujer',
        },
        // Agrega más asesores según sea necesario
    ];

    const mujeres = asesores.filter((asesor) => asesor.genero === 'mujer');
    const varones = asesores.filter((asesor) => asesor.genero === 'varon');

    const renderTarjeta = (asesor) => (
        <Card>
            {/* Agrega el contenido de la tarjeta según tus necesidades */}
            <Card.Img variant="top" src={asesor.imagen} alt={`Imagen de ${asesor.nombre}`} />
            <Card.Body>
                <Card.Title>{asesor.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{asesor.cargo}</Card.Subtitle>
                <Card.Text>
                    Correo: {asesor.correo}<br />
                    Teléfono: {asesor.telefono}
                </Card.Text>
            </Card.Body>
        </Card>
    );

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">Asesores de Contacto</h2>
            
            <Row>
                <Col>
                    <h3 className="text-center mb-3">Mujeres</h3>
                    <Row>
                        {mujeres.map((asesor, index) => (
                            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                                {renderTarjeta(asesor)}
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h3 className="text-center mb-3">Varones</h3>
                    <Row>
                        {varones.map((asesor, index) => (
                            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                                {renderTarjeta(asesor)}
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default AsesoresContacto;
