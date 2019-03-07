import React from "react";

class Headroom extends React.Component {
  render() {
    return (
      <>
        <div className=" ct-page-title">
          <h1 className=" ct-title" id="content">
            Headroom
          </h1>
          <div className=" avatar-group mt-3" />
        </div>
        <p className=" ct-lead">
          Give your pages some headroom. Hide your header until you need it.
        </p>
        <hr />
        <h2 id="usage">Usage</h2>
        <p>
          In order to use this plugin on your page you will need to include the
          following script in the “Optional JS” area from the page’s footer:
        </p>
        <h3 id="initialization">Initialization</h3>
        <p>
          Add the <code className=" highlighter-rouge">.headroom</code>
          class on the main navbar in order to make it sticky and show it on
          scroll.
        </p>
      </>
    );
  }
}

export default Headroom;
