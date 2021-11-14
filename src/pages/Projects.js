// PROJECTS PAGE -- Portfolio
// Author: Samuel Adamson
import { Component } from 'react';
// Components
import { Container } from 'react-bootstrap';
import DynoFull from './components/DynoFull';
import Proj from './components/Proj';
import Footer from './components/Footer';
// Crypto Project Images
import crypto1 from '../img/projects/crypto1.png';
import crypto2 from '../img/projects/crypto2.png';
import crypto3 from '../img/projects/crypto3.png';
// Weather Airport Mapping Images
import WAMap1 from '../img/projects/wa-map1.png';
import WAMap2 from '../img/projects/wa-map2.png';
import WAMap3 from '../img/projects/wa-map3.png';


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

                <DynoFull thresh={ 0.1 } props={[
                    <Proj image1={ crypto1 } image2={ crypto2 } image3={ crypto3 } variant={ null }>
                        <h1> Crypto </h1>
                        <br />
                        <h4> 
                            Utilizing the CoinGecko REST API, I created an Cryptocurrency Sparkline
                            web-application with live updating prices, market caps, and other financial
                            data. In the future I plan to expand this application by adding 
                            machine learning based predictive modeling.
                        </h4>
                        <br />
                        <div className="align-box">
                            <a href="https://crypto-sparkline.herokuapp.com/" target="_blank" rel="noreferrer">
                                <h4 className="lower-button"> project </h4>
                            </a>
                            <a href="https://github.com/SamuelAdamson/crypto-sa" target="_blank" rel="noreferrer">
                                <h4 className="lower-button"> repository </h4>
                            </a>
                        </div>
                    </Proj>,
                    <Proj image1={ WAMap1 } image2={ WAMap2 } image3={ WAMap3 } variant="dark">
                    <h1> Airport Proximity and Climate Mapping </h1>
                    <br />
                    <h4> 
                        Utlizing public datasets warehoused in Google Cloud Platform, I created
                        a python project that displays optimal locations in mainland US based on
                        proximity to airports and mild weather. Weather variables considered include 
                        average temperature and precipitation. 
                    </h4>
                    <br />
                    <div className="align-box">
                        <a href="https://github.com/SamuelAdamson/Weather-AirportProximity-Mapping" target="_blank" rel="noreferrer">
                            <h4 className="lower-button"> repository </h4>
                        </a>
                    </div>
                </Proj>
                ]}
                foot={
                    <Footer />
                }/>
            </div>
        );
    }
}

export default Projects;