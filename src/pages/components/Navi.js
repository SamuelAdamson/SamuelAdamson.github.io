// NAVIGATION BAR -- All Pages
import { Component } from 'react';
import { Navbar, Container, Button, Offcanvas } from 'react-bootstrap';
// React Router
import { NavLink } from 'react-router-dom';
// Images for Navigation
import Site from '../../img/site-logo.png'


class Navi extends Component {
    constructor() {
        super();

        // States
        this.state = {
            fullScreen: true
        }

        // Binds
        this.handleNotFullScreen = this.handleNotFullScreen.bind(this);
    }

    // Toggle is available -- not full screen
    handleNotFullScreen() {
        // Update State
        this.setState({
            fullScreen: false
        })
    }

    render() {
        return (
            <div className="Navi">
                <Container className="pt-3">
                    <Navbar expand="lg">
                        <div className="nav-item">
                            <NavLink exact to="/">
                                <img src={ Site } alt="samuel" />
                            </NavLink>
                        </div>
    
                        <Navbar.Toggle onClick={ this.handleNotFullScreen } aria-controls="offcanvasNavbar" />
                        
                        {this.state.fullScreen ?  
                            <Navbar.Collapse className="justify-content-end"> 
                                <div className="right-nav-item">
                                    <NavLink exact to="/projects">
                                        <Button variant="custom" size="lg"> 
                                            <h3> projects </h3> 
                                        </Button>
                                    </NavLink>
                                </div>
                                <div className="right-nav-item">
                                    <Button variant="custom-social" size="lg" href="https://github.com/SamuelAdamson" target="_blank" rel="noreferrer"> 
                                        <h3> GitHub </h3> 
                                    </Button>
                                </div>
                                <div className="right-nav-item">
                                    <Button variant="custom-social" size="lg" href="https://www.linkedin.com/in/samuel-adamson-4397051b8/" target="_blank" rel="noreferrer"> 
                                        <h3> LinkedIn </h3> 
                                    </Button>
                                </div>
                            </Navbar.Collapse>
                        : null }

                        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel"> navigate </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="nav-item">
                                    <NavLink exact to="/projects">
                                        <Button variant="custom" size="lg"> 
                                            <h5> projects </h5> 
                                        </Button>
                                    </NavLink>
                                </div>
                                <div className="nav-item">
                                    <Button variant="custom" size="lg" href="https://github.com/SamuelAdamson" target="_blank" rel="noreferrer"> 
                                        <h5> GitHub </h5> 
                                    </Button>
                                </div>
                                <div className="nav-item">
                                    <Button variant="custom" size="lg" href="https://www.linkedin.com/in/samuel-adamson-4397051b8/" target="_blank" rel="noreferrer"> 
                                        <h5> LinkedIn </h5> 
                                    </Button>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Navi;