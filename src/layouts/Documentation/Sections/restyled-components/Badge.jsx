import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Badges extends React.Component {
  render() {
    return (
      <>
        <div className=" ct-page-title">
          <h1 className=" ct-title" id="content">
            Badges
          </h1>
          <div className=" avatar-group mt-3" />
        </div>
        <p className=" ct-lead">
          Documentation and examples for badges, our small count and labeling
          component.
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <p>
          Badges can be used as part of links or buttons to provide a counter.
        </p>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="badge-button-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="badge-button-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="badge-button-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="badge-button-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="badge-button-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="badge-button-component-tab"
              className=" tab-example-result fade show active"
              id="badge-button-component"
              role="tabpanel"
            >
              <Button color="primary" type="button">
                <span>Notifications</span>
                <Badge className=" badge-white">4</Badge>
              </Button>
            </TabPane>
            <TabPane
              aria-labelledby="badge-button-html-tab"
              className=" fade"
              id="badge-button-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="contextual-variations">Contextual variations</h2>
        <p>
          Add any of the below mentioned modifier classes to change the
          appearance of a badge.
        </p>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="badges-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="badges-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="badges-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="badges-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="badges-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="badges-component-tab"
              className=" tab-example-result fade show active"
              id="badges-component"
              role="tabpanel"
            >
              <Badge className=" badge-default">Default</Badge>
              <Badge color="primary">Primary</Badge>
              <Badge color="secondary">Secondary</Badge>
              <Badge color="info">Info</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="danger">Danger</Badge>
              <Badge color="warning">Warning</Badge>
            </TabPane>
            <TabPane
              aria-labelledby="badges-html-tab"
              className=" fade"
              id="badges-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="pill-badges">Pill badges</h2>
        <p>
          Use the <code className=" highlighter-rouge">.badge-pill</code>
          modifier class to make badges more rounded (with a larger{" "}
          <code className=" highlighter-rouge">border-radius</code>
          and additional horizontal{" "}
          <code className=" highlighter-rouge">padding</code>
          ). Useful if you miss the badges from v3.
        </p>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="badge-pills-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="badge-pills-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="badge-pills-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="badge-pills-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="badge-pills-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="badge-pills-component-tab"
              className=" tab-example-result fade show active"
              id="badge-pills-component"
              role="tabpanel"
            >
              <Badge className=" badge-default" pill>
                Default
              </Badge>
              <Badge color="primary" pill>
                Primary
              </Badge>
              <Badge color="secondary" pill>
                Secondary
              </Badge>
              <Badge color="info" pill>
                Info
              </Badge>
              <Badge color="success" pill>
                Success
              </Badge>
              <Badge color="danger" pill>
                Danger
              </Badge>
              <Badge color="warning" pill>
                Warning
              </Badge>
            </TabPane>
            <TabPane
              aria-labelledby="badge-pills-html-tab"
              className=" fade"
              id="badge-pills-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="links">Links</h2>
        <p>
          Using the contextual{" "}
          <code className=" highlighter-rouge">.badge-*</code>
          classes on an <code className=" highlighter-rouge">{`<a>`}</code>
          element quickly provide <em>actionable</em>
          badges with hover and focus states.
        </p>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="badge-links-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="badge-links-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="badge-links-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="badge-links-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="badge-links-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="badge-links-component-tab"
              className=" tab-example-result fade show active"
              id="badge-links-component"
              role="tabpanel"
            >
              <Badge
                className=" badge-default"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Default
              </Badge>
              <Badge
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Primary
              </Badge>
              <Badge
                color="secondary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Secondary
              </Badge>
              <Badge
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Info
              </Badge>
              <Badge
                color="success"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Success
              </Badge>
              <Badge
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Danger
              </Badge>
              <Badge
                color="warning"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Warning
              </Badge>
            </TabPane>
            <TabPane
              aria-labelledby="badge-links-html-tab"
              className=" fade"
              id="badge-links-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
      </>
    );
  }
}

export default Badges;
