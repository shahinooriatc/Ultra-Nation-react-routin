import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';

import NoMatch from "./Component/NoMatch/NoMatch";
import CountryDetails from "./Component/CountryDetails/CountryDetails";

function App() {
  return (
    
    <Router>

    <Switch>

      <Route path='/home'>
        <Home />
      </Route>

      <Route path='/CountryDetails/:countryname'>
        <CountryDetails/>
      </Route>


      {/* <Route path='/CountryDetails/:CountryId'>
        <CountryDetails/>
      </Route> */}

      <Route exact path="/">
        <Home />
      </Route>
      <Route path='*'>
        <NoMatch />
      </Route>
    </Switch>

  </Router>



  );
}
export default App;