import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { Button } from "reactstrap";

const codeColorsExample = `<Button color="primary">Primary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button>Default</Button>`;

const codeSizesExample = `<Button color="primary" size="lg">Large</Button>
<Button color="primary">Normal</Button>
<Button color="primary" size="sm">Small</Button>`;

const codeStylesExample = `<Button color="primary">Default</Button>
<Button className="btn-round" color="primary">
  Round
</Button>
<Button className="btn-round" color="primary">
  <i className="ni ni-gift-2" /> With icon
</Button>
<Button className="btn-round btn-icon" color="primary">
  <i className="ni ni-gift-2" />
</Button>
<Button className="btn-neutral" color="primary">
  Neutral
</Button>`;

const codeDisabledButtons = `<Button color="primary" size="lg" disabled>Primary button</Button>
<Button color="secondary" size="lg" disabled>Button</Button>`;

const codeDisabledA = `<Button href="#" color="primary" size="lg" disabled>Primary link</Button>
<Button href="#" color="secondary" size="lg" disabled>Link</Button>`;

class Buttons extends React.Component {
  render() {
    return (
      <>
        <h1 className="ct-title" id="content">
          Buttons
        </h1>
        <p className="ct-lead">
          Use Black Dashboard React's custom button styles for actions in forms,
          dialogs, and more with support for multiple sizes, states, and more.
        </p>
        <h2>Import</h2>
        <p>You'll need the following import:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import {Button} from 'reactstrap';`}</SyntaxHighlighter>
        <h2>Examples</h2>
        <p>
          Black Dashboard React has changed the predefined button styles from
          Bootstrap, each serving its own semantic purpose, with a few extras
          thrown in for more control.
        </p>
        <div className="ct-example">
          <Button color="primary">Primary</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
          <Button>Default</Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeColorsExample}
        </SyntaxHighlighter>
        <h2>Style buttons</h2>
        <p>
          We added extra classes (defined by{" "}
          <code className="highlighter-rouge">props</code>) that can help you
          better customise the look. Let's see some examples:
        </p>
        <div className="ct-example">
          <Button color="primary">Default</Button>
          <Button className="btn-round" color="primary">
            Round
          </Button>
          <Button className="btn-round" color="primary">
            <i className="ni ni-gift-2" /> With icon
          </Button>
          <Button className="btn-round btn-icon" color="primary">
            <i className="ni ni-gift-2" />
          </Button>
          <Button className="btn-neutral" color="primary">
            Neutral
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeStylesExample}
        </SyntaxHighlighter>
        <h2>Sizes</h2>
        <p>
          Fancy larger or smaller buttons? Add{" "}
          <code className="highlighter-rouge">{`size="lg"`}</code> or{" "}
          <code className="highlighter-rouge">{`size="sm"`}</code> for
          additional sizes.
        </p>
        <div className="ct-example">
          <Button color="primary" size="lg">
            Large
          </Button>
          <Button color="primary">Normal</Button>
          <Button color="primary" size="sm">
            Small
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSizesExample}
        </SyntaxHighlighter>
        <h2>Disabled state</h2>
        <p>
          Make buttons look inactive by adding the{" "}
          <code className="highlighter-rouge">disabled</code> boolean attribute
          to any <code className="highlighter-rouge">{`<Button>`}</code>{" "}
          element.
        </p>
        <div className="ct-example">
          <Button color="primary" size="lg" disabled>
            Primary button
          </Button>
          <Button color="secondary" size="lg" disabled>
            Button
          </Button>
          <SyntaxHighlighter language="jsx" style={prism}>
            {codeDisabledButtons}
          </SyntaxHighlighter>
          <Button href="#" color="primary" size="lg" disabled>
            Primary link
          </Button>
          <Button href="#" color="secondary" size="lg" disabled>
            Link
          </Button>
          <SyntaxHighlighter language="jsx" style={prism}>
            {codeDisabledA}
          </SyntaxHighlighter>
        </div>
        <h2>Props</h2>

        <p>
          You can refer to{" "}
          <a
            href="https://reactstrap.github.io/components/buttons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap documentation
          </a>{" "}
          for more props.
        </p>
      </>
    );
  }
}

export default Buttons;
