import React from "react";

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Forms
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Use Bootstrap’s custom button styles for actions in forms, dialogs,
          and more with support for multiple sizes, states, and more.
        </p>
        <hr />
        <h2 id="form-controls">Form controls</h2>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="inputs-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="inputs-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="inputs-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="inputs-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="inputs-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="inputs-component-tab"
              className="tab-example-result fade show active"
              id="inputs-component"
              role="tabpanel"
            >
              <Form>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Input disabled placeholder="Regular" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-zoom-split-in" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Search" type="text" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <InputGroup className="mb-4">
                        <Input placeholder="Birthday" type="text" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="ni ni-zoom-split-in" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup className="has-success">
                      <Input
                        className="is-valid"
                        placeholder="Success"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="has-danger">
                      <Input
                        className="is-invalid"
                        placeholder="Error Input"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </TabPane>
            <TabPane
              aria-labelledby="inputs-html-tab"
              className="fade"
              id="inputs-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h3 id="alternative">Alternative</h3>
        <div className="ct-example">
          <Nav
            className="nav-tabs-code"
            id="inputs-alternative-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="inputs-alternative-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="inputs-alternative-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="inputs-alternative-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="inputs-alternative-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="inputs-alternative-component-tab"
              className="tab-example-result fade show active"
              id="inputs-alternative-component"
              role="tabpanel"
            >
              <Form>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        disabled
                        placeholder="Regular"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-zoom-split-in" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          className="form-control-alternative"
                          placeholder="Search"
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-4">
                        <Input placeholder="Birthday" type="text" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="ni ni-zoom-split-in" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup className="has-success">
                      <Input
                        className="form-control-alternative is-valid"
                        placeholder="Success"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="has-danger">
                      <Input
                        className="form-control-alternative is-invalid"
                        placeholder="Error Input"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </TabPane>
            <TabPane
              aria-labelledby="inputs-alternative-html-tab"
              className="fade"
              id="inputs-alternative-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="textarea">Textarea</h2>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="textarea-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="textarea-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="textarea-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="textarea-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="textarea-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="textarea-component-tab"
              className="tab-example-result fade show active"
              id="textarea-component"
              role="tabpanel"
            >
              <Form>
                <Input
                  id="exampleFormControlTextarea1"
                  placeholder="Write a large text here ..."
                  rows="3"
                />
              </Form>
            </TabPane>
            <TabPane
              aria-labelledby="textarea-html-tab"
              className="fade"
              id="textarea-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h3 id="alternative-1">Alternative</h3>
        <div className="ct-example">
          <Nav
            className="nav-tabs-code"
            id="textarea-alternative-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="textarea-alternative-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="textarea-alternative-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="textarea-alternative-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="textarea-alternative-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="textarea-alternative-component-tab"
              className="tab-example-result fade show active"
              id="textarea-alternative-component"
              role="tabpanel"
            >
              <Form>
                <Input
                  className="form-control-alternative"
                  placeholder="Write a large text here ..."
                  rows="3"
                />
              </Form>
            </TabPane>
            <TabPane
              aria-labelledby="textarea-alternative-html-tab"
              className="fade"
              id="textarea-alternative-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="checkboxes">Checkboxes</h2>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="checkboxes-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="checkboxes-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="checkboxes-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="checkboxes-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="checkboxes-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="checkboxes-component-tab"
              className="tab-example-result fade show active"
              id="checkboxes-component"
              role="tabpanel"
            >
              <div className="custom-control custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  id="customCheck1"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Unchecked
                </label>
              </div>
              <div className="custom-control custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  defaultChecked
                  id="customCheck2"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck2">
                  Checked
                </label>
              </div>
              <div className="custom-control custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  disabled
                  id="customCheck3"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck3">
                  Disabled Unchecked
                </label>
              </div>
              <div className="custom-control custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  defaultChecked
                  disabled
                  id="customCheck4"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck4">
                  Disabled Checked
                </label>
              </div>
            </TabPane>
            <TabPane
              aria-labelledby="checkboxes-html-tab"
              className="fade"
              id="checkboxes-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h3 id="alternative-2">Alternative</h3>
        <div className="ct-example">
          <Nav
            className="nav-tabs-code"
            id="checkboxes-alternative-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="checkboxes-alternative-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="checkboxes-alternative-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="checkboxes-alternative-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="checkboxes-alternative-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="checkboxes-alternative-component-tab"
              className="tab-example-result fade show active"
              id="checkboxes-alternative-component"
              role="tabpanel"
            >
              <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  id="customCheck5"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck5">
                  Unchecked
                </label>
              </div>
              <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  defaultChecked
                  id="customCheck6"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck6">
                  Checked
                </label>
              </div>
              <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  disabled
                  id="customCheck7"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck7">
                  Disabled Unchecked
                </label>
              </div>
              <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  defaultChecked
                  disabled
                  id="customCheck8"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck8">
                  Disabled Checked
                </label>
              </div>
            </TabPane>
            <TabPane
              aria-labelledby="checkboxes-alternative-html-tab"
              className="fade"
              id="checkboxes-alternative-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="radio-buttons">Radio buttons</h2>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="radios-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="radios-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="radios-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="radios-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="radios-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="radios-component-tab"
              className="tab-example-result fade show active"
              id="radios-component"
              role="tabpanel"
            >
              <div className="custom-control custom-radio mb-3">
                <input
                  className="custom-control-input"
                  id="customRadio5"
                  name="custom-radio-2"
                  type="radio"
                />
                <label className="custom-control-label" htmlFor="customRadio5">
                  Unchecked
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  className="custom-control-input"
                  defaultChecked
                  id="customRadio6"
                  name="custom-radio-2"
                  type="radio"
                />
                <label className="custom-control-label" htmlFor="customRadio6">
                  Checked
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  className="custom-control-input"
                  disabled
                  id="customRadio7"
                  name="custom-radio-2"
                  type="radio"
                />
                <label className="custom-control-label" htmlFor="customRadio7">
                  Disabled unchecked
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  className="custom-control-input"
                  defaultChecked
                  disabled
                  id="customRadio8"
                  name="custom-radio-2"
                  type="radio"
                />
                <label className="custom-control-label" htmlFor="customRadio8">
                  Disabled checkbox
                </label>
              </div>
            </TabPane>
            <TabPane
              aria-labelledby="radios-html-tab"
              className="fade"
              id="radios-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h3 id="alternative-3">Alternative</h3>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="radios-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="radios-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="radios-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="radios-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="radios-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="radios-component-tab"
              className="tab-example-result fade show active"
              id="radios-component"
              role="tabpanel"
            >
              <div className="custom-control custom-control-alternative custom-radio mb-3">
                <input
                  className="custom-control-input"
                  id="customRadio1"
                  name="custom-radio-1"
                  type="radio"
                />
                <label className="custom-control-label" htmlFor="customRadio1">
                  Unchecked
                </label>
              </div>
              <div className="custom-control custom-control-alternative custom-radio mb-3">
                <input
                  className="custom-control-input"
                  defaultChecked
                  id="customRadio2"
                  name="custom-radio-1"
                  type="radio"
                />
                <label className="custom-control-label" htmlFor="customRadio2">
                  Checked
                </label>
              </div>
              <div className="custom-control custom-control-alternative custom-radio mb-3">
                <input
                  className="custom-control-input"
                  disabled
                  id="customRadio3"
                  name="custom-radio-1"
                  type="radio"
                />
                <label className="custom-control-label" htmlFor="customRadio3">
                  Disabled unchecked
                </label>
              </div>
              <div className="custom-control custom-control-alternative custom-radio mb-3">
                <input
                  className="custom-control-input"
                  defaultChecked
                  disabled
                  id="customRadio4"
                  name="custom-radio-1"
                  type="radio"
                />
                <label className="custom-control-label" htmlFor="customRadio4">
                  Disabled checkbox
                </label>
              </div>
            </TabPane>
            <TabPane
              aria-labelledby="radios-html-tab"
              className="fade"
              id="radios-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="toggle-buttons">Toggle buttons</h2>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="toggles-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="toggles-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="toggles-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="toggles-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="toggles-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="toggles-component-tab"
              className="tab-example-result fade show active"
              id="toggles-component"
              role="tabpanel"
            >
              <label className="custom-toggle">
                <input type="checkbox" />
                <span className="custom-toggle-slider rounded-circle" />
              </label>
              <span className="clearfix" />
              <label className="custom-toggle">
                <input defaultChecked type="checkbox" />
                <span className="custom-toggle-slider rounded-circle" />
              </label>
            </TabPane>
            <TabPane
              aria-labelledby="toggles-html-tab"
              className="fade"
              id="toggles-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="sliders">Sliders</h2>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="sliders-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="sliders-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="sliders-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="sliders-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="sliders-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="sliders-component-tab"
              className="tab-example-result fade show active"
              id="sliders-component"
              role="tabpanel"
            >
              {/* Simple slider */}
              <div className="input-slider-container">
                <div
                  className="input-slider"
                  data-range-value-max="500"
                  data-range-value-min="100"
                  id="input-slider"
                />
                {/* Input slider values */}
                <Row className="mt-3 d-none">
                  <Col xs="6">
                    <span
                      className="range-slider-value"
                      data-range-value-low="100"
                      id="input-slider-value"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mt-5">
                {/* Range slider container */}
                <div
                  data-range-value-max="500"
                  data-range-value-min="100"
                  id="input-slider-range"
                />
                {/* Range slider values */}
                <Row className="d-none">
                  <Col xs="6">
                    <span
                      className="range-slider-value value-low"
                      data-range-value-low="200"
                      id="input-slider-range-value-low"
                    />
                  </Col>
                  <Col className="text-right" xs="6">
                    <span
                      className="range-slider-value value-high"
                      data-range-value-high="400"
                      id="input-slider-range-value-high"
                    />
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane
              aria-labelledby="sliders-html-tab"
              className="fade"
              id="sliders-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
      </>
    );
  }
}

export default Forms;
