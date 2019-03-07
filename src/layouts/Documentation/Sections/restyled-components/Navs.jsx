import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

const codeBase = `<Nav>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Another Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
</Nav>`;

const codeBase1 = `<Nav tag="nav">
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Another Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
</Nav>`;

const codeCenter = `<Nav className="justify-content-center">
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Another Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
</Nav>`;
const codeRight = `<Nav className="justify-content-right">
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Another Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
</Nav>`;

const codeVertical = `<Nav vertical>
    <NavItem>
        <NavLink href="#" active>Active</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink disabled href="#">Disabled</NavLink>
    </NavItem>
</Nav>`;

const codeVertical1 = `<Nav vertical tag="nav">
  <NavItem>
    <NavLink href="#" active>
      Active
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="#">
      Disabled
    </NavLink>
  </NavItem>
</Nav>`;

const codePlainTabs = `import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Navs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plainTabs: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <Card className="card-nav-tabs card-plain">
        <CardHeader className="card-header-danger">
          {/* colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" */}
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav data-tabs="tabs" tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 1)}
                    href="#pablo"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 2)}
                    href="#pablo"
                  >
                    Updates
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 3
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 3)}
                    href="#pablo"
                  >
                    History
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <TabContent className="text-center" activeTab={"plainTabs" + this.state.plainTabs}>
            <TabPane tabId="plainTabs1">
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name
                Kanye West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends
                up being worth billions of dollars, because I got the
                answers. I understand culture. I am the nucleus.
              </p>
            </TabPane>
            <TabPane tabId="plainTabs2">
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility
                that I have, to push possibilities, to show people, this is
                the level that things could be at. I think that’s a
                responsibility that I have, to push possibilities, to show
                people, this is the level that things could be at.
              </p>
            </TabPane>
            <TabPane tabId="plainTabs3">
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers.
                I understand culture. I am the nucleus. I think that’s a
                responsibility that I have, to push possibilities, to show
                people, this is the level that things could be at.
              </p>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

export default Navs;`;

const codeIconTabs = `import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Navs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <Card className="card-nav-tabs">
        <CardHeader className="card-header-primary">
          {/* colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" */}
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav data-tabs="tabs" tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.iconTabs === 1
                    })}
                    onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                    href="#pablo"
                  >
                    <i className="ni ni-single-02" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.iconTabs === 2
                    })}
                    onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                    href="#pablo"
                  >
                    <i className="ni ni-chat-33" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.iconTabs === 3
                    })}
                    onClick={e => this.toggleTabs(e, "iconTabs", 3)}
                    href="#pablo"
                  >
                    <i className="ni ni-settings-gear-63" />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <TabContent className="text-center" activeTab={"iconTabs" + this.state.iconTabs}>
            <TabPane tabId="iconTabs1">
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility
                that I have, to push possibilities, to show people, this is
                the level that things could be at. I think that’s a
                responsibility that I have, to push possibilities, to show
                people, this is the level that things could be at.
              </p>
            </TabPane>
            <TabPane tabId="iconTabs2">
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus. I think that’s a
                responsibility that I have, to push possibilities, to show
                people, this is the level that things could be at.
              </p>
            </TabPane>
            <TabPane tabId="iconTabs3">
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

export default Navs;
`;

const codePills = `import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Navs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pills: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <Nav className="nav-pills-primary" pills role="tablist">
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.pills === 1
              })}
              onClick={e => this.toggleTabs(e, "pills", 1)}
              href="#pablo"
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.pills === 2
              })}
              onClick={e => this.toggleTabs(e, "pills", 2)}
              href="#pablo"
            >
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.pills === 3
              })}
              onClick={e => this.toggleTabs(e, "pills", 3)}
              href="#pablo"
            >
              Options
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="tab-space" activeTab={"pills" + this.state.pills}>
          <TabPane tabId="pills1">
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. <br />
            <br />
            Dramatically visualize customer directed convergence without
            revolutionary ROI.
          </TabPane>
          <TabPane tabId="pills2">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.{" "}
            <br />
            <br />
            Dramatically maintain clicks-and-mortar solutions without
            functional solutions.
          </TabPane>
          <TabPane tabId="pills3">
            Completely synergize resource taxing relationships via premier
            niche markets. Professionally cultivate one-to-one customer
            service with robust ideas. <br />
            <br />
            Dynamically innovate resource-leveling customer service for state
            of the art customer service.
          </TabPane>
        </TabContent>
      </>
    );
  }
}

export default Navs;
`;

