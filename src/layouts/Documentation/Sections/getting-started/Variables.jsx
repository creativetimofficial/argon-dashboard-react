import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

class Variables extends React.Component {
  render() {
    return (
      <div>
        <h1 className="ct-title" id="content">
          Variables
        </h1>
        <p>
          To make our demo pages (pages found in{" "}
          <code className="highlighter-rouge">src/views{"/"}*</code>) a bit more
          easy to understand and to have less code, we've created some special
          files with variables, variables which we import where we need them.
        </p>
        <p>
          You will find all the variables regarding the charts in{" "}
          <code className="highlighter-rouge">src/variables/charts.jsx</code>.
        </p>
        <p>To use any of this variable you need to import it like so:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import variableName from 'variables/charts.jsx';`}</SyntaxHighlighter>
      </div>
    );
  }
}

export default Variables;
