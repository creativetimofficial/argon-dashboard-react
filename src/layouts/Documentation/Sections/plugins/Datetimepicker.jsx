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
            Datepicker
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
        <h2 id="single-datepicker">Single datepicker</h2>
        <div className="ct-example">
          <FormGroup>
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <ReactDatetime
                inputProps={{
                  placeholder: "Date Picker Here"
                }}
                timeFormat={false}
              />
            </InputGroup>
          </FormGroup>
        </div>
        <h2 id="range-datepicker">Range datepicker</h2>
        <div className="ct-example">
          <Row>
            <Col xs={6}>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-calendar-grid-58" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <ReactDatetime
                    inputProps={{
                      placeholder: "Date Picker Here"
                    }}
                    timeFormat={false}
                    renderDay={(props, currentDate, selectedDate) => {
                      let classes = props.className;
                      if (
                        this.state.startDate &&
                        this.state.endDate &&
                        this.state.startDate._d + "" === currentDate._d + ""
                      ) {
                        classes += " start-date";
                      } else if (
                        this.state.startDate &&
                        this.state.endDate &&
                        new Date(this.state.startDate._d + "") <
                          new Date(currentDate._d + "") &&
                        new Date(this.state.endDate._d + "") >
                          new Date(currentDate._d + "")
                      ) {
                        classes += " middle-date";
                      } else if (
                        this.state.endDate &&
                        this.state.endDate._d + "" === currentDate._d + ""
                      ) {
                        classes += " end-date";
                      }
                      return (
                        <td {...props} className={classes}>
                          {currentDate.date()}
                        </td>
                      );
                    }}
                    onChange={e => this.setState({ startDate: e })}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col xs={6}>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-calendar-grid-58" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <ReactDatetime
                    inputProps={{
                      placeholder: "Date Picker Here"
                    }}
                    timeFormat={false}
                    renderDay={(props, currentDate, selectedDate) => {
                      let classes = props.className;
                      if (
                        this.state.startDate &&
                        this.state.endDate &&
                        this.state.startDate._d + "" === currentDate._d + ""
                      ) {
                        classes += " start-date";
                      } else if (
                        this.state.startDate &&
                        this.state.endDate &&
                        new Date(this.state.startDate._d + "") <
                          new Date(currentDate._d + "") &&
                        new Date(this.state.endDate._d + "") >
                          new Date(currentDate._d + "")
                      ) {
                        classes += " middle-date";
                      } else if (
                        this.state.endDate &&
                        this.state.endDate._d + "" === currentDate._d + ""
                      ) {
                        classes += " end-date";
                      }
                      return (
                        <td {...props} className={classes}>
                          {currentDate.date()}
                        </td>
                      );
                    }}
                    onChange={e => this.setState({ endDate: e })}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </div>
        <h2 id="usage">Usage</h2>
        <p>
          In order to use this plugin on your page you will need to include the
          following script in the “Optional JS” area from the page’s footer:
        </p>
        <h3 id="initialization">Initialization</h3>
        <p>
          Add the <code className="highlighter-rouge">.datepicker</code>
          class on the text input that you want to become a datepicker.
        </p>
      </>
    );
  }
}

export default Datepicker;
