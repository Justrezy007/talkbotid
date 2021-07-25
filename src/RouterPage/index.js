import React from "react";
import { Home, Tutorial, Purchase, AboutUs,Post } from "../Page";
import {Footer,Navigation} from "../Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const RouterPage = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/purchase">
          <Purchase />
        </Route>
        <Route path="/tutorial">
          <Tutorial />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterPage;
