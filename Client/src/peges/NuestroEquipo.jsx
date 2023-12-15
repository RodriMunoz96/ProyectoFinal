import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const NuestroEquipo = () => {
    return (
        <div>
            {/* Sección del Consejo Escolar */}
            <section className="py-5">
                <Container>
                    <h2>Consejo Escolar</h2>
                    <p>Actualmente, los miembros que componen el Consejo son los siguientes:</p>
                    {/* Agrega la información del Consejo Escolar aquí */}
                </Container>
            </section>

            {/* Sección del Claustro de Profesores */}
            <section className="py-5 bg-light">
                <Container>
                    <h2>Claustro de Profesores</h2>
                    <p>El Claustro de Profesores está integrado por los 29 profesores que prestan sus servicios en este Centro, incluyendo la orientadora.</p>
                    {/* Agrega la información del Claustro de Profesores aquí */}
                </Container>
            </section>

            {/* Sección del Equipo Directivo */}
            <section className="py-5">
                <Container>
                    <h2>Equipo Directivo</h2>
                    <Row>
                        {/* Agrega tarjetas para cada miembro del Equipo Directivo */}
                        <Col md={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Dña. Mª Amparo Albero González</Card.Title>
                                    <Card.Text>Directora general</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* Agrega más tarjetas según sea necesario */}
                    </Row>
                </Container>
            </section>

            {/* Sección de Secretaría */}
            <section className="py-5 bg-light">
                <Container>
                    <h2>Secretaría</h2>
                    <Row>
                        <Col md={6}>
                            <h3>Secretaría administrativa del centro:</h3>
                            <p><strong>RESPONSABLE:</strong> Dña. Tania Rico Moyano</p>
                            <p>Horario de atención al público (junio):</p>
                            <p>Lunes a viernes 9:30 h. -13:30 h.</p>
                            <p>Lunes a jueves: 15:00 a 16:00 h.</p>
                        </Col>
                        <Col md={6}>
                            <h3>Secretaría académica del centro:</h3>
                            <p><strong>RESPONSABLE:</strong> Dña. Tamara Suena Hernández</p>
                            <p>Horario de atención al público: Bajo cita previa.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default NuestroEquipo;
