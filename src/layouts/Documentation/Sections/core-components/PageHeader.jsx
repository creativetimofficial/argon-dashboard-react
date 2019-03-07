import React from "react";
import { Link } from "react-router-dom";

class PageHeader extends React.Component {
  render() {
    return (
      <>
        <h1 className="ct-title" id="content">
          PageHeader
        </h1>
        <p>
          Can be found inside{" "}
          <code className="highlighter-rouge">
            src/components/PageHeader/PageHeader.jsx
          </code>
          .
        </p>
        <p>
          This is the demo upper part of the{" "}
          <code className="highlighter-rouge">src/views/Index.jsx</code>.
        </p>
        <p>
          It has the product title, a small description and some background
          squares with a nice animation.
        </p>
        <p>
          You can see it <Link to="/">here</Link>.
        </p>
      </>
    );
  }
}

export default PageHeader;
