import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Datepicker extends React.Component {
  render() {
    return (
      <>
        <div className=" ct-page-title">
          <h1 className=" ct-title" id="content">
            Datepicker
          </h1>
          <div className=" avatar-group mt-3" />
        </div>
        <p className=" ct-lead">
          The datepicker is tied to a standard form input field. Focus on the
          input (click, or use the tab key) to open an interactive calendar in a
          small overlay. Choose a date, click elsewhere on the page (blur the
          input), or hit the Esc key to close. If a date is chosen, feedback is
          shown as the input’s value.
        </p>
        <hr />
        <h2 id="single-datepicker">Single datepicker</h2>
        <div className=" ct-example">
          <Nav
            className=" nav-tabs-code"
            id="datepicker-single-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="datepicker-single-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="datepicker-single-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="datepicker-single-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="datepicker-single-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="datepicker-single-component-tab"
              className=" tab-example-result fade show active"
              id="datepicker-single-component"
              role="tabpanel"
            >
              <FormGroup>
                <InputGroup className=" input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className=" ni ni-calendar-grid-58" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <ReactDatetime
                    inputProps={{
                      className: "form-control",
                      placeholder: "Date Picker Here"
                    }}
                    timeFormat={false}
                  />
                </InputGroup>
              </FormGroup>
            </TabPane>
            <TabPane
              aria-labelledby="datepicker-single-html-tab"
              className=" fade"
              id="datepicker-single-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="range-datepicker">Range datepicker</h2>
        <div className=" ct-example">
          <Nav
            className=" nav-tabs-code"
            id="datepicker-range-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="datepicker-range-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="datepicker-range-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="datepicker-range-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="datepicker-range-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="datepicker-range-component-tab"
              className=" tab-example-result fade show active"
              id="datepicker-range-component"
              role="tabpanel"
            >
              <ReactDatetime
                inputProps={{
                  className: "form-control",
                  placeholder: "Date Picker Here"
                }}
                timeFormat={false}
              >
                <div className=" col">
                  <FormGroup>
                    <InputGroup className=" input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className=" ni ni-calendar-grid-58" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        defaultValue="06/18/2018"
                        placeholder="Start date"
                        type="text"
                      />
                    </InputGroup>
                  </FormGroup>
                </div>
                <div className=" col">
                  <FormGroup>
                    <InputGroup className=" input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className=" ni ni-calendar-grid-58" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        defaultValue="06/22/2018"
                        placeholder="End date"
                        type="text"
                      />
                    </InputGroup>
                  </FormGroup>
                </div>
              </ReactDatetime>
            </TabPane>
            <TabPane
              aria-labelledby="datepicker-range-html-tab"
              className=" fade"
              id="datepicker-range-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="usage">Usage</h2>
        <p>
          In order to use this plugin on your page you will need to include the
          following script in the “Optional JS” area from the page’s footer:
        </p>
        <h3 id="initialization">Initialization</h3>
        <p>
          Add the <code className=" highlighter-rouge">.datepicker</code>
          class on the text input that you want to become a datepicker.
        </p>
      </>
    );
  }
}

export default Datepicker;
