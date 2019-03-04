import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-top navbar-horizontal navbar-dark"
          expand="md"
        >
          <Container className="px-4">
            <NavbarBrand href="../index.html">
              <img alt="..." src={require("assets/img/brand/white.png")} />
            </NavbarBrand>

            <button
              aria-controls="navbarSupportedContent"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-collapse-main"
              data-toggle="collapse"
              id="navbar-collapse-main"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <UncontrolledCollapse
              id="navbar-collapse-main"
              navbar
              toggler="#navbar-collapse-main"
            >
              <div className="navbar-collapse-header d-md-none">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="../index.html">
                      <img
                        alt="..."
                        src={require("assets/img/brand/blue.png")}
                      />
                    </a>
                  </Col>

                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="sidenav-main"
                      aria-expanded={false}
                      aria-label="Toggle sidenav"
                      className="navbar-toggler"
                      data-target="#navbar-collapse-main"
                      data-toggle="collapse"
                      id="navbar-collapse-main"
                      type="button"
                    >
                      <span />

                      <span />
                    </button>
                  </Col>
                </Row>
              </div>

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link-icon" href="../index.html">
                    <i className="ni ni-planet" />

                    <span className="nav-link-inner--text">Dashboard</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="../examples/register.html"
                  >
                    <i className="ni ni-circle-08" />

                    <span className="nav-link-inner--text">Register</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="../examples/login.html"
                  >
                    <i className="ni ni-key-25" />

                    <span className="nav-link-inner--text">Login</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="../examples/profile.html"
                  >
                    <i className="ni ni-single-02" />

                    <span className="nav-link-inner--text">Profile</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
