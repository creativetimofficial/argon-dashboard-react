import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const codeExamplesImport = `import { Breadcrumb, BreadcrumbItem } from 'reactstrap';`;
const codeExamples = `<Breadcrumb>
    <BreadcrumbItem active>Home</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
    <BreadcrumbItem active>Library</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
    <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
    <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>`;

class Breadcrumbs extends React.Component {
  render() {
    return (
      <>
        <h1 className="ct-title" id="content">
          Breadcrumbs
        </h1>
        <p className="ct-lead">
          Indicate the current page's location within a navigational hierarchy
          that automatically adds separators via CSS.
        </p>
        <h2>Overview</h2>
        <p>
          Separators are automatically added in CSS through
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
            <code className="highlighter-rouge">::before</code>
          </a>{" "}
          and{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
            <code className="highlighter-rouge">content</code>
          </a>
          .
        </p>
        <div className="ct-example">
          <Breadcrumb>
            <BreadcrumbItem active>Home</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#/" onClick={e => e.preventDefault()}>
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Library</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#/" onClick={e => e.preventDefault()}>
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#/" onClick={e => e.preventDefault()}>
                Library
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplesImport}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/breadcrumbs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap breadcrumbs documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Breadcrumbs;
