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
  Modal,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class Modals extends React.Component {
  render() {
    return (
      <>
        <div className=" ct-page-title">
          <h1 className=" ct-title" id="content">
            Modal
          </h1>
          <div className=" avatar-group mt-3" />
        </div>
        <p className=" ct-lead">
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="modal-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="modal-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="modal-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="modal-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="modal-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="modal-component-tab"
              className=" tab-example-result fade show active"
              id="modal-component"
              role="tabpanel"
            >
              {/* Button trigger modal */}
              <Button
                color="primary"
                data-target="#exampleModal"
                data-toggle="modal"
                type="button"
              >
                Launch demo modal
              </Button>
              {/* Modal */}
              <Modal>
                <div className=" modal-header">
                  <h5 className=" modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    aria-label="Close"
                    className=" close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className=" modal-body">...</div>
                <div className=" modal-footer">
                  <Button color="secondary" data-dismiss="modal" type="button">
                    Close
                  </Button>
                  <Button color="primary" type="button">
                    Save changes
                  </Button>
                </div>
              </Modal>
            </TabPane>
            <TabPane
              aria-labelledby="modal-html-tab"
              className=" fade"
              id="modal-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="variations">Variations</h2>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="modal-colors-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="modal-colors-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="modal-colors-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="modal-colors-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="modal-colors-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="modal-colors-component-tab"
              className=" tab-example-result fade show active"
              id="modal-colors-component"
              role="tabpanel"
            >
              <Row>
                <Col md="4">
                  <Button
                    block
                    className=" mb-3"
                    color="primary"
                    data-target="#modal-default"
                    data-toggle="modal"
                    type="button"
                  >
                    Default
                  </Button>
                  <Modal>
                    <div className=" modal-header">
                      <h6 className=" modal-title" id="modal-title-default">
                        Type your modal title
                      </h6>
                      <button
                        aria-label="Close"
                        className=" close"
                        data-dismiss="modal"
                        type="button"
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>
                    <div className=" modal-body">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                    <div className=" modal-footer">
                      <Button color="primary" type="button">
                        Save changes
                      </Button>
                      <Button
                        className=" ml-auto"
                        color="link"
                        data-dismiss="modal"
                        type="button"
                      >
                        Close
                      </Button>
                    </div>
                  </Modal>
                </Col>
                <Col md="4">
                  <Button
                    block
                    className=" mb-3"
                    color="warning"
                    data-target="#modal-notification"
                    data-toggle="modal"
                    type="button"
                  >
                    Notification
                  </Button>
                  <Modal contentClassName="bg-gradient-danger">
                    <div className=" modal-header">
                      <h6
                        className=" modal-title"
                        id="modal-title-notification"
                      >
                        Your attention is required
                      </h6>
                      <button
                        aria-label="Close"
                        className=" close"
                        data-dismiss="modal"
                        type="button"
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>
                    <div className=" modal-body">
                      <div className=" py-3 text-center">
                        <i className=" ni ni-bell-55 ni-3x" />
                        <h4 className=" heading mt-4">You should read this!</h4>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary regelialia.
                        </p>
                      </div>
                    </div>
                    <div className=" modal-footer">
                      <Button
                        className=" btn-white"
                        color="default"
                        type="button"
                      >
                        Ok, Got it
                      </Button>
                      <Button
                        className=" text-white ml-auto"
                        color="link"
                        data-dismiss="modal"
                        type="button"
                      >
                        Close
                      </Button>
                    </div>
                  </Modal>
                </Col>
                <Col md="4">
                  <Button
                    block
                    color="default"
                    data-target="#modal-form"
                    data-toggle="modal"
                    type="button"
                  >
                    Form
                  </Button>
                  <Modal>
                    <div className=" modal-body p-0">
                      <Card className=" bg-secondary shadow border-0">
                        <CardHeader className=" bg-transparent pb-5">
                          <div className=" text-muted text-center mt-2 mb-3">
                            <small>Sign in with</small>
                          </div>
                          <div className=" btn-wrapper text-center">
                            <Button
                              className=" btn-neutral btn-icon"
                              color="default"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <span className=" btn-inner--icon">
                                <img
                                  alt="..."
                                  src={require("assets/img/icons/common/github.svg")}
                                />
                              </span>
                              <span className=" btn-inner--text">Github</span>
                            </Button>
                            <Button
                              className=" btn-neutral btn-icon"
                              color="default"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <span className=" btn-inner--icon">
                                <img
                                  alt="..."
                                  src={require("assets/img/icons/common/google.svg")}
                                />
                              </span>
                              <span className=" btn-inner--text">Google</span>
                            </Button>
                          </div>
                        </CardHeader>
                        <CardBody className=" px-lg-5 py-lg-5">
                          <div className=" text-center text-muted mb-4">
                            <small>Or sign in with credentials</small>
                          </div>
                          <Form role="form">
                            <FormGroup className=" mb-3">
                              <InputGroup className=" input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className=" ni ni-email-83" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Email" type="email" />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <InputGroup className=" input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className=" ni ni-lock-circle-open" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Password" type="password" />
                              </InputGroup>
                            </FormGroup>
                            <div className=" custom-control custom-control-alternative custom-checkbox">
                              <input
                                className=" custom-control-input"
                                id=" customCheckLogin"
                                type="checkbox"
                              />
                              <label
                                className=" custom-control-label"
                                htmlFor=" customCheckLogin"
                              >
                                <span className=" text-muted">Remember me</span>
                              </label>
                            </div>
                            <div className=" text-center">
                              <Button
                                className=" my-4"
                                color="primary"
                                type="button"
                              >
                                Sign in
                              </Button>
                            </div>
                          </Form>
                        </CardBody>
                      </Card>
                    </div>
                  </Modal>
                </Col>
              </Row>
            </TabPane>
            <TabPane
              aria-labelledby="modal-colors-html-tab"
              className=" fade"
              id="modal-colors-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
      </>
    );
  }
}

export default Modals;
