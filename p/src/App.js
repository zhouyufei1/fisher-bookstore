import React, { Component } from "react";
import "./App.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./Routes"

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">Fisher Bookstore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria_controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <navItem>
                <Nav.Link href="/books">Books</Nav.Link>
              </navItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}
