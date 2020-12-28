import React, { Component } from "react";
import { Link } from "react-router-dom";
import RouterView from "./components/RouterView.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <RouterView />
      </div>
    );
  }
}

export default App;
