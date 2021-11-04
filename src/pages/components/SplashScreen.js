// SPLASH SCREEN -- Home Page
// Author: Samuel Adamson 
import { Component } from 'react';

class SplashScreen extends Component {
    constructor() {
        super();

        // Set State
        this.state = {
            splashClass: 'SplashScreen',
            headClass: 'splash-head'
        }

        // Bind functions
        this.unmountSplash = this.unmountSplash.bind(this);
    }

    // Unmount splash screen
    unmountSplash() {
        this.props.unmountMe();
    }

    // When Component Mounts
    componentDidMount() {
        let time = 1200;

        // Fade in Text
        setTimeout(() => {
            this.setState({
                headClass: 'splash-head active'
            });
        }, time);

        // Underline Text
        setTimeout(() => {
            this.setState({
                headClass: 'splash-head active underline'
            });
        }, time += 1200);

        // Remove Underline
        setTimeout(() => {
            this.setState({
                headClass: 'splash-head active'
            });
        }, time += 1200);

        // Fade Out Splash Screen
        setTimeout(() => {
            this.setState({
                splashClass: 'SplashScreen fadeOut'
            });

            // Unmount component (Animation takes 1.2s)
            setTimeout(() => {
                this.unmountSplash();
            }, 2000)

        }, time += 1500);


    }

    render() {
        return (
            <div className={this.state.splashClass}>
                <h1 className={this.state.headClass}>
                    samuel
                </h1>
            </div>
        );
    };
}

export default SplashScreen;