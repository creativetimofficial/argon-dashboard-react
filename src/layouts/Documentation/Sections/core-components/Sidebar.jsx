import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            App Sidebar
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p class="ct-lead">This is the left menu that only appears inside the <code className="highlighter-rouge">
          src/layouts/Admin.jsx
        </code>.</p>
        <hr />
        <h2 id="primary-colors">Short description and usage</h2>
        <p></p>
      </>
    );
  }
}

export default Sidebar;
