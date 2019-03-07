import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Navs extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Modal
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>
        <hr />
        <h3 id="nav-pills">Nav pills</h3>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="nav-pills-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="nav-pills-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="nav-pills-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="nav-pills-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="nav-pills-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="nav-pills-component-tab"
              className="tab-example-result fade show active"
              id="nav-pills-component"
              role="tabpanel"
            >
              <Nav
                className="nav-fill flex-column flex-sm-row"
                id="tabs-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-controls="tabs-text-1"
                    aria-selected={true}
                    className="mb-sm-3 mb-md-0 active"
                    data-toggle="tab"
                    href="#pablo"
                    id="tabs-text-1-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    UI/UX Design
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-controls="tabs-text-2"
                    aria-selected={false}
                    className="mb-sm-3 mb-md-0"
                    data-toggle="tab"
                    href="#pablo"
                    id="tabs-text-2-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    Programming
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-controls="tabs-text-3"
                    aria-selected={false}
                    className="mb-sm-3 mb-md-0"
                    data-toggle="tab"
                    href="#pablo"
                    id="tabs-text-3-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    Graphic
                  </NavLink>
                </NavItem>
              </Nav>
            </TabPane>
            <TabPane
              aria-labelledby="nav-pills-html-tab"
              className="fade"
              id="nav-pills-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="circled-nav-pills">Circled nav pills</h2>
        <div className="ct-example">
          <Nav
            className="nav-tabs-code"
            id="nav-pills-circle-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="nav-pills-circle-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="nav-pills-circle-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="nav-pills-circle-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="nav-pills-circle-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="nav-pills-circle-component-tab"
              className="tab-example-result fade show active"
              id="nav-pills-circle-component"
              role="tabpanel"
            >
              <Nav
                className="nav-pills-circle"
                id="tabs_2"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-controls="home"
                    aria-selected={true}
                    className="rounded-circle active"
                    data-toggle="tab"
                    href="#pablo"
                    id="home-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    <span className="nav-link-icon d-block">
                      <i className="ni ni-atom" />
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-controls="profile"
                    aria-selected={false}
                    data-toggle="tab"
                    href="#pablo"
                    id="profile-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    <span className="nav-link-icon d-block">
                      <i className="ni ni-chat-round" />
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-controls="contact"
                    aria-selected={false}
                    data-toggle="tab"
                    href="#pablo"
                    id="contact-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    <span className="nav-link-icon d-block">
                      <i className="ni ni-cloud-download-95" />
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </TabPane>
            <TabPane
              aria-labelledby="nav-pills-circle-html-tab"
              className="fade"
              id="nav-pills-circle-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="tabs">Tabs</h2>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="nav-pills-tabs-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="nav-pills-tabs-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="nav-pills-tabs-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="nav-pills-tabs-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="nav-pills-tabs-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="nav-pills-tabs-component-tab"
              className="tab-example-result fade show active"
              id="nav-pills-tabs-component"
              role="tabpanel"
            >
              <div className="nav-wrapper">
                <Nav
                  className="nav-fill flex-column flex-md-row"
                  id="tabs-icons-text"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      aria-controls="tabs-icons-text-1"
                      aria-selected={true}
                      className="mb-sm-3 mb-md-0 active"
                      data-toggle="tab"
                      href="#pablo"
                      id="tabs-icons-text-1-tab"
                      onClick={e => e.preventDefault()}
                      role="tab"
                    >
                      <i className="ni ni-cloud-upload-96 mr-2" />
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-controls="tabs-icons-text-2"
                      aria-selected={false}
                      className="mb-sm-3 mb-md-0"
                      data-toggle="tab"
                      href="#pablo"
                      id="tabs-icons-text-2-tab"
                      onClick={e => e.preventDefault()}
                      role="tab"
                    >
                      <i className="ni ni-bell-55 mr-2" />
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-controls="tabs-icons-text-3"
                      aria-selected={false}
                      className="mb-sm-3 mb-md-0"
                      data-toggle="tab"
                      href="#pablo"
                      id="tabs-icons-text-3-tab"
                      onClick={e => e.preventDefault()}
                      role="tab"
                    >
                      <i className="ni ni-calendar-grid-58 mr-2" />
                      Messages
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <Card className="shadow">
                <CardBody>
                  <TabContent id="myTabContent">
                    <TabPane
                      aria-labelledby="tabs-icons-text-1-tab"
                      className="fade show active"
                      id="tabs-icons-text-1"
                      role="tabpanel"
                    >
                      <p className="description">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth
                        master cleanse. Mustache cliche tempor, williamsburg
                        carles vegan helvetica. Reprehenderit butcher retro
                        keffiyeh dreamcatcher synth.
                      </p>
                      <p className="description">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth
                        master cleanse.
                      </p>
                    </TabPane>
                    <TabPane
                      aria-labelledby="tabs-icons-text-2-tab"
                      className="fade"
                      id="tabs-icons-text-2"
                      role="tabpanel"
                    >
                      <p className="description">
                        Cosby sweater eu banh mi, qui irure terry richardson ex
                        squid. Aliquip placeat salvia cillum iphone. Seitan
                        aliquip quis cardigan american apparel, butcher
                        voluptate nisi qui.
                      </p>
                    </TabPane>
                    <TabPane
                      aria-labelledby="tabs-icons-text-3-tab"
                      className="fade"
                      id="tabs-icons-text-3"
                      role="tabpanel"
                    >
                      <p className="description">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth
                        master cleanse. Mustache cliche tempor, williamsburg
                        carles vegan helvetica. Reprehenderit butcher retro
                        keffiyeh dreamcatcher synth.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </TabPane>
            <TabPane
              aria-labelledby="nav-pills-tabs-html-tab"
              className="fade"
              id="nav-pills-tabs-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
      </>
    );
  }
}

export default Navs;
