// HOME PAGE -- Portfolio
// Author: Samuel Adamson
import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Components
import SplashScreen from './components/SplashScreen';
import Dyno from './components/Dyno';
import DynoFull from './components/DynoFull';
import ScrollFade from './components/ScrollFade';
// Images
import Profile from '../img/profile.jpg';

// First Instance of Home -- Render Splash Screen
let firstInstance = true;

class Home extends Component {
    constructor(props) {
        super(props);

        // States
        this.state = { 
            renderSplash: true,
            headerOne: null,
            headerTwo: null
        }

        // Bind functions
        this.handleSplashUnmount = this.handleSplashUnmount.bind(this);
        this.handleHeadFadeIn = this.handleHeadFadeIn.bind(this);
    }

    // On mount
    componentDidMount() {
        // Fade in on yeeta skeeta
        if(firstInstance) {
            this.handleHeadFadeIn();
        } else {
            this.setState({
                headerOne: 'show',
                headerTwo: 'show'
            })
        }
    }

    // Increment number of home instances
    componentWillUnmount() {
        // Update first instance
        firstInstance = false;
    }

    // Unmounts splash Screen
    handleSplashUnmount() {
        this.setState({
            renderSplash: false
        });
    }

    // Fade in header
    handleHeadFadeIn() {
        // Fade in header 1
        setTimeout(() => {
            // Update state
            this.setState({
                headerOne: 'show' 
            })
        }, 5600)

        // Fade in header 2
        setTimeout(() => {
            // Update state
            this.setState({
                headerTwo: 'show' 
            })
        }, 5800)
    }

    // Render components
    render() {
        // Note Splash Screen rendered conditionally
        return (
            <div className="Home">
                {this.state.renderSplash && firstInstance ? <SplashScreen unmountMe={ this.handleSplashUnmount } /> : null }

                <Container>
                    <div className="home-header">
                        <h1 className={this.state.headerOne}> <strong> Samuel Adamson </strong> </h1>
                        <h2 className={this.state.headerTwo}> Data engineer, computer science student, weightlifter </h2>
                    </div>
                </Container>

                <Dyno thresh={ 0.6 }  props={
                    <Container>
                        <Row className="profile-row">
                            <Col>
                                <h2> Data Engineering </h2>
                                <br />
                                <h4>  
                                    I build automated systems to manage
                                    and analyze large amounts of protected data.
                                </h4>
                            </Col>
                            <Col>
                                <h2> AI </h2>
                                <br />
                                <h4>
                                    I am majoring in computer science with a focus
                                    in artificial intelligence.
                                </h4>
                            </Col>
                            <Col>
                                <h2> Web Development </h2>
                                <br />
                                <h4>
                                    I am a full stack hobbyist, and you're looking at
                                    one of my creations right now.
                                </h4>
                            </Col>
                        </Row>

                        <Row className="profile-row">
                            <Col>
                                <h2> From Rural Roots </h2>
                                <br />
                                <h4> 
                                    Growing up on the Western Slope of Colorado, I developed a passion
                                    for Computing. I began writing object oriented code at the age 
                                    of 14 and two years later I started my first internship as a 
                                    Junior Game Developer. After high school, I entered the University 
                                    of Colorado as a computer science major. Alongside my studies, I work 
                                    as a data engineer in the healthcare industry.
                                </h4>
                            </Col>
                            <Col>
                                <div className="profile-bar"/>
                                <img src={ Profile } alt="Samuel" className="profile-img" />
                            </Col>
                        </Row>
                    </Container>
                }/>

                <ScrollFade props={
                    <Container className="mid-header">
                        <h1> <strong> From my perspective </strong> </h1>
                        <h2> 
                            Life is all about perspective. See my ventures in tech and beyond, so far
                        </h2>
                    </Container>
                }/>

                <DynoFull thresh={ 0.1 }  props= {
                    <Container>
                        <h1> Some more text </h1>
                    </Container>
                }/>

            </div>
        );
    }

}

export default Home;