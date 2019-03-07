import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import {
  Pagination as Paginations,
  PaginationItem,
  PaginationLink
} from "reactstrap";

const codeOverview = `import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Example extends React.Component{
    render(){
        return(
            <Pagination>
                <PaginationItem>
                    <PaginationLink href="#">
                        Previous
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>>
                <PaginationItem>
                    <PaginationLink href="#">
                        Next
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        );
    }
}`;

const codeStates = `import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Example extends React.Component{
    render(){
        return(
            <Pagination>
                <PaginationItem disabled>
                    <PaginationLink href="#">
                        Previous
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        Next
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        );
    }
}`;

const codeSpan = `import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Example extends React.Component{
    render(){
        return(
            <Pagination>
                <PaginationItem disabled>
                    <PaginationLink tag="span">
                        Previous
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink tag="span">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        Next
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        );
    }
}`;

const codeCenter = `import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Example extends React.Component{
    render(){
        return(
            <Pagination listClassName="justify-content-center">
                <PaginationItem disabled>
                    <PaginationLink href="#">
                        Previous
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        Next
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        );
    }
}`;

const codeEnd = `import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Example extends React.Component{
    render(){
        return(
            <Pagination listClassName="justify-content-end">
                <PaginationItem disabled>
                    <PaginationLink href="#">
                        Previous
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        Next
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        );
    }
}`;

class Pagination extends React.Component {
  render() {
    return (
      <div>
        <h1 className="ct-title" id="content">
          Pagination
        </h1>
        <p className="ct-lead">
          Documentation and examples for showing pagination to indicate a series
          of related content exists across multiple pages.
        </p>
        <h2 id="content">Overview</h2>
        <div className="ct-example" data-example-id="">
          <Paginations>
            <PaginationItem>
              <PaginationLink href="#">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">Next</PaginationLink>
            </PaginationItem>
          </Paginations>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeOverview}
        </SyntaxHighlighter>
        <h2 id="content">Disabled and active states</h2>
        <p>
          Pagination links are customizable for different circumstances. Use{" "}
          <code className="highlighter-rouge">disabled</code> for links that
          appear un-clickable and{" "}
          <code className="highlighter-rouge">active</code> to indicate the
          current page.
        </p>
        <div className="ct-example" data-example-id="">
          <Paginations>
            <PaginationItem disabled>
              <PaginationLink href="#">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">Next</PaginationLink>
            </PaginationItem>
          </Paginations>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeStates}
        </SyntaxHighlighter>
        <p>
          You can optionally swap out active or disabled anchors for{" "}
          <code className="highlighter-rouge">&lt;span&gt;</code>, or omit the
          anchor in the case of the prev/next arrows, to remove click
          functionality and prevent keyboard focus while retaining intended
          styles.
        </p>
        <div className="ct-example" data-example-id="">
          <Paginations>
            <PaginationItem disabled>
              <PaginationLink tag="span">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink tag="span">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">Next</PaginationLink>
            </PaginationItem>
          </Paginations>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSpan}
        </SyntaxHighlighter>
        <h2 id="content">Alignment</h2>
        <p>
          Change the alignment of pagination components with{" "}
          <code className="highlighter-rouge">flexbox utilities</code>.
        </p>
        <div className="ct-example" data-example-id="">
          <Paginations listClassName="justify-content-center">
            <PaginationItem disabled>
              <PaginationLink href="#">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">Next</PaginationLink>
            </PaginationItem>
          </Paginations>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeCenter}
        </SyntaxHighlighter>
        <div className="ct-example" data-example-id="">
          <Paginations listClassName="justify-content-end">
            <PaginationItem disabled>
              <PaginationLink href="#">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">Next</PaginationLink>
            </PaginationItem>
          </Paginations>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeEnd}
        </SyntaxHighlighter>
        <h2 id="content">Props</h2>
        <p>
          For props please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/pagination/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap's pagination documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Pagination;
