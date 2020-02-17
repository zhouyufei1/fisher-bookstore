import React, { Component } from "react";
import "./App.css";
import "./Routes.js";

export default class App extends Component {
  render() {
    return( 
    <div className= "App container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Fisher Bookstore</Link>
        </Navbar.Brand>
      </Navbar>
      <Routes />
    </div>
    );
  }
}
