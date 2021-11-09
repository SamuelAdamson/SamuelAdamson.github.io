// FOOTER -- All Pages
// Author: Samuel Adamson
// Bootstrap Elements
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
// Social Media Icons
import GitHub from '../../img/socials/github.png';
import LinkedIn from '../../img/socials/linkedin.png';
import Instagram from '../../img/socials/instagram.png';

const Footer = () => {
    return (
        <Container className="Footer">
            <Row>
                <ListGroup horizontal className="justify-content-center">
                    <ListGroup.Item>
                        <a href="https://github.com/SamuelAdamson" target="_blank" rel="noreferrer"> 
                            <img src={ GitHub } height="48" width="48" alt="GitHub"/>
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a href="https://www.linkedin.com/in/samuel-adamson-4397051b8/" target="_blank" rel="noreferrer"> 
                            <img src={ LinkedIn } height="48" width="48" alt="LinkedIn"/>
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a href="https://www.instagram.com/lilgiibb/?hl=en" target="_blank" rel="noreferrer"> 
                            <img src={ Instagram } height="48" width="48" alt="Instagram"/>
                        </a>
                    </ListGroup.Item>
                </ListGroup>
            </Row>
        </Container>
    );
}

export default Footer;