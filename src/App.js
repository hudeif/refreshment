import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Counters from "./components/Counters";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginForm />
      </div>
    );
  }
}

export default App;
