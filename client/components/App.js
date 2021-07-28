import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Auth from './Auth'

const Home = () => {
  return (
    <div id="Home">
      <h1>
        Wdxcfgvhbjnkmvcfgvhbjnklm?
      </h1>
      <h2>Be ready to give assignments</h2>
    </div>
  );
};

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
         <main><Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/login" component={Home} />
              </Switch>
          </main>
          </div>
      </Router>)}}

export default Routes;
