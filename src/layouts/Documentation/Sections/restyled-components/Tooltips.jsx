import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { UncontrolledTooltip, Button } from "reactstrap";

const codeImport = `import { UncontrolledTooltip } from 'reactstrap';`;

const codeImportControlled = `import { Tooltip } from 'reactstrap';`;

const codeExample = `import React from 'react';
import { UncontrolledTooltip, Button } from 'reactstrap';

class Example extends React.Component{
    render(){
        return (
            <Button color="secondary" id="top">
                Tooltip on top
            </Button>{\` \`}
            <UncontrolledTooltip placement="top" target="top" delay={0}>
                Tooltip on top
            </UncontrolledTooltip>
            <Button color="secondary" id="right">
                Tooltip on right
            </Button>{\` \`}
            <UncontrolledTooltip placement="right" target="right" delay={0}>
                Tooltip on right
            </UncontrolledTooltip>
            <Button color="secondary" id="bottom">
                Tooltip on bottom
            </Button>{\` \`}
            <UncontrolledTooltip placement="bottom" target="bottom" delay={0}>
                Tooltip on bottom
            </UncontrolledTooltip>
            <Button color="secondary" id="left">
                Tooltip on left
            </Button>{\` \`}
            <UncontrolledTooltip placement="left" target="left" delay={0}>
                Tooltip on left
            </UncontrolledTooltip>
            <Button color="secondary" id="html">
                Tooltip with HTML
            </Button>{\` \`}
            <UncontrolledTooltip placement="top" target="#html" delay={0}>
                <em>Tooltip</em> <u>with</u> <b>HTML</b>
            </UncontrolledTooltip>
        );
    }
}`;

class TooltipSection extends React.Component {
  render() {
    return (
      <div>
        <h1 className="ct-title" id="content">
          Tooltips
        </h1>
        <p className="ct-lead">
          To use this component you need to import it from reactstrap like this:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <p>
          or if you want a controlled one (you'll have to add a{" "}
          <code className="highlighter-rouge">state</code> and a{" "}
          <code className="highlighter-rouge">function</code> for controlling
          the tooltip to your component):
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImportControlled}
        </SyntaxHighlighter>
        <h2 id="content">Example</h2>
        <p>Hover over the links below to see tooltips:</p>
        <div className="ct-example tooltip-demo">
          <p className="muted">
            Tight pants next level keffiyeh{" "}
            <a href="#pablo" id="probably">
              you probably
            </a>{" "}
            haven't heard of them. Photo booth beard raw denim letterpress vegan
            messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie
            sustainable quinoa 8-bit american apparel{" "}
            <a href="#pablo" id="have">
              have a
            </a>{" "}
            terry richardson vinyl chambray. Beard stumptown, cardigans banh mi
            lomo thundercats. Tofu biodiesel williamsburg marfa, four loko
            mcsweeney's cleanse vegan chambray. A really ironic artisan{" "}
            <a href="#pablo" id="whatever">
              whatever keytar
            </a>
            , scenester farm-to-table banksy Austin{" "}
            <a href="#pablo" id="twitter">
              twitter handle
            </a>{" "}
            freegan cred raw denim single-origin coffee viral.
            <UncontrolledTooltip placement="top" target="probably" delay={0}>
              Default Tooltip
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target="have" delay={0}>
              Another Tooltip
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target="whatever" delay={0}>
              Another one here
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target="twitter" delay={0}>
              Last Tooltip
            </UncontrolledTooltip>
          </p>
        </div>
        <h3 id="content">Static demo</h3>
        <p>Four options are available: top, right, bottom, and left aligned.</p>
        <div className="ct-example ct-example-tooltip-static">
          <div
            className="tooltip bs-tooltip-top bs-tooltip-top-docs"
            role="tooltip"
          >
            <div className="arrow" />
            <div className="tooltip-inner">Tooltip on the top</div>
          </div>
          <div
            className="tooltip bs-tooltip-right bs-tooltip-right-docs"
            role="tooltip"
          >
            <div className="arrow" />
            <div className="tooltip-inner">Tooltip on the right</div>
          </div>
          <div
            className="tooltip bs-tooltip-bottom bs-tooltip-bottom-docs"
            role="tooltip"
          >
            <div className="arrow" />
            <div className="tooltip-inner">Tooltip on the bottom</div>
          </div>
          <div
            className="tooltip bs-tooltip-left bs-tooltip-left-docs"
            role="tooltip"
          >
            <div className="arrow" />
            <div className="tooltip-inner">Tooltip on the left</div>
          </div>
        </div>
        <h3 id="content">Interactive demo</h3>
        <p>Hover over the buttons below to see their tooltips.</p>
        <div className="ct-example tooltip-demo">
          <Button color="secondary" id="top">
            Tooltip on top
          </Button>
          {` `}
          <UncontrolledTooltip placement="top" target="top" delay={0}>
            Tooltip on top
          </UncontrolledTooltip>
          <Button color="secondary" id="right">
            Tooltip on right
          </Button>
          {` `}
          <UncontrolledTooltip placement="right" target="right" delay={0}>
            Tooltip on right
          </UncontrolledTooltip>
          <Button color="secondary" id="bottom">
            Tooltip on bottom
          </Button>
          {` `}
          <UncontrolledTooltip placement="bottom" target="bottom" delay={0}>
            Tooltip on bottom
          </UncontrolledTooltip>
          <Button color="secondary" id="left">
            Tooltip on left
          </Button>
          {` `}
          <UncontrolledTooltip placement="left" target="left" delay={0}>
            Tooltip on left
          </UncontrolledTooltip>
          <Button color="secondary" id="html">
            Tooltip with HTML
          </Button>
          {` `}
          <UncontrolledTooltip placement="top" target="#html" delay={0}>
            <em>Tooltip</em> <u>with</u> <b>HTML</b>
          </UncontrolledTooltip>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2 id="content">Props</h2>
        In this examples we have used{" "}
        <code className="highlighter-rouge">{`<a>`}</code> elements for the
        tooltips to appear over. You can use different elements. For more
        information about tooltips and how to use them, please refer to{" "}
        <a
          href="https://reactstrap.github.io/components/tooltips/"
          target="_blank"
          rel="noopener noreferrer"
        >
          reactstrap documentation
        </a>
        .
      </div>
    );
  }
}

export default TooltipSection;