const codeVerticalPills = `import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class Navs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vertical: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <Row>
          <Col md="4">
            <Nav className="nav-pills-primary flex-column" pills>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.vertical === 1
                  })}
                  onClick={e => this.toggleTabs(e, "vertical", 1)}
                  href="#pablo"
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.vertical === 2
                  })}
                  onClick={e => this.toggleTabs(e, "vertical", 2)}
                  href="#pablo"
                >
                  Settings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.vertical === 3
                  })}
                  onClick={e => this.toggleTabs(e, "vertical", 3)}
                  href="#pablo"
                >
                  Options
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="8">
            <TabContent activeTab={"vertical" + this.state.vertical}>
              <TabPane tabId="vertical1">
                Collaboratively administrate empowered markets via
                plug-and-play networks. Dynamically procrastinate B2C users
                after installed base benefits. <br />
                <br />
                Dramatically visualize customer directed convergence without
                revolutionary ROI.
              </TabPane>
              <TabPane tabId="vertical2">
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely deliverables for
                real-time schemas. <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </TabPane>
              <TabPane tabId="vertical3">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </>
    );
  }
}

export default Navs;
`;

const codeWithIcons = `import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Navs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      withIcons: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <Nav
          className="nav-pills-primary nav-pills-icons"
          pills
          role="tablist"
        >
          {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 1
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 1)}
              href="#pablo"
            >
              <i className="ni ni-laptop" />
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 2
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 2)}
              href="#pablo"
            >
              <i className="ni ni-settings-gear-63" />
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 3
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 3)}
              href="#pablo"
            >
              <i className="ni ni-calendar-60" />
              Tasks
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="tab-space" activeTab={"withIcons" + this.state.withIcons}>
          <TabPane tabId="withIcons1">
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. <br />
            <br />
            Dramatically visualize customer directed convergence without
            revolutionary ROI.
          </TabPane>
          <TabPane tabId="withIcons2">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.{" "}
            <br />
            <br />
            Dramatically maintain clicks-and-mortar solutions without
            functional solutions.
          </TabPane>
          <TabPane tabId="withIcons3">
            Completely synergize resource taxing relationships via premier
            niche markets. Professionally cultivate one-to-one customer
            service with robust ideas. <br />
            <br />
            Dynamically innovate resource-leveling customer service for state
            of the art customer service.
          </TabPane>
        </TabContent>
      </>
    );
  }
}

export default Navs;
`;

const codePillsDropdown = `import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

class Navs extends React.Component {
  render() {
    return (
      <>
        <Nav pills>
          <NavItem>
            <NavLink
              className="active"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Active
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
              nav
              onClick={e => e.preventDefault()}
              role="button"
            >
              Dropdown
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
          </UncontrolledDropdown>
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
      </>
    );
  }
}

export default Navs;
`;

