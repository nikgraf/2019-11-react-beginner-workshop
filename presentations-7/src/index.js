import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import Topic from "./Topic";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topic/apple">Topic: Apple</Link>
          </li>
          <li>
            <Link to="/topic/banana">Topic: Banana</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topic/:id">{match => <Topic match={match} />}</Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
