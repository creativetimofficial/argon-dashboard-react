import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

import { Progress } from "reactstrap";

const example = `import React from "react";

import { Progress } from "reactstrap";

class ProgressDocs extends React.Component {
  render() {
    return (
      <>
        <div className="progress-container">
          <span className="progress-badge">Default</span>
          <Progress max="100" value="25">
            <span className="progress-value">25%</span>
          </Progress>
        </div>
        <div className="progress-container progress-primary">
          <span className="progress-badge">Primary</span>
          <Progress max="100" value="60" barClassName="progress-bar-primary">
            <span className="progress-value">60%</span>
          </Progress>
        </div>
        <div className="progress-container progress-danger">
          <span className="progress-badge">Danger</span>
          <Progress max="100" value="50" barClassName="progress-bar-danger">
            <span className="progress-value">50%</span>
          </Progress>
        </div>
        <div className="progress-container progress-warning">
          <span className="progress-badge">Warning</span>
          <Progress max="100" value="77" barClassName="progress-bar-warning">
            <span className="progress-value">77%</span>
          </Progress>
        </div>
        <div className="progress-container progress-success">
          <span className="progress-badge">Success</span>
          <Progress max="100" value="46" barClassName="progress-bar-success">
            <span className="progress-value">46%</span>
          </Progress>
        </div>
        <div className="progress-container progress-info">
          <span className="progress-badge">Info</span>
          <Progress max="100" value="90" barClassName="progress-bar-info">
            <span className="progress-value">90%</span>
          </Progress>
        </div>
      </>
    );
  }
}

export default ProgressDocs;
`;

class ProgressDocs extends React.Component {
  render() {
    return (
      <>
        <h1 className="ct-title">Progress</h1>
        <h2 id="content">Backgrounds</h2>
        <p>
          Use background utility classes to change the appearance of individual
          progress bars.
        </p>
        <div className="ct-example">
          <div className="progress-container">
            <span className="progress-badge">Default</span>
            <Progress max="100" value="25">
              <span className="progress-value">25%</span>
            </Progress>
          </div>
          <div className="progress-container progress-primary">
            <span className="progress-badge">Primary</span>
            <Progress max="100" value="60" barClassName="progress-bar-primary">
              <span className="progress-value">60%</span>
            </Progress>
          </div>
          <div className="progress-container progress-danger">
            <span className="progress-badge">Danger</span>
            <Progress max="100" value="50" barClassName="progress-bar-danger">
              <span className="progress-value">50%</span>
            </Progress>
          </div>
          <div className="progress-container progress-warning">
            <span className="progress-badge">Warning</span>
            <Progress max="100" value="77" barClassName="progress-bar-warning">
              <span className="progress-value">77%</span>
            </Progress>
          </div>
          <div className="progress-container progress-success">
            <span className="progress-badge">Success</span>
            <Progress max="100" value="46" barClassName="progress-bar-success">
              <span className="progress-value">46%</span>
            </Progress>
          </div>
          <div className="progress-container progress-info">
            <span className="progress-badge">Info</span>
            <Progress max="100" value="90" barClassName="progress-bar-info">
              <span className="progress-value">90%</span>
            </Progress>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {example}
        </SyntaxHighlighter>
        <h2 id="content">Props</h2>
        <p>
          For props please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/progress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default ProgressDocs;