class Navs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plainTabs: 1,
      iconTabs: 1,
      pills: 1,
      vertical: 1,
      withIcons: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <h1 className="ct-title" id="content">
          Navs
        </h1>
        <p className="ct-lead">
          Documentation and examples for how to use Bootstrap's included
          navigation components.
        </p>
        <h2 id="base-nav">Base nav</h2>
        <p>
          Navigation available in Bootstrap share general markup and styles,
          from the base <code className="highlighter-rouge">.nav</code>
          class to the active and disabled states. Swap modifier classes to
          switch between each style.
        </p>
        <p>
          The base <code className="highlighter-rouge">.nav</code>
          component is built with flexbox and provide a strong foundation for
          building all types of navigation components. It includes some style
          overrides (for working with lists), some link padding for larger hit
          areas, and basic disabled styling.
        </p>
        <div className="ct-callout ct-callout-info">
          <p>
            The base <code className="highlighter-rouge">.nav</code>
            component does not include any{" "}
            <code className="highlighter-rouge">.active</code>
            state. The following examples include the class, mainly to
            demonstrate that this particular class does not trigger any special
            styling.
          </p>
        </div>
        <div className="ct-example" data-example-id="">
          <Nav>
            <NavItem>
              <NavLink
                className="active"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                Link
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
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeBase}
        </SyntaxHighlighter>
        <p>
          Classes are used throughout, so your markup can be super flexible. Use{" "}
          <code className="highlighter-rouge">{`<ul>`}</code>s like above, or
          roll your own with say a{" "}
          <code className="highlighter-rouge">{`<nav>`}</code>
          element. Because the <code className="highlighter-rouge">.nav</code>
          uses <code className="highlighter-rouge">display: flex</code>, the nav
          links behave the same as nav items would, but without the extra
          markup.
        </p>
        <div className="ct-example" data-example-id="">
          <Nav tag="nav">
            <NavLink
              className="active"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Active
            </NavLink>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
            <NavLink
              className="disabled"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Disabled
            </NavLink>
          </Nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeBase1}
        </SyntaxHighlighter>
        <h2 id="available-styles">Available styles</h2>
        <p>
          Change the style of <code className="highlighter-rouge">.nav</code>s
          component with modifiers and utilities. Mix and match as needed, or
          build your own.
        </p>
        <h3 id="horizontal-alignment">Horizontal alignment</h3>
        <p>
          Change the horizontal alignment of your nav with{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            flexbox utilities
          </a>
          . By default, navs are left-aligned, but you can easily change them to
          center or right aligned.
        </p>
        <p>
          Centered with{" "}
          <code className="highlighter-rouge">.justify-content-center</code>:
        </p>
        <div className="ct-example" data-example-id="">
          <Nav className="justify-content-center">
            <NavItem>
              <NavLink
                className="active"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                Link
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
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeCenter}
        </SyntaxHighlighter>
        <p>
          Right-aligned with{" "}
          <code className="highlighter-rouge">.justify-content-end</code>:
        </p>
        <div className="ct-example" data-example-id="">
          <Nav className="justify-content-end">
            <NavItem>
              <NavLink
                className="active"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                Link
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
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRight}
        </SyntaxHighlighter>
        <h3 id="vertical">Vertical</h3>
        <p>
          Stack your navigation by changing the flex item direction with the{" "}
          <code className="highlighter-rouge">.flex-column</code>
          utility. Need to stack them on some viewports but not others? Use the
          responsive versions (e.g.,{" "}
          <code className="highlighter-rouge">.flex-sm-column</code>
          ).
        </p>
        <div className="ct-example" data-example-id="">
          <Nav className="flex-column">
            <NavItem>
              <NavLink
                className="active"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                Link
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
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeVertical}
        </SyntaxHighlighter>
        <p>
          As always, vertical navigation is possible without{" "}
          <code className="highlighter-rouge">{`<ul>`}</code>
          s, too.
        </p>
        <div className="ct-example" data-example-id="">
          <Nav className="flex-column" tag="nav">
            <NavLink
              className="active"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Active
            </NavLink>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
            <NavLink
              className="disabled"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Disabled
            </NavLink>
          </Nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeVertical1}
        </SyntaxHighlighter>
        <h3 id="tabs">Tabs</h3>
        <p>
          Takes the basic nav from above and adds the{" "}
          <code className="highlighter-rouge">.nav-tabs</code>
          class to generate a tabbed interface. Use them to create tabbable
          regions with our{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            tab JavaScript plugin
          </a>
          .
        </p>
        <h4 id="tabs-on-plain-card">Tabs on Plain Card</h4>
        <div className="ct-example" data-example-id="">
          <Card className="card-nav-tabs card-plain">
            <CardHeader className="card-header-danger">
              {/* colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" */}
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav data-tabs="tabs" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.plainTabs === 1
                        })}
                        onClick={e => this.toggleTabs(e, "plainTabs", 1)}
                        href="#pablo"
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.plainTabs === 2
                        })}
                        onClick={e => this.toggleTabs(e, "plainTabs", 2)}
                        href="#pablo"
                      >
                        Updates
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.plainTabs === 3
                        })}
                        onClick={e => this.toggleTabs(e, "plainTabs", 3)}
                        href="#pablo"
                      >
                        History
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <TabContent
                className="text-center"
                activeTab={"plainTabs" + this.state.plainTabs}
              >
                <TabPane tabId="plainTabs1">
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                </TabPane>
                <TabPane tabId="plainTabs2">
                  <p>
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at. I think that’s a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.
                  </p>
                </TabPane>
                <TabPane tabId="plainTabs3">
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. I will be the leader of a company that ends up
                    being worth billions of dollars, because I got the answers.
                    I understand culture. I am the nucleus. I think that’s a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePlainTabs}
        </SyntaxHighlighter>
        <h4 id="tabs-with-icons-on-card">Tabs with Icons on Card</h4>
        <Card className="card-nav-tabs">
          <CardHeader className="card-header-primary">
            {/* colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" */}
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <Nav data-tabs="tabs" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.iconTabs === 1
                      })}
                      onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                      href="#pablo"
                    >
                      <i className="ni ni-single-02" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.iconTabs === 2
                      })}
                      onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                      href="#pablo"
                    >
                      <i className="ni ni-chat-33" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.iconTabs === 3
                      })}
                      onClick={e => this.toggleTabs(e, "iconTabs", 3)}
                      href="#pablo"
                    >
                      <i className="ni ni-settings-gear-63" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <TabContent
              className="text-center"
              activeTab={"iconTabs" + this.state.iconTabs}
            >
              <TabPane tabId="iconTabs1">
                <p>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers. I understand
                  culture. I am the nucleus. I think that’s a responsibility
                  that I have, to push possibilities, to show people, this is
                  the level that things could be at. I think that’s a
                  responsibility that I have, to push possibilities, to show
                  people, this is the level that things could be at.
                </p>
              </TabPane>
              <TabPane tabId="iconTabs2">
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus. I think that’s a
                  responsibility that I have, to push possibilities, to show
                  people, this is the level that things could be at.
                </p>
              </TabPane>
              <TabPane tabId="iconTabs3">
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeIconTabs}
        </SyntaxHighlighter>
        <h3 id="pills">Pills</h3>
        <p>
          Take that same HTML, but use{" "}
          <code className="highlighter-rouge">.nav-pills</code>
          instead:
        </p>
        <h4 id="horizontal-tabs">Horizontal Tabs</h4>
        <div className="ct-example" data-example-id="">
          <Nav className="nav-pills-primary" pills role="tablist">
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.pills === 1
                })}
                onClick={e => this.toggleTabs(e, "pills", 1)}
                href="#pablo"
              >
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.pills === 2
                })}
                onClick={e => this.toggleTabs(e, "pills", 2)}
                href="#pablo"
              >
                Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.pills === 3
                })}
                onClick={e => this.toggleTabs(e, "pills", 3)}
                href="#pablo"
              >
                Options
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent
            className="tab-space"
            activeTab={"pills" + this.state.pills}
          >
            <TabPane tabId="pills1">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. <br />
              <br />
              Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </TabPane>
            <TabPane tabId="pills2">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.{" "}
              <br />
              <br />
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </TabPane>
            <TabPane tabId="pills3">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. <br />
              <br />
              Dynamically innovate resource-leveling customer service for state
              of the art customer service.
            </TabPane>
          </TabContent>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePills}
        </SyntaxHighlighter>
        <h4 id="vertical-tabs">Vertical Tabs</h4>
        <div className="ct-example" data-example-id="">
          <Row>
            <Col md="4">
              <Nav className="nav-pills-primary flex-column" pills>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.vertical === 1
                    })}
                    onClick={e => this.toggleTabs(e, "vertical", 1)}
                    href="#pablo"
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.vertical === 2
                    })}
                    onClick={e => this.toggleTabs(e, "vertical", 2)}
                    href="#pablo"
                  >
                    Settings
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.vertical === 3
                    })}
                    onClick={e => this.toggleTabs(e, "vertical", 3)}
                    href="#pablo"
                  >
                    Options
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="8">
              <TabContent activeTab={"vertical" + this.state.vertical}>
                <TabPane tabId="vertical1">
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. <br />
                  <br />
                  Dramatically visualize customer directed convergence without
                  revolutionary ROI.
                </TabPane>
                <TabPane tabId="vertical2">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas. <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions.
                </TabPane>
                <TabPane tabId="vertical3">
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service with robust ideas. <br />
                  <br />
                  Dynamically innovate resource-leveling customer service for
                  state of the art customer service.
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeVerticalPills}
        </SyntaxHighlighter>
        <h4 id="with-icons">With Icons</h4>
        <div className="ct-example" data-example-id="">
          <Nav
            className="nav-pills-primary nav-pills-icons"
            pills
            role="tablist"
          >
            {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.withIcons === 1
                })}
                onClick={e => this.toggleTabs(e, "withIcons", 1)}
                href="#pablo"
              >
                <i className="ni ni-laptop" />
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.withIcons === 2
                })}
                onClick={e => this.toggleTabs(e, "withIcons", 2)}
                href="#pablo"
              >
                <i className="ni ni-settings-gear-63" />
                Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.withIcons === 3
                })}
                onClick={e => this.toggleTabs(e, "withIcons", 3)}
                href="#pablo"
              >
                <i className="ni ni-calendar-60" />
                Tasks
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent
            className="tab-space"
            activeTab={"withIcons" + this.state.withIcons}
          >
            <TabPane tabId="withIcons1">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. <br />
              <br />
              Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </TabPane>
            <TabPane tabId="withIcons2">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.{" "}
              <br />
              <br />
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </TabPane>
            <TabPane tabId="withIcons3">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. <br />
              <br />
              Dynamically innovate resource-leveling customer service for state
              of the art customer service.
            </TabPane>
          </TabContent>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeWithIcons}
        </SyntaxHighlighter>
        <h3 id="pills-with-dropdowns">Pills with dropdowns</h3>
        <div className="ct-example" data-example-id="">
          <Nav pills>
            <NavItem>
              <NavLink
                className="active"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Active
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
                nav
                onClick={e => e.preventDefault()}
                role="button"
              >
                Dropdown
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
            </UncontrolledDropdown>
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
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePillsDropdown}
        </SyntaxHighlighter>
        <h3 id="using-data-attributes">Props</h3>
        <p>
          If you want to see more examples and properties please check the
          official{" "}
          <strong>
            <a
              href="https://reactstrap.github.io/components/navs/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Reactstrap Documentation
            </a>
          </strong>
          .
        </p>
      </>
    );
  }
}

export default Navs;
