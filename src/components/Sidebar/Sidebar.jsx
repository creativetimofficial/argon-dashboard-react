/*eslint-disable*/
import React from "react";
// import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  render() {
    const { bgColor, routes, logo } = this.props;
    let logoImg = null;
    let logoText = null;
    if (logo !== undefined) {
      if (logo.outterLink !== undefined) {
        logoImg = (
          <a
            href={logo.outterLink}
            className="simple-text logo-mini"
            target="_blank"
            onClick={this.props.toggleSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </a>
        );
        logoText = (
          <a
            href={logo.outterLink}
            className="simple-text logo-normal"
            target="_blank"
            onClick={this.props.toggleSidebar}
          >
            {logo.text}
          </a>
        );
      } else {
        logoImg = (
          <Link
            to={logo.innerLink}
            className="simple-text logo-mini"
            onClick={this.props.toggleSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </Link>
        );
        logoText = (
          <Link
            to={logo.innerLink}
            className="simple-text logo-normal"
            onClick={this.props.toggleSidebar}
          >
            {logo.text}
          </Link>
        );
      }
    }
    return (
      <Navbar
        className=" navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            aria-controls="sidenav-main"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className=" navbar-toggler"
            data-target="#sidenav-collapse-main"
            data-toggle="collapse"
            id="sidenav-collapse-main"
            type="button"
          >
            <span className=" navbar-toggler-icon" />
          </button>
          {/* Brand */}
          <NavbarBrand className=" pt-0" href="./index.html">
            <img
              alt="..."
              className=" navbar-brand-img"
              src={require("assets/img/brand/blue.png")}
            />
          </NavbarBrand>
          {/* User */}
          <Nav className=" align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <NavLink
                aria-expanded={false}
                aria-haspopup={true}
                className=" nav-link-icon"
                data-toggle="dropdown"
                href="#pablo"
                onClick={e => e.preventDefault()}
                role="button"
              >
                <i className=" ni ni-bell-55" />
              </NavLink>
              <DropdownMenu
                aria-labelledby="navbar-default_dropdown_1"
                className=" dropdown-menu-arrow"
                right
              >
                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                  Another action
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <NavLink
                aria-expanded={false}
                aria-haspopup={true}
                data-toggle="dropdown"
                href="#pablo"
                onClick={e => e.preventDefault()}
                role="button"
              >
                <Media className=" align-items-center">
                  <span className=" avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </span>
                </Media>
              </NavLink>
              <DropdownMenu className=" dropdown-menu-arrow" right>
                <DropdownItem className=" noti-title" header tag="div">
                  <h6 className=" text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem href="./examples/profile.html">
                  <i className=" ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem href="./examples/profile.html">
                  <i className=" ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem href="./examples/profile.html">
                  <i className=" ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem href="./examples/profile.html">
                  <i className=" ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                  <i className=" ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* Collapse */}
          <UncontrolledCollapse
            id="sidenav-collapse-main"
            navbar
            toggler="#sidenav-collapse-main"
          >
            {/* Collapse header */}
            <div className=" navbar-collapse-header d-md-none">
              <Row>
                <Col className=" collapse-brand" xs="6">
                  <a href="./index.html">
                    <img alt="..." src={require("assets/img/brand/blue.png")} />
                  </a>
                </Col>
                <Col className=" collapse-close" xs="6">
                  <button
                    aria-controls="sidenav-main"
                    aria-expanded={false}
                    aria-label="Toggle sidenav"
                    className=" navbar-toggler"
                    data-target="#sidenav-collapse-main"
                    data-toggle="collapse"
                    id="sidenav-collapse-main"
                    type="button"
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {/* Form */}
            <Form className=" mt-4 mb-3 d-md-none">
              <InputGroup className=" input-group-rounded input-group-merge">
                <Input
                  aria-label="Search"
                  className=" form-control-rounded form-control-prepended"
                  placeholder="Search"
                  type="search"
                />
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <span className=" fa fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Form>
            {/* Navigation */}
            <Nav navbar>
              <NavItem>
                <NavLink href="./index.html">
                  <i className=" ni ni-tv-2 text-primary" />
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./examples/icons.html">
                  <i className=" ni ni-planet text-blue" />
                  Icons
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./examples/maps.html">
                  <i className=" ni ni-pin-3 text-orange" />
                  Maps
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./examples/profile.html">
                  <i className=" ni ni-single-02 text-yellow" />
                  User profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./examples/tables.html">
                  <i className=" ni ni-bullet-list-67 text-red" />
                  Tables
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./examples/login.html">
                  <i className=" ni ni-key-25 text-info" />
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./examples/register.html">
                  <i className=" ni ni-circle-08 text-pink" />
                  Register
                </NavLink>
              </NavItem>
            </Nav>
            {/* Divider */}
            <hr className=" my-3" />
            {/* Heading */}
            <h6 className=" navbar-heading text-muted">Documentation</h6>
            {/* Navigation */}
            <Nav className=" mb-md-3" navbar>
              <NavItem>
                <NavLink href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html">
                  <i className=" ni ni-spaceship" />
                  Getting started
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html">
                  <i className=" ni ni-palette" />
                  Foundation
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html">
                  <i className=" ni ni-ui-04" />
                  Components
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  bgColor: "primary",
  routes: [{}]
};

Sidebar.propTypes = {
  bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string
  })
};

export default Sidebar;
