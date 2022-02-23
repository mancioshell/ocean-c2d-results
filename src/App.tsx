import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Menu } from "Components/Layout/Menu";
import { Footer } from "Components/Layout/Footer";
import { Messages } from "Components/Layout/Messages";

import UiProvider from "Providers/UiProvider";
import Home from "Pages/Home/Home";

function App() {
  return (
    <Router>
      <UiProvider>
        <Menu></Menu>

        <Container className="justify-content-md-center mt-5" fluid>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Messages></Messages>
            </Col>
          </Row>

          <Row className="min-container">
            <Col md={{ span: 10, offset: 1 }}>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>

                <Redirect to="/home" />
              </Switch>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={{ span: 10, offset: 1 }}>
              <Footer></Footer>
            </Col>
          </Row>
        </Container>
      </UiProvider>
    </Router>
  );
}

export default App;
