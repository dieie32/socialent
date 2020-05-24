import React from "react";
import styles from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import LandingPage from "../../pages/LandingPage";
import LoginPage from "../../pages/LoginPage"
import Header from "../Header";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          {/* <Route path="/terms">
            <Terms />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
