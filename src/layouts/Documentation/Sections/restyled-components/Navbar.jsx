import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

const codeNav1 = `import React from "react";

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="bg-primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button className="navbar-toggler" id="navbarNav" type="button">
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarNav">
              <Nav navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Disabled
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

export default NavbarDocs;
`;

const codeNav2 = `import React from "react";

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="bg-primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarNavDropdown"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
              <Nav navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    id="navbarDropdownMenuLink"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    Dropdown link
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;
`;

const codeForms = `import React from "react";

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="bg-primary" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="/presentation.html">Brand</NavbarBrand>
              <button
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-toggle="collapse"
                type="button"
              >
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <Collapse isOpen={false} navbar toggler="#">
              <Nav navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    link
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;
`;

const codeText1 = `import React from "react";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-dark bg-primary">
          <Container>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;
`;

const codeText2 = `import React from "react";

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="bg-primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar w/ text
            </NavbarBrand>
            <button className="navbar-toggler" id="navbarText" type="button">
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarText">
              <Nav className="mr-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
              </span>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;
`;

const codeColorSchemes = `import React from "react";

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="bg-dark" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarColor01"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarColor01">
              <Nav className="mr-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar className="bg-success" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarColor02"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarColor02">
              <Nav className="mr-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar className="bg-danger" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarColor03"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarColor03">
              <Nav className="mr-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar className="bg-warning" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarColor04"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarColor04">
              <Nav className="mr-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar className="bg-white" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarColor05"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarColor05">
              <Nav className="mr-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup>
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar className="bg-primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarColor06"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarColor06">
              <Nav className="mr-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar className="bg-info" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarColor07"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarColor07">
              <Nav className="mr-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;
`;

const codeContainers = `import React from "react";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-light bg-primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;
`;

const codePlacementDefault = `import React from "react";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-light bg-primary">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Default
            </NavbarBrand>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;`;

const codePlacementFixedTop = `import React from "react";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="fixed-top navbar-light bg-primary">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Fixed top
            </NavbarBrand>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;`;

const codePlacementFixedBottom = `import React from "react";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="fixed-bottom navbar-light bg-primary">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Fixed bottom
            </NavbarBrand>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;`;

const codePlacementStickyTop = `import React from "react";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="sticky-top navbar-light bg-primary">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Sticky top
            </NavbarBrand>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;
`;

const codeToggler1 = `import React from "react";

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="bg-primary" expand="lg">
          <Container>
            <button
              className="navbar-toggler"
              id="navbarTogglerDemo01"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarTogglerDemo01">
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Hidden brand
              </NavbarBrand>
              <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;
`;

const codeToggler2 = `import React from "react";

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="bg-primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarTogglerDemo02"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarTogglerDemo02">
              <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;
`;

