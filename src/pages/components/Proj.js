// PROJECT CONTAINER -- Projects Page
// Author: Samuel Adamson
import { Component } from 'react';
// Components
import { Row, Col, Container, Carousel } from 'react-bootstrap';

class Proj extends Component {

    render() {
        return (
            <div className="Proj">
                <Container>
                    <Col sm={1} />
                    <Row className="profile-row lower">
                        <Col>
                            { this.props.children }
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={1} />
                        <Col className="car">
                            <Carousel variant={ this.props.variant }>
                                <Carousel.Item interval={3000}>
                                    <img src={ this.props.image1 } alt="carousel" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={ this.props.image2 } alt="carousel" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={ this.props.image3 } alt="carousel" />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col sm={1} />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Proj;