// NAVIGATION BAR -- All Pages
import { Navbar, Container, Button } from 'react-bootstrap';
// React Router
import { NavLink } from 'react-router-dom';
// Images for Navigation
import Site from '../../img/site-logo.png'


const Navi = () => {
    return (
        <div className="Navi">
            <Container className="pt-3">
                <Navbar expand="lg">
                    <div className="nav-item">
                        <NavLink exact to="/">
                            <img src={ Site } alt="samuel" />
                        </NavLink>
                    </div>

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

                </Navbar>
            </Container>
        </div>
    );
}

export default Navi;