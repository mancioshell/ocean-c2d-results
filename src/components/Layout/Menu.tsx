import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();
  const [active, setActive] = useState<string | undefined>("assets");

  useEffect(() => {
    return history.listen((location) => {
      const path = location.pathname.substring(1);
      setActive(path);
    });
  }, [history]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">
          <i className="fa-solid fa-earth-europe"></i> Gaia-X Compute to Data
          Flow Results
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={active} className="container-fluid">
            <Nav.Item>
              <Nav.Link
                eventKey="home"
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  history?.push("/home");
                }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Menu };

export default Menu;
