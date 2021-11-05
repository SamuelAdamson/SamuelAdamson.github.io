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
            renderSplash: true
        }

        // Bind functions
        this.handleSplashUnmount = this.handleSplashUnmount.bind(this);
    }

    // Increment number of home instances
    componentWillUnmount() {
        firstInstance = false;
    }

    // Unmounts splash Screen
    handleSplashUnmount() {
        this.setState({
            renderSplash: false
        });
    }

    // Render components
    render() {
        // Note Splash Screen rendered conditionally
        return (
            <div className="Home">
                {this.state.renderSplash && firstInstance ? <SplashScreen unmountMe={ this.handleSplashUnmount } /> : null }

                <Container>
                    <div className="home-header">
                        <h1> <strong> Samuel Adamson </strong> </h1>
                        <h2> Data engineer, computer science student, weightlifter </h2>
                    </div>
                </Container>
            </div>
        );
    }

}

export default Home;