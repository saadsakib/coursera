import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Course from "./pages/Course";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/course">
          <Course />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/" exact render={() => <Redirect to="/signin" />} />
      </Switch>
    </Router>
  );
};

export default App;
