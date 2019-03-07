import React from "react";

// reactstrap components
import {
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Dropdowns extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Dropdowns
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Toggle contextual overlays for displaying lists of links and more with
          the Bootstrap dropdown plugin.
        </p>
        <hr />
        <h2 id="examples">Examples</h2>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="dropdown-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="dropdown-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="dropdown-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="dropdown-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="dropdown-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="dropdown-component-tab"
              className="tab-example-result fade show active"
              id="dropdown-component"
              role="tabpanel"
            >
              <UncontrolledDropdown>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="secondary"
                  data-toggle="dropdown"
                  id="dropdownMenuButton"
                  type="button"
                >
                  Regular
                </DropdownToggle>
                <DropdownMenu aria-labelledby="dropdownMenuButton">
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Something else here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink2"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/flags/US.png")}
                  />
                  Flags
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink2">
                  <li>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/icons/flags/DE.png")}
                      />
                      Deutsch
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/icons/flags/GB.png")}
                      />
                      English(UK)
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/icons/flags/FR.png")}
                      />
                      Français
                    </DropdownItem>
                  </li>
                </DropdownMenu>
              </UncontrolledDropdown>
            </TabPane>
            <TabPane
              aria-labelledby="dropdown-html-tab"
              className="fade"
              id="dropdown-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="colors">Colors</h2>
        <p>The best part is you can do this with any button variant, too:</p>
        <div className="ct-example">
          <Nav
            className="nav-tabs-code"
            id="dropdown-colors-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="dropdown-colors-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="dropdown-colors-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="dropdown-colors-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="dropdown-colors-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="dropdown-colors-component-tab"
              className="tab-example-result fade show active"
              id="dropdown-colors-component"
              role="tabpanel"
            >
              <ButtonGroup>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="primary"
                  data-toggle="dropdown"
                  type="button"
                >
                  Primary
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Something else here
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Separated link
                  </DropdownItem>
                </DropdownMenu>
              </ButtonGroup>
              {/* /btn-group */}
              <ButtonGroup>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="secondary"
                  data-toggle="dropdown"
                  type="button"
                >
                  Secondary
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Something else here
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Separated link
                  </DropdownItem>
                </DropdownMenu>
              </ButtonGroup>
              {/* /btn-group */}
              <ButtonGroup>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="success"
                  data-toggle="dropdown"
                  type="button"
                >
                  Success
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Something else here
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Separated link
                  </DropdownItem>
                </DropdownMenu>
              </ButtonGroup>
              {/* /btn-group */}
              <ButtonGroup>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="info"
                  data-toggle="dropdown"
                  type="button"
                >
                  Info
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Something else here
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Separated link
                  </DropdownItem>
                </DropdownMenu>
              </ButtonGroup>
              {/* /btn-group */}
              <ButtonGroup>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="warning"
                  data-toggle="dropdown"
                  type="button"
                >
                  Warning
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Something else here
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Separated link
                  </DropdownItem>
                </DropdownMenu>
              </ButtonGroup>
              {/* /btn-group */}
              <ButtonGroup>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="danger"
                  data-toggle="dropdown"
                  type="button"
                >
                  Danger
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Something else here
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Separated link
                  </DropdownItem>
                </DropdownMenu>
              </ButtonGroup>
              {/* /btn-group */}
            </TabPane>
            <TabPane
              aria-labelledby="dropdown-colors-html-tab"
              className="fade"
              id="dropdown-colors-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
      </>
    );
  }
}

export default Dropdowns;
