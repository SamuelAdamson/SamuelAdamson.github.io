// HOME PAGE
// Author: Samuel Adamson
import { Component } from 'react';
// Components
import SplashScreen from './components/SplashScreen';

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
                {this.state.renderSplash ? <SplashScreen unmountMe={ this.handleSplashUnmount } /> : null }
            </div>
        );
    }

}

export default Home;