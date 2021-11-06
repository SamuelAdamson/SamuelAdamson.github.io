// HOME PAGE -- Portfolio
// Author: Samuel Adamson
import { Component } from 'react';
import { Container } from 'react-bootstrap';
// Components
import SplashScreen from './components/SplashScreen';

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
        this.handleHeadFadeIn();
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


            </div>
        );
    }

}

export default Home;