import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Param Dhaliwal
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <a href="https://github.com/ParamDhaliwal"><i class="fa fa-github fa-lg"/></a>
                        <a href="mailto:veerdhaliwal22@gmail.com"><i class="fa fa-envelope fa-lg"/></a>
                        <a href="https://www.linkedin.com/in/parm-s-dhaliwal/"><i class="fa fa-linkedin fa-lg"/></a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        &copy; 2021 Param Dhaliwal
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;