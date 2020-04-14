import React, {lazy, Suspense} from 'react';

import {
  BrowserRouter as Router,
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
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Router>
      </StateProvider>
    </div>
  );
};

export default App;