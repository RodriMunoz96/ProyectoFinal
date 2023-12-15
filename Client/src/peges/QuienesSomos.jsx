// En un nuevo archivo, por ejemplo, QuienesSomos.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const QuienesSomos = () => {
    
    const sectionStyle = {
        backgroundColor: '#800080',
        color: 'white', // Puedes ajustar el color del texto según tus preferencias
        padding: '40px', // Ajusta el espaciado según tus necesidades
    };

    return (
        <section className="section-padding" style={sectionStyle}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2 className="text-center">Quiénes Somos</h2>
                        <p className="text-center">
                            DataCole es una plataforma educativa que nace con la visión de transformar la experiencia
                            educativa en instituciones de todos los tamaños. Nos dedicamos a proporcionar soluciones
                            integrales para la gestión, comunicación y aprendizaje en entornos educativos.
                        </p>
                        <p className="text-center">
                            Nuestra misión es simplificar los procesos educativos, facilitar la comunicación entre
                            todos los miembros de la comunidad educativa y fomentar un ambiente propicio para el
                            aprendizaje efectivo.
                        </p>
                        <p className="text-center">
                            Con DataCole, las instituciones educativas pueden centralizar la gestión de sus
                            operaciones, utilizar herramientas de comunicación eficientes y ofrecer experiencias de
                            aprendizaje innovadoras.
                        </p>
                        <p className="text-center">
                            Estamos comprometidos con el desarrollo continuo y la mejora de nuestra plataforma para
                            adaptarnos a las necesidades cambiantes del ámbito educativo. Creemos que la tecnología
                            puede ser una aliada poderosa para potenciar el proceso educativo y contribuir al
                            crecimiento y éxito de las instituciones y sus estudiantes.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default QuienesSomos;
