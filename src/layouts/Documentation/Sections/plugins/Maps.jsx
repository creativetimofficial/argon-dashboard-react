import React from "react";

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
          <div
            className="map-canvas"
            data-lat="40.748817"
            data-lng="-73.985428"
            id="map-canvas"
            style={{ height: "600px" }}
          />
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
