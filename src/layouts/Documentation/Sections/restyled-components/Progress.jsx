import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Progress,
  TabContent,
  TabPane
} from "reactstrap";

class Progresses extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Progress
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Documentation and examples for Bootstrap’s powerful, responsive
          navigation header, the navbar. Includes support for branding,
          navigation, and more, including support for our collapse plugin.
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="progress-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="progress-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="progress-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="progress-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="progress-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="progress-component-tab"
              className="tab-example-result fade show active"
              id="progress-component"
              role="tabpanel"
            >
              <div className="progress-wrapper">
                <div className="progress-info">
                  <div className="progress-label">
                    <span>Task completed</span>
                  </div>
                  <div className="progress-percentage">
                    <span>60%</span>
                  </div>
                </div>
                <Progress max="100" value="60" />
              </div>
              <div className="progress-wrapper">
                <div className="progress-info">
                  <div className="progress-label">
                    <span>Task completed</span>
                  </div>
                  <div className="progress-percentage">
                    <span>60%</span>
                  </div>
                </div>
                <Progress max="100" value="60" />
              </div>
              <div className="progress-wrapper">
                <div className="progress-info">
                  <div className="progress-label">
                    <span>Task completed</span>
                  </div>
                  <div className="progress-percentage">
                    <span>60%</span>
                  </div>
                </div>
                <Progress max="100" value="60" />
              </div>
              <div className="progress-wrapper">
                <div className="progress-info">
                  <div className="progress-label">
                    <span>Task completed</span>
                  </div>
                  <div className="progress-percentage">
                    <span>60%</span>
                  </div>
                </div>
                <Progress max="100" value="60" />
              </div>
              <div className="progress-wrapper">
                <div className="progress-info">
                  <div className="progress-label">
                    <span>Task completed</span>
                  </div>
                  <div className="progress-percentage">
                    <span>60%</span>
                  </div>
                </div>
                <Progress max="100" value="60" />
              </div>
              <div className="progress-wrapper">
                <div className="progress-info">
                  <div className="progress-label">
                    <span>Task completed</span>
                  </div>
                  <div className="progress-percentage">
                    <span>60%</span>
                  </div>
                </div>
                <Progress max="100" value="60" />
              </div>
              <div className="progress-wrapper">
                <div className="progress-info">
                  <div className="progress-label">
                    <span>Task completed</span>
                  </div>
                  <div className="progress-percentage">
                    <span>60%</span>
                  </div>
                </div>
                <Progress max="100" value="60" />
              </div>
            </TabPane>
            <TabPane
              aria-labelledby="progress-html-tab"
              className="fade"
              id="progress-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
      </>
    );
  }
}

export default Progresses;
