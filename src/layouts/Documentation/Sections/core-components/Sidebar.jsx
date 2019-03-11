import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeUsage = `import React from "react";
...other code
// core components
...other code
import Sidebar from "components/Sidebar/Sidebar.jsx";
...other code
import routes from "routes.js";
...other code
class Admin extends React.Component {
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/brand/argon-react.png"),
            imgAlt: "..."
          }}
        />
      ...other code
      </>
    );
  }
}

export default Admin;`;

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
        <p class="ct-lead">
          This is the left menu that only appears inside the{" "}
          <code className="highlighter-rouge">src/layouts/Admin.jsx</code>.
        </p>
        <hr />
        <h2 id="primary-colors">Short description and usage</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeUsage}
        </SyntaxHighlighter>
        <p>asda</p>
      </>
    );
  }
}

export default Sidebar;
