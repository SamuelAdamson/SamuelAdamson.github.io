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
            fullScreen: true,
            showOffcanvas: false
        }

        // Binds
        this.handleToggleOffcanvas = this.handleToggleOffcanvas.bind(this);
        this.handleOffcanvasClose = this.handleOffcanvasClose.bind(this);
    }

    // Toggle is available -- not full screen, and open offcanvas
    handleToggleOffcanvas() {
        // Update State
        this.setState({
            fullScreen: false,
            showOffcanvas: true
        })
    }

    // Off Canvas Close
    handleOffcanvasClose() {
        // Update State
        this.setState({
            showOffcanvas: false
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
    
                        <Navbar.Toggle onClick={ this.handleToggleOffcanvas } aria-controls="offcanvasNavbar" />
                        
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

                
                        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" show={this.state.showOffcanvas}>
                            <Offcanvas.Header>
                                <Button className="btn-close" variant="none" onClick={ this.handleOffcanvasClose }></Button>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="nav-item">
                                    <NavLink exact to="/projects">
                                        <Button variant="custom" size="lg" onClick={ this.handleOffcanvasClose }> 
                                            <h4> projects </h4> 
                                        </Button>
                                    </NavLink>
                                </div>
                                <div className="nav-item">
                                    <Button variant="custom" size="lg" href="https://github.com/SamuelAdamson" target="_blank" rel="noreferrer"> 
                                        <h4> GitHub </h4> 
                                    </Button>
                                </div>
                                <div className="nav-item">
                                    <Button variant="custom" size="lg" href="https://www.linkedin.com/in/samuel-adamson-4397051b8/" target="_blank" rel="noreferrer"> 
                                        <h4> LinkedIn </h4> 
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