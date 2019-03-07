import React from "react";

// reactstrap components
import { Card, Row, Col } from "reactstrap";

class Contents extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Contents
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Discover what’s included in Bootstrap, including our precompiled and
          source code flavors. Remember, Bootstrap’s JavaScript plugins require
          jQuery.
        </p>
        <hr />
        <h2 id="argon-structure">Argon structure</h2>
        <p>
          Once downloaded, unzip the compressed folder and you’ll see something
          like this:
        </p>
        {/* NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too. */}
        <h2 id="bootstrap-components">Bootstrap components</h2>
        <p>
          Here is the list of Bootstrap 4 components that were restyled in
          Argon:
        </p>
        <Row className="row-grid mt-5">
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Alerts</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Badge</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Buttons</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Carousel</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="row-grid">
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Dropdowns</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Forms</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Modal</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Navs</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="row-grid">
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Navbar</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Pagination</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Popover &amp; Tooltip</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Progress</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <h2 id="argon-components">Argon components</h2>
        <p>
          Besides giving the existing Bootstrap elements a new look, we added
          new ones, so that the interface and consistent and homogenous. Going
          through them, we added:
        </p>
        <Row className="row-grid mt-5">
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Datepicker</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Sliders</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Checkboxes</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Radio buttons</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="row-grid">
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Toggle buttons</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Font Awesome</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Nucleo icons</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Modals</h6>
              </div>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Contents;
