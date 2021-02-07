import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Course from "./pages/Course";

const App = () => {
  let subjects = [
    {
      name: "Math",
      enrolled: true,
    },
    {
      name: "Computer Science",
      enrolled: false,
    },
    {
      name: "English",
      enrolled: false,
    },
    {
      name: "Physics",
      enrolled: true,
    },
  ];

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
        <Route path="/">
          <HomePage subjects={subjects} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
