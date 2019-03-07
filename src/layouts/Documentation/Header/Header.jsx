import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        color="info"
        expand="xs"
        className="navbar-horizontal navbar-dark flex-row align-items-md-center ct-navbar"
        tag="header"
      >
        <Link to="/" className="navbar-brand mr-0 mr-md-2 navbar-absolute-logo">
          Blk• Design System React
        </Link>
        <Nav className="flex-row d-none d-md-flex" navbar>
          <NavItem>
            <NavLink href="#" className="p-2">
              1.0.0
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/creativetimofficial/black-dashboard-react"
              className="p-2"
            >
              <i className="fab fa-github" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://twitter.com/CreativeTim" className="p-2">
              <i className="fab fa-twitter" />
            </NavLink>
          </NavItem>
        </Nav>
        <div className="navbar-nav-scroll ml-md-auto">
          <Nav className="ct-navbar-nav flex-row" navbar>
            <NavItem>
              <Link to="/documentation" className="nav-link">
                <i className="ni ni-tv-2" /> Documentation
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                <i className="ni ni-scissors" /> Live Preview
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/creativetimofficial/blk-design-system-react">
                <i className="ni ni-shape-star" /> Help with a star
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    );
  }
}

export default Header;
