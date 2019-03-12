import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";

class Datepicker extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            React Copy to Clipboard v5.0.1
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          The datepicker is tied to a standard form input field. Focus on the
          input (click, or use the tab key) to open an interactive calendar in a
          small overlay. Choose a date, click elsewhere on the page (blur the
          input), or hit the Esc key to close. If a date is chosen, feedback is
          shown as the input’s value.
        </p>
        <hr />
          <h3 id="initialization">Props</h3>
          <p>
            Please refer to{" "}
            <a
              href="https://github.com/nkbt/react-copy-to-clipboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              this plugins documentation
            </a>
            .
          </p>
      </>
    );
  }
}

export default Datepicker;
