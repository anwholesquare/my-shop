import React from 'react';
import Home from "./Home/Home";
import Order from "./Order/Order";
import Admin from "./Admin/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';


const App = () => {

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/order/:ids/:quantity">
            <Order/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

export default App;