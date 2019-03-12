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
