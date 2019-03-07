import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar className=" navbar-horizontal navbar-expand navbar-dark flex-row align-items-md-center ct-navbar" color="info" tag="header">
        <NavbarBrand
          aria-label="Bootstrap"
          className=" mr-0 mr-md-2"
          to="/documentation/overview"
          tag={Link}
        >
          <img alt="..." src={require("assets/img/brand/white.png")} />
          <sup>Docs</sup>
        </NavbarBrand>
        <Nav className=" flex-row mr-auto ml-4 d-none d-md-flex" navbar>
          <NavItem>
            <NavLink to="/" tag={Link}>Live Preview</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/creativetimofficial/argon-dashboard/issues"
              target="_blank"
            >
              Support
            </NavLink>
          </NavItem>
        </Nav>
        <div className=" d-none d-sm-block ml-auto">
          <Nav className=" ct-navbar-nav flex-row align-items-center" navbar>
            <UncontrolledDropdown className=" d-none" nav>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                className=" text-white mr-sm-3"
                color="link"
                data-toggle="dropdown"
                href="#pablo"
                id="ct-versions"
                onClick={e => e.preventDefault()}
              >
                1.0.0
              </DropdownToggle>
              <DropdownMenu aria-labelledby="ct-versions">
                <DropdownItem active href="../..//docs/1.0.0/">
                  Latest - 1.0.0
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                className=" nav-link-icon"
                href="https://www.facebook.com/creativetim"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className=" fab fa-facebook-square" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className=" nav-link-icon"
                href="https://twitter.com/creativetim"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className=" fab fa-twitter" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className=" nav-link-icon"
                href="https://www.instagram.com/creativetimofficial"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className=" fab fa-instagram" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className=" nav-link-icon"
                href="https://www.instagram.com/creativetimofficial"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className=" fab fa-dribbble" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className=" nav-link-icon"
                href="https://github.com/creativetimofficial"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className=" fab fa-github" />
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Button
          className=" btn-neutral btn-icon ml-sm-3 d-none d-md-block"
          color="default"
          href="https://www.creative-tim.com/product/argon-dashboard"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className=" btn-inner--icon">
            <i className=" fas fa-download mr-2" />
          </span>
          <span className=" nav-link-inner--text">Download</span>
        </Button>
        <button
          aria-controls="ct-docs-nav"
          aria-expanded={false}
          aria-label="Toggle docs navigation"
          className=" navbar-toggler ct-search-docs-toggle d-block d-md-none ml-auto ml-sm-0"
          data-target="#ct-docs-nav"
          data-toggle="collapse"
          id="ct-docs-nav"
          type="button"
        >
          <span className=" navbar-toggler-icon" />
        </button>
      </Navbar>
    );
  }
}

export default Header;
