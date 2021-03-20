import './App.scss';
import HomePage from './pages/HomePage';
import ApartmentsPage from './pages/ApartmentsPage';
import MorerentPage from './pages/MorerentPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/MorerentPage">More RENT</Link>
          </li>
          <li>
            <Link to="/Apartmentspage">Apartments PAGE</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/MorerentPage">
            <MorerentPage />
          </Route>
          <Route path="/Apartmentspage">
            <ApartmentsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
