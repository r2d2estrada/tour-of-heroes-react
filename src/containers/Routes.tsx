import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Dashboard from "./Dashboard";
import Heroes from "./Heroes";

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container className="mt-3">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/heroes" component={Heroes} />
        </Switch>
      </Container>
    </Router>
  );
};

export default Routes;
