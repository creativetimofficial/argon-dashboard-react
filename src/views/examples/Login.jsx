import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        {/* Header */}
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveaspectratio="none"
              version="1.1"
              viewbox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <span className="btn-inner--icon">
                        <img
                          alt="..."
                          src={require("assets/img/icons/common/github.svg")}
                        />
                      </span>
                      <span className="btn-inner--text">Github</span>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <span className="btn-inner--icon">
                        <img
                          alt="..."
                          src={require("assets/img/icons/common/google.svg")}
                        />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  <Form role="form">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Password" type="password" />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="button">
                        Sign in
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <small>Forgot password?</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <small>Create new account</small>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
