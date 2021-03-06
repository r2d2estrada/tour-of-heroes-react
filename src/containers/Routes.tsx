import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Dashboard from "./Dashboard";
import Heroes from "./Heroes";
import HeroDetail from "./HeroDetail";
import NoMatch from "../components/NoMatch";

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container className="mt-3">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={Heroes} />
          <Route path="/heroes/:id" component={HeroDetail} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </Router>
  );
};

export default Routes;
