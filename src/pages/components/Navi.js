// NAVIGATION BAR -- All Pages
import { Navbar, Container } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
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

                    <NavbarCollapse>
                        
                    </NavbarCollapse>
                </Navbar>
            </Container>
        </div>
    );
}

export default Navi;