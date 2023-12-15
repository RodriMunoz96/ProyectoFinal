import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PorqueElegir = () => {
    const imageStyle = {
        width: '35%',
        height: 'auto',
        display: 'block',
        marginBottom: '10px', // Ajusta el margen según tu preferencia
    };

    return (
        <section className="large-section-padding">
            <Container>
                <Row>
                <Col lg={12} className="text-center mb-5">
                        <h2>¿Por qué elegir DataCole como solución integral?</h2>
                        <p className="fs-18 fw-medium">Todas las soluciones del centro educativo están en un mismo ecosistema tecnológico. Gestión, comunicación y aprendizaje trabajando en la misma dirección.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12} className="mb-4 mb-lg-0">
                        <h5>Facturación Electrónica</h5>
                        <img src="../src/Img/facturacion.png" alt="facturacion" style={imageStyle} />
                        <p>Como usuario de DataCole la emisión de facturas electrónicas están vinculadas con la sunat, lo cual ahorrará el tiempo y costo para realizar su gestión contable.</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className="mb-4 mb-lg-0">
                        <h5>Pasarela de Pago</h5>
                        <img src="../src/Img/pasarelaDePago.png" alt="pasarela" style={imageStyle} />
                        <p>Podrás realizar todos tus pagos como matrícula, pensiones, uniforme, paquetes escolares, etc, utilizando tu tarjeta crédito o débito.</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className="mb-4 mb-lg-0">
                        <h5>Sistema de mensajería</h5>
                        <img src="../src/Img/mensajeria.png" alt="mensajeria" style={imageStyle} />
                        <p>Contamos con nuestro servidor de mensajería dedicado para impartir la gestión en nuestros módulos que asegura la eficacia de este servicio al 100%.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PorqueElegir;
