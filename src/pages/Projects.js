// PROJECTS PAGE -- Portfolio
// Author: Samuel Adamson
import { Component } from 'react';
// Components
import { Container } from 'react-bootstrap';

// First instance
let firstInstance = true;

class Projects extends Component {
    constructor(props) {
        super(props);

        // States
        this.state = {
            headerOne: null,
            headerTwo: null
        }

        // Binds
        this.handleHeadFadeIn = this.handleHeadFadeIn.bind(this);
    }

    // On mount
    componentDidMount() {
        // Fade in on yeeta skeeta
        if(firstInstance) {
            this.handleHeadFadeIn();
        } else {
            // Fade in fast
            setTimeout(() => {
                this.setState({
                    headerOne: 'show',
                    headerTwo: 'show'
                })
            }, 70)
        }
    }

    // Increment number of home instances
    componentWillUnmount() {
        // Update first instance
        firstInstance = false;
    }

    // Fade in header
    handleHeadFadeIn() {
        // Fade in header 1
        setTimeout(() => {
            // Update state
            this.setState({
                headerOne: 'show' 
            })
        }, 700)

        // Fade in header 2
        setTimeout(() => {
            // Update state
            this.setState({
                headerTwo: 'show' 
            })
        }, 1100)
    }

    render() {
        return(
            <div className="Projects">
                <Container>
                    <div className="proj-header">
                        <h1 className={this.state.headerOne}> <strong> My projects </strong> </h1>
                        <h2 className={this.state.headerTwo}> 
                            the best way to predict the future is to invent it - alan kay 
                        </h2>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Projects;