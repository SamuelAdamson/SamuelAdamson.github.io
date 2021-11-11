// HOME PAGE -- Portfolio
// Author: Samuel Adamson
import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// Components
import SplashScreen from './components/SplashScreen';
import Dyno from './components/Dyno';
import DynoFull from './components/DynoFull';
import Reveal from 'react-reveal/Reveal';
import Footer from './components/Footer';
// Images
import Profile from '../img/home/profile.jpg';
import CU from '../img/home/cu.jpg';
import Monument from '../img/home/monument.jpg';
import Server from '../img/home/server.jpg';
import Lift from '../img/home/lift.jpg';

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
                        <h2 className={this.state.headerTwo}> data engineer, computer science student, weightlifter </h2>
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
                                    for computing. I began writing object oriented code at the age 
                                    of 14 and two years later I started my first internship as a 
                                    Junior Game Developer. After high school, I entered the University 
                                    of Colorado as a computer science major. Alongside my studies, I work 
                                    as a data engineer in the healthcare industry.
                                </h4>
                            </Col>
                            <Col>
                                <img src={ Profile } alt="Samuel" className="profile-img" />
                            </Col>
                        </Row>
                    </Container>
                }/>

                <Reveal effect="fadeOnScroll" duration={1000}>
                    <Container className="mid-header">
                        <h1> <strong> My perspective </strong> </h1>
                        <h2> 
                            everyone lives within their own subjective interpretation - itachi uchiha
                        </h2>
                    </Container>
                </Reveal>

                <DynoFull thresh={ 0.2 }  
                    initialProp={
                        <Container className="lower-content-head"> 
                            <Row className="profile-row lower">
                                <Col>
                                    <h1> Purpose </h1>
                                    <br />
                                    <h4> 
                                        In this modern age of information and technology, computing will continue to 
                                        play a massive role in shaping our society. 
                                        <br />
                                        <br />
                                        I want to help harness the computational power we have at our disposal
                                        to improve lives and push our civilization forward. As I continue to write
                                        my story, I do so with this intention in mind.
                                    </h4>
                                </Col>
                                <Col sm={3} />
                            </Row>
                            <br />
                        </Container>
                    }
                    props={[
                        <Container className="lower-content-body">
                            <Row className="profile-row lower">
                                <Col className="my-auto">
                                    <h2> Education </h2>
                                    <br />
                                    <h4> 
                                        After graduating salutatorian from Grand Junction High School in 2019,
                                        I began my undergraduate studies at the University of Colorado. During
                                        my junior year I declared a focus in Artificial Intelligence.
                                        Throughout my educational career, I maintain a 4.0 GPA.
                                    </h4>
                                </Col>
                                <Col>
                                    <img src={ CU } alt="Univ of Colorado" className="profile-img" />
                                </Col>
                            </Row>
                        </Container>,
                        <Container className="lower-content-body">
                            <Row className="profile-row lower">
                                <Col className="my-auto">
                                    <h2> Professional Work </h2>
                                    <br />
                                    <h4> 
                                        Currently I work at a clinically integrated healthcare network, Monument 
                                        Health. As a data engineer, I build Extract Transfer Load Pipelines
                                        which automate the flow of data into Cloud Based warehouses. I also contribute
                                        to analysis and database infrastructure. 
                                    </h4>
                                    <br />
                                    <NavLink exact to="/projects">
                                        <h4 className="lower-button"> see my projects </h4>
                                    </NavLink>
                                </Col>
                                <Col>
                                    <img src={ Monument } alt="Monument Health" className="profile-img" />
                                </Col>
                            </Row>
                        </Container>,
                        <Container className="lower-content-body">
                            <Row className="profile-row lower">
                                <Col className="my-auto">
                                    <h2> Past Experience </h2>
                                    <br />
                                    <h4> 
                                        Previously I worked as an IT Technician for a network management
                                        contractor, Grand Mesa Software, where I developed technical know how and problem solving
                                        skills. Following my third year of high school I worked in game development
                                        at Synaptix Games.
                                    </h4>
                                </Col>
                                <Col>
                                    <img src={ Server } alt="Work Experience" className="profile-img" />
                                </Col>
                            </Row>
                        </Container>,
                        <Container className="lower-content-body">
                        <Row className="profile-row lower">
                            <Col className="my-auto">
                                <h2> AFK </h2>
                                <br />
                                <h4> 
                                    When I'm away from the keyboard (AFK), you can find me in the gym.
                                    For a year and a half I practiced powerlifting before transitioning 
                                    to competitive weightlifitng. In the spirit of sharing my passion for lifting, 
                                    I operate as an ISSA certified personal trainer.
                                </h4>
                            </Col>
                            <Col>
                                <img src={ Lift } alt="Work Experience" className="profile-img" />
                            </Col>
                        </Row>
                    </Container>
                ]}
                foot={
                    <Footer />
                }/>
            </div>
        );
    }

}

export default Home;