import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Header from './Component/Header/Header';

import Home from './Component/Home/Home';
import About from './Component/About/About';
import User from './Component/User/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <ul className='menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
          <button to="/button">buton</button>
        </ul>
        <Switch>
          <Route path='/' exact component='Home'>
            <Home />
          </Route>
          <Route path='/buon'>

          </Route>
          <Route path='/about' component='About'>
            <About />
          </Route>
          <Route path='/user' component='User'>
            <User />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}
export default App;