import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./components/Layout";
import Card from "./components/Card";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Card} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
