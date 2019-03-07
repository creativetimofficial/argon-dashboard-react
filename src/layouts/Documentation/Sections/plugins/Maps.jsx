import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, TabContent, TabPane } from "reactstrap";

class Maps extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Maps
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Our map component uses the Google Maps API and it comes with a custom
          interface that matches the theme’s colors
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="slider-single-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="slider-single-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="slider-single-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="slider-single-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="slider-single-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="slider-single-component-tab"
              className="tab-example-result fade show active"
              id="slider-single-component"
              role="tabpanel"
            >
              <div
                className="map-canvas"
                data-lat="40.748817"
                data-lng="-73.985428"
                id="map-canvas"
                style={{ height: "600px" }}
              />
            </TabPane>
            <TabPane
              aria-labelledby="slider-single-html-tab"
              className="fade"
              id="slider-single-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="usage">Usage</h2>
        <p>
          In order to use this plugin on your page you will need to include the
          following script in the “Optional JS” area from the page’s footer:
        </p>
        <h3 id="get-your-api-key">Get your API key</h3>
        <p>
          In order to get your Google Maps API key navigate to the following
          page:{" "}
          <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">
            Google Maps
          </a>
        </p>
        <h3 id="initialization">Initialization</h3>
        <p>
          Simply copy one of the code examples demonstrated above and include it
          in your page. Afterwards, you can modify the lat and long in the{" "}
          <code className="highlighter-rouge">data-lat</code>
          and <code className="highlighter-rouge">data-lng</code>
          attributes from the
        </p>
      </>
    );
  }
}

export default Maps;
