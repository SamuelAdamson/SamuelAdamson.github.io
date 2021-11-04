// REACT APP
// Author: Samuel Adamson
import './css/App.css';
// React Router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navi from './pages/components/Navi';
// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
    return (
        <div className="App">
            <Router hashType="slash">
                <Navi />
                <Switch>
                    <Route exact path = "/" component={ Home } />
                    <Route exact path = "/projects" component={ Projects } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
