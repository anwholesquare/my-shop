import React, {lazy, Suspense} from 'react';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import {StateProvider} from "./Store/Store";


const Home = lazy(()=> import("./Home/Home"));
const Order = lazy(()=> import("./Order/Order"));
const Admin = lazy(() => import("./Admin/Admin"));
const App = () => {

  return (
    <div className="App">
      <StateProvider>
      <Router basename='/'>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/order/:ids/:quantity">
            <Order/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </Suspense>
      </Router>
      </StateProvider>
    </div>
  );
};

export default App;