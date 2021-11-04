// REACT APP
// Author: Samuel Adamson
import './css/App.css';
// React Bootstrap
import { Container } from 'react-bootstrap';
// React Router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navi from './pages/components/Navi';

// Pages
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <Router hashType="slash" basename="home">
                <Navi />
                <Switch>
                    <Route exact path = "/" component={ Home } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
