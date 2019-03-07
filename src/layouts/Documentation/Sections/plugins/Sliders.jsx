import React from "react";
import Slider from "nouislider";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeExample = `import React from "react";
import {
  CardTitle,
  Row,
  Col
} from "reactstrap";
// plugin that creates slider
import Slider from "nouislider";

class Example extends React.Component {
  componentDidMount() {
    var slider1 = this.refs.slider1;
    var slider2 = this.refs.slider2;
    Slider.create(slider1, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
    Slider.create(slider2, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  render() {
    return (
      <Row>
        <Col xs={12} md={6}>
          <CardTitle tag="h4">Sliders</CardTitle>
          <div className="slider" ref="slider1" />
          <br />
          <div className="slider slider-primary" ref="slider2" />
        </Col>
      </Row>
    );
  }
}

export default Example;
`;

class Sliders extends React.Component {
  componentDidMount() {
    var slider1 = this.refs.slider1;
    var slider2 = this.refs.slider2;
    Slider.create(slider1, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
    Slider.create(slider2, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  render() {
    return (
      <div>
        <h1 className="ct-title" id="content">
          noUiSlider v13.1.1
        </h1>
        <h2 id="content">Example</h2>
        <div className="ct-example">
          <div className="slider" ref="slider1" />
          <br />
          <div className="slider slider-primary" ref="slider2" />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <p>
          If you want to add color to your slider you need to add one of the
          following classes on your div{" "}
          <code className="highlighter-rouge">"slider slider-$color"</code>,
          where <code className="highlighter-rouge">$color</code> can be one of{" "}
          <code className="highlighter-rouge">neutral</code>,{" "}
          <code className="highlighter-rouge">primary</code>,{" "}
          <code className="highlighter-rouge">info</code>,{" "}
          <code className="highlighter-rouge">success</code>,{" "}
          <code className="highlighter-rouge">warning</code>,{" "}
          <code className="highlighter-rouge">danger</code>.
        </p>
        <h2 id="content">Props</h2>
        <p>
          For props please refer to{" "}
          <a
            href="https://refreshless.com/nouislider/"
            target="_blank"
            rel="noopener noreferrer"
          >
            noUiSlider
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Sliders;