const codeToggler3 = `import React from "react";

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="bg-primary" expand="lg">
          <Container>
            <button
              className="navbar-toggler"
              id="navbarTogglerDemo03"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <UncontrolledCollapse navbar toggler="#navbarTogglerDemo03">
              <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;
`;

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <h1 className="ct-title" id="content">
          Navbar
        </h1>
        <p className="ct-lead">
          Documentation and examples for Bootstrap's powerful, responsive
          navigation header, the navbar. Includes support for branding,
          navigation, and more, including support for our collapse plugin.
        </p>
        <h2 id="how-it-works">How it works</h2>
        <p>
          Here’s what you need to know before getting started with the navbar:
        </p>
        <ul>
          <li>
            Navbars require a wrapping{" "}
            <code className="highlighter-rouge">.navbar</code> with{" "}
            <code className="highlighter-rouge">
              {`.navbar-expand{-sm|-md|-lg|-xl}`}
            </code>{" "}
            for responsive collapsing and{" "}
            <a href="#pablo" onClick={e => e.preventDefault()}>
              color scheme
            </a>{" "}
            classes.
          </li>
          <li>
            Navbars and their contents are fluid by default. Use{" "}
            <a href="#pablo" onClick={e => e.preventDefault()}>
              optional containers
            </a>{" "}
            to limit their horizontal width.
          </li>
          <li>
            Use our <a href="/docs/1.0/utilities/spacing/">spacing</a> and{" "}
            <a href="/docs/1.0/utilities/flex/">flex</a> utility classes for
            controlling spacing and alignment within navbars.
          </li>
          <li>
            Navbars are responsive by default, but you can easily modify them to
            change that. Responsive behavior depends on our Collapse JavaScript
            plugin.
          </li>
          <li>
            Navbars are hidden by default when printing. Force them to be
            printed by adding{" "}
            <code className="highlighter-rouge">.d-print</code>
            to the <code className="highlighter-rouge">.navbar</code>. See the{" "}
            <a href="/docs/1.0/utilities/display/">display</a> utility class.
          </li>
          <li>
            Ensure accessibility by using a{" "}
            <code className="highlighter-rouge">{`<nav>`}</code> element or, if
            using a more generic element such as a{" "}
            <code className="highlighter-rouge">{`<div>`}</code>, add a{" "}
            <code className="highlighter-rouge">role="navigation"</code> to
            every navbar to explicitly identify it as a landmark region for
            users of assistive technologies.
          </li>
        </ul>
        <p>Read on for an example and list of supported sub-components.</p>
        <h3 id="nav">Nav</h3>
        <p>
          Navbar navigation links build on our{" "}
          <code className="highlighter-rouge">.nav</code> options with their own
          modifier class and require the use of{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            toggler classes
          </a>{" "}
          for proper responsive styling.{" "}
          <strong>
            Navigation in navbars will also grow to occupy as much horizontal
            space as possible
          </strong>{" "}
          to keep your navbar contents securely aligned.
        </p>
        <p>
          Active states—with <code className="highlighter-rouge">.active</code>{" "}
          —to indicate the current page can be applied directly to{" "}
          <code className="highlighter-rouge">.nav-link</code>s or their
          immediate parent <code className="highlighter-rouge">.nav-item</code>
          s.
        </p>
        <div className="ct-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button className="navbar-toggler" id="navbarNav" type="button">
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarNav">
                <Nav navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Pricing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="disabled"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Disabled
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeNav1}
        </SyntaxHighlighter>
        <p>
          You may also utilize dropdowns in your navbar nav. Dropdown menus
          require a wrapping element for positioning, so be sure to use separate
          and nested elements for{" "}
          <code className="highlighter-rouge">.nav-item</code>
          and <code className="highlighter-rouge">.nav-link</code>
          as shown below.
        </p>
        <div className="ct-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarNavDropdown"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
                <Nav navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Pricing
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      caret
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      id="navbarDropdownMenuLink"
                      nav
                      onClick={e => e.preventDefault()}
                    >
                      Dropdown link
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeNav2}
        </SyntaxHighlighter>
        <h3 id="forms">Forms</h3>
        <p>
          Place various form controls and components within a navbar with{" "}
          <code className="highlighter-rouge">.form-inline</code>.
        </p>
        <div className="ct-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="/presentation.html">Brand</NavbarBrand>
                <button
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                >
                  <span className="navbar-toggler-icon" />
                  <span className="navbar-toggler-icon" />
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
              <Collapse isOpen={false} navbar toggler="#">
                <Nav navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      link
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      link
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup className="no-border">
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeForms}
        </SyntaxHighlighter>
        <h3 id="text">Text</h3>
        <p>
          Navbars may contain bits of text with the help of{" "}
          <code className="highlighter-rouge">.navbar-text</code>. This class
          adjusts vertical alignment and horizontal spacing for strings of text.
        </p>
        <div className="ct-example" data-example-id="">
          <Navbar className="navbar-dark bg-primary">
            <Container>
              <span className="navbar-text">
                Navbar text with an inline element
              </span>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeText1}
        </SyntaxHighlighter>
        <p>Mix and match with other components and utilities as needed.</p>
        <div className="ct-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar w/ text
              </NavbarBrand>
              <button className="navbar-toggler" id="navbarText" type="button">
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarText">
                <Nav className="mr-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Pricing
                    </NavLink>
                  </NavItem>
                </Nav>
                <span className="navbar-text">
                  Navbar text with an inline element
                </span>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeText2}
        </SyntaxHighlighter>
        <h2 id="color-schemes">Color schemes</h2>
        <p>
          Theming the navbar has never been easier thanks to the combination of
          theming classes and{" "}
          <code className="highlighter-rouge">background-color</code>
          utilities. Choose from{" "}
          <code className="highlighter-rouge">.navbar-light</code>
          for use with light background colors, or{" "}
          <code className="highlighter-rouge">.navbar-dark</code>
          for dark background colors. Then, customize with{" "}
          <code className="highlighter-rouge">.bg-*</code>
          utilities.
        </p>
        <div className="ct-example ct-color-schemes">
          <Navbar className="bg-dark" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarColor01"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarColor01">
                <Nav className="mr-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Pricing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      About
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup className="no-border">
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <Navbar className="bg-success" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarColor02"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarColor02">
                <Nav className="mr-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Pricing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      About
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup className="no-border">
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <Navbar className="bg-danger" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarColor03"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarColor03">
                <Nav className="mr-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Pricing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      About
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup className="no-border">
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <Navbar className="bg-warning" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarColor04"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarColor04">
                <Nav className="mr-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Pricing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      About
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup className="no-border">
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <Navbar className="bg-white" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarColor05"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarColor05">
                <Nav className="mr-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Pricing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      About
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup>
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarColor06"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarColor06">
                <Nav className="mr-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Pricing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      About
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup className="no-border">
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <Navbar className="bg-info" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarColor07"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarColor07">
                <Nav className="mr-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Pricing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      About
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup className="no-border">
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeColorSchemes}
        </SyntaxHighlighter>
        <h2 id="containers">Containers</h2>
        <p>
          When the container is within your navbar, its horizontal padding is
          removed at breakpoints lower than your specified{" "}
          <code className="highlighter-rouge">
            .navbar-expand{`{-sm|-md|-lg|-xl}`}
          </code>
          class. This ensures we’re not doubling up on padding unnecessarily on
          lower viewports when your navbar is collapsed.
        </p>
        <div className="ct-example" data-example-id="">
          <Navbar className="navbar-light bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeContainers}
        </SyntaxHighlighter>
        <h2 id="placement">Placement</h2>
        <p>
          Use our <a href="/docs/1.0/utilities/position/">position utilities</a>
          to place navbars in non-static positions. Choose from fixed to the
          top, fixed to the bottom, or stickied to the top (scrolls with the
          page until it reaches the top, then stays there). Fixed navbars use{" "}
          <code className="highlighter-rouge">position: fixed</code>, meaning
          they’re pulled from the normal flow of the DOM and may require custom
          CSS (e.g., <code className="highlighter-rouge">padding-top</code>
          on the <code className="highlighter-rouge">{`<body>`}</code>) to
          prevent overlap with other elements.
        </p>
        <p>
          Also note that{" "}
          <strong>
            <code className="highlighter-rouge">.sticky-top</code>
            uses <code className="highlighter-rouge">position: sticky</code>,
            which{" "}
            <a href="#pablo" onClick={e => e.preventDefault()}>
              isn’t fully supported in every browser
            </a>
          </strong>
          .
        </p>
        <div className="ct-example" data-example-id="">
          <Navbar className="navbar-light bg-primary">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Default
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePlacementDefault}
        </SyntaxHighlighter>
        <div className="ct-example" data-example-id="">
          <Navbar className="fixed-top navbar-light bg-primary">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Fixed top
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePlacementFixedTop}
        </SyntaxHighlighter>
        <div className="ct-example" data-example-id="">
          <Navbar className="fixed-bottom navbar-light bg-primary">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Fixed bottom
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePlacementFixedBottom}
        </SyntaxHighlighter>
        <div className="ct-example" data-example-id="">
          <Navbar className="sticky-top navbar-light bg-primary">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Sticky top
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePlacementStickyTop}
        </SyntaxHighlighter>
        <h2 id="responsive-behaviors">Responsive behaviors</h2>
        <p>
          Navbars can utilize{" "}
          <code className="highlighter-rouge">.navbar-toggler</code>,{" "}
          <code className="highlighter-rouge">.navbar-collapse</code>, and{" "}
          <code className="highlighter-rouge">
            {`.navbar-expand{-sm|-md|-lg|-xl}`}
          </code>
          classes to change when their content collapses behind a button. In
          combination with other utilities, you can easily choose when to show
          or hide particular elements.
        </p>
        <p>
          For navbars that never collapse, add the{" "}
          <code className="highlighter-rouge">.navbar-expand</code>
          class on the navbar. For navbars that always collapse, don’t add any{" "}
          <code className="highlighter-rouge">.navbar-expand</code>
          class.
        </p>
        <h3 id="toggler">Toggler</h3>
        <p>
          Navbar togglers are left-aligned by default, but should they follow a
          sibling element like a{" "}
          <code className="highlighter-rouge">.navbar-brand</code>, they’ll
          automatically be aligned to the far right. Reversing your markup will
          reverse the placement of the toggler. Below are examples of different
          toggle styles.
        </p>
        <p>
          With no <code className="highlighter-rouge">.navbar-brand</code>
          shown in lowest breakpoint:
        </p>
        <div className="ct-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <button
                className="navbar-toggler"
                id="navbarTogglerDemo01"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarTogglerDemo01">
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Hidden brand
                </NavbarBrand>
                <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Link
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="disabled"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Disabled
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup className="no-border">
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeToggler1}
        </SyntaxHighlighter>
        <p>With a brand name shown on the left and toggler on the right:</p>
        <div className="ct-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarTogglerDemo02"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarTogglerDemo02">
                <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Link
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="disabled"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Disabled
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup className="no-border">
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeToggler2}
        </SyntaxHighlighter>
        <p>With a toggler on the left and brand name on the right:</p>
        <div className="ct-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <button
                className="navbar-toggler"
                id="navbarTogglerDemo03"
                type="button"
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <UncontrolledCollapse navbar toggler="#navbarTogglerDemo03">
                <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Link
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="disabled"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Disabled
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form className="form-inline ml-auto">
                  <FormGroup className="no-border">
                    <Input placeholder="Search" type="text" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeToggler3}
        </SyntaxHighlighter>
        <h2 id="props">Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/navbar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap Navbar documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default NavbarDocs;
