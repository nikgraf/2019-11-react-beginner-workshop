import React from "react";
import { Route, Switch, Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <ul>
        <li>
          <Link to="/about/component">Component</Link>
        </li>
        <li>
          <Link to="/about/element">Element</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about/component">Hello Component</Route>
        <Route path="/about/element">Hello Element</Route>
      </Switch>
    </div>
  );
}
