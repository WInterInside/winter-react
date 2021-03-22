import './App.scss';
import HomePage from './pages/HomePage';
import ApartmentsPage from './pages/Apartments';
import MorerentPage from './pages/More';

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
        <Switch>
          <Route path="/More">
            <MorerentPage />
          </Route>
          <Route path="/Apartments">
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
