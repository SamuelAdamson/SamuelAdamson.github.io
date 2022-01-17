// FOOTER -- All Pages
// Author: Samuel Adamson
// Bootstrap Elements
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
// Components
import { useInView } from 'react-intersection-observer';
// Social Media Icons
import GitHub from '../../img/socials/github.png';
import LinkedIn from '../../img/socials/linkedin.png';
import Instagram from '../../img/socials/instagram.png';

// Check if loaded once before
let loaded1 = false;
let loaded2 = false;
let loaded3 = false;

const Footer = () => {

    // Intersection Observers
    const [ref1, inView1] = useInView({ threshold: 0.8 });
    const [ref2, inView2] = useInView({ threshold: 0.8 });
    const [ref3, inView3] = useInView({ threshold: 0.8 });

    // Update loaded before values
    if(inView1) { loaded1 = inView1 };
    if(inView2) { loaded2 = inView2 };
    if(inView3) { loaded3 = inView3 };

    return (
        <Container className="Footer">
            <Row className="foot-show">
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
                        <a href="https://www.instagram.com/giibb4/?hl=en" target="_blank" rel="noreferrer"> 
                            <img src={ Instagram } height="48" width="48" alt="Instagram"/>
                        </a>
                    </ListGroup.Item>
                </ListGroup>
            </Row>

            <Row className="foot-show">
                <Col ref={ ref1 }>
                    <Row className={ inView1 || loaded1 ? 'foot-show-1' : null }> <h2> Contact </h2> </Row>
                    <Row className={ inView1 || loaded1 ? 'foot-show-2' : null }>
                        <a href="mailto:sadamson@uccs.edu">
                            <h3> Email </h3>
                        </a>
                    </Row>
                    <Row className={ inView1 || loaded1 ? 'foot-show-3' : null }>
                        <a href="https://www.fiverr.com/giibbi" target="_blank" rel="noreferrer">
                            <h3> Fiverr </h3>
                        </a>
                    </Row>
                    <Row className={ inView1 || loaded1 ? 'foot-show-4' : null }>
                        <a href="https://SamuelAdamson.github.io/#/projects" target="_blank" rel="noreferrer">
                            <h3> Portfolio </h3>
                        </a>
                    </Row> 
                </Col>
                <Col ref={ ref2 }>
                    <Row className={ inView2 || loaded2 ? 'foot-show-1' : null }> <h2> Weightlifting </h2> </Row>
                    <Row className={ inView2 || loaded2 ? 'foot-show-2' : null }>
                        <a href="https://adamson.issacertifiedtrainer.com" target="_blank" rel="noreferrer">
                            <h3> CPT </h3>
                        </a>
                    </Row>
                    <Row className={ inView2 || loaded2 ? 'foot-show-3' : null }>
                        <a href="https://www.issaonline.com/" target="_blank" rel="noreferrer">
                            <h3> ISSA </h3>
                        </a>
                    </Row>
                    <Row className={ inView2 || loaded2 ? 'foot-show-4' : null }>
                        <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank" rel="noreferrer">
                            <h3> Tokyo 2020 </h3>
                        </a>
                    </Row> 
                </Col>
                <Col ref={ ref3 }>
                    <Row className={ inView3 || loaded3 ? 'foot-show-1' : null }> <h2> Stuff I Like </h2> </Row>
                    <Row className={ inView3 || loaded3 ? 'foot-show-2' : null }>
                        <a href="https://www.netflix.com/title/70205012" target="_blank" rel="noreferrer">
                            <h3> Naruto </h3>
                        </a>
                    </Row>
                    <Row className={ inView3 || loaded3 ? 'foot-show-3' : null }>
                        <a href="https://www.youtube.com/watch?v=s3zzz2lxLeg" target="_blank" rel="noreferrer">
                            <h3> Art </h3>
                        </a>
                    </Row>
                    <Row className={ inView3 || loaded3 ? 'foot-show-4' : null }>
                        <a href="https://liftingugly.com/" target="_blank" rel="noreferrer">
                            <h3> Lifting Ugly </h3>
                        </a>
                    </Row> 
                </Col>
            </Row>
            <h4> Colorado Springs, CO, USA </h4>
        </Container>
    );
}

export default Footer;