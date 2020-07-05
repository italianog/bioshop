import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.components";

const SamplePage = () => (
  <div>
    <h1>Sample PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={SamplePage} />
      </Switch>
    </div>
  );
}

export default App;
