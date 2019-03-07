import React from "react";

// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <div className=" ct-page-title">
          <h1 className=" ct-title" id="content">
            Alerts
          </h1>
          <div className=" avatar-group mt-3" />
        </div>
        <p className=" ct-lead">
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages.
        </p>
        <hr />
        <h3 id="examples">Examples</h3>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="alerts-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="alerts-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="alerts-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="alerts-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="alerts-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="alerts-component-tab"
              className=" tab-example-result fade show active"
              id="alerts-component"
              role="tabpanel"
            >
              <Alert className=" alert-default">
                <strong>Default!</strong>
                This is a default alert—check it out!
              </Alert>
              <Alert color="primary">
                <strong>Primary!</strong>
                This is a primary alert—check it out!
              </Alert>
              <Alert color="secondary">
                <strong>Secondary!</strong>
                This is a secondary alert—check it out!
              </Alert>
              <Alert color="info">
                <strong>Info!</strong>
                This is a info alert—check it out!
              </Alert>
              <Alert color="success">
                <strong>Success!</strong>
                This is a success alert—check it out!
              </Alert>
              <Alert color="danger">
                <strong>Danger!</strong>
                This is a danger alert—check it out!
              </Alert>
              <Alert color="warning">
                <strong>Warning!</strong>
                This is a warning alert—check it out!
              </Alert>
            </TabPane>
            <TabPane
              aria-labelledby="alerts-html-tab"
              className=" fade"
              id="alerts-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h3 id="with-icon">With icon</h3>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="alerts-icons-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="alerts-icons-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="alerts-icons-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="alerts-icons-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="alerts-icons-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="alerts-icons-component-tab"
              className=" tab-example-result fade show active"
              id="alerts-icons-component"
              role="tabpanel"
            >
              <Alert color="warning">
                <span className=" alert-inner--icon">
                  <i className=" ni ni-like-2" />
                </span>
                <span className=" alert-inner--text">
                  <strong>Warning!</strong>
                  This is a warning alert—check it out that has an icon too!
                </span>
              </Alert>
            </TabPane>
            <TabPane
              aria-labelledby="alerts-icons-html-tab"
              className=" fade"
              id="alerts-icons-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h3 id="dismissing">Dismissing</h3>
        <div className=" ct-example">
          <Nav
            className=" nav-tabs-code"
            id="alerts-disimissible-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="alerts-disimissible-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="alerts-disimissible-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="alerts-disimissible-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="alerts-disimissible-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="alerts-disimissible-component-tab"
              className=" tab-example-result fade show active"
              id="alerts-disimissible-component"
              role="tabpanel"
            >
              <UncontrolledAlert className=" alert-default" fade={false}>
                <span className=" alert-inner--icon">
                  <i className=" ni ni-like-2" />
                </span>
                <span className=" alert-inner--text">
                  <strong>Default!</strong>
                  This is a default alert—check it out!
                </span>
              </UncontrolledAlert>
              <UncontrolledAlert color="primary" fade={false}>
                <span className=" alert-inner--icon">
                  <i className=" ni ni-like-2" />
                </span>
                <span className=" alert-inner--text">
                  <strong>Primary!</strong>
                  This is a primary alert—check it out!
                </span>
              </UncontrolledAlert>
              <UncontrolledAlert color="secondary" fade={false}>
                <span className=" alert-inner--icon">
                  <i className=" ni ni-like-2" />
                </span>
                <span className=" alert-inner--text">
                  <strong>Secondary!</strong>
                  This is a secondary alert—check it out!
                </span>
              </UncontrolledAlert>
              <UncontrolledAlert color="info" fade={false}>
                <span className=" alert-inner--icon">
                  <i className=" ni ni-like-2" />
                </span>
                <span className=" alert-inner--text">
                  <strong>Info!</strong>
                  This is a info alert—check it out!
                </span>
              </UncontrolledAlert>
              <UncontrolledAlert color="success" fade={false}>
                <span className=" alert-inner--icon">
                  <i className=" ni ni-like-2" />
                </span>
                <span className=" alert-inner--text">
                  <strong>Success!</strong>
                  This is a success alert—check it out!
                </span>
              </UncontrolledAlert>
              <UncontrolledAlert color="danger" fade={false}>
                <span className=" alert-inner--icon">
                  <i className=" ni ni-like-2" />
                </span>
                <span className=" alert-inner--text">
                  <strong>Danger!</strong>
                  This is a danger alert—check it out!
                </span>
              </UncontrolledAlert>
              <UncontrolledAlert color="warning" fade={false}>
                <span className=" alert-inner--icon">
                  <i className=" ni ni-like-2" />
                </span>
                <span className=" alert-inner--text">
                  <strong>Warning!</strong>
                  This is a warning alert—check it out!
                </span>
              </UncontrolledAlert>
            </TabPane>
            <TabPane
              aria-labelledby="alerts-disimissible-html-tab"
              className=" fade"
              id="alerts-disimissible-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
      </>
    );
  }
}

export default Alerts;
