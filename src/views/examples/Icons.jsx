import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        {/* Header */}
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            Traffic
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" />
                          3.48%
                        </span>
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            New users
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            2,356
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-chart-pie" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fas fa-arrow-down" />
                          3.48%
                        </span>
                        <span className="text-nowrap">Since last week</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            Sales
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">924</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fas fa-arrow-down" />
                          1.10%
                        </span>
                        <span className="text-nowrap">Since yesterday</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            Performance
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            49,65%
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-percent" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fas fa-arrow-up" />
                          12%
                        </span>
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <h3 className="mb-0">Icons</h3>
                </CardHeader>
                <CardBody>
                  <Row className="icon-examples">
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="active-40"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-active-40" />
                          <span>active-40</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="air-baloon"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-air-baloon" />
                          <span>air-baloon</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="album-2"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-album-2" />
                          <span>album-2</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="align-center"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-align-center" />
                          <span>align-center</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="align-left-2"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-align-left-2" />
                          <span>align-left-2</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="ambulance"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-ambulance" />
                          <span>ambulance</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="app"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-app" />
                          <span>app</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="archive-2"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-archive-2" />
                          <span>archive-2</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="atom"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-atom" />
                          <span>atom</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="badge"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-badge" />
                          <span>badge</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bag-17"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bag-17" />
                          <span>bag-17</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="basket"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-basket" />
                          <span>basket</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bell-55"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bell-55" />
                          <span>bell-55</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bold-down"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-down" />
                          <span>bold-down</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bold-left"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-left" />
                          <span>bold-left</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bold-right"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-right" />
                          <span>bold-right</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bold-up"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-up" />
                          <span>bold-up</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bold"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold" />
                          <span>bold</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="book-bookmark"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-book-bookmark" />
                          <span>book-bookmark</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="books"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-books" />
                          <span>books</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="box-2"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-box-2" />
                          <span>box-2</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="briefcase-24"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-briefcase-24" />
                          <span>briefcase-24</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="building"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-building" />
                          <span>building</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bulb-61"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bulb-61" />
                          <span>bulb-61</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bullet-list-67"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bullet-list-67" />
                          <span>bullet-list-67</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bus-front-12"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bus-front-12" />
                          <span>bus-front-12</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="button-pause"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-button-pause" />
                          <span>button-pause</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="button-play"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-button-play" />
                          <span>button-play</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="button-power"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-button-power" />
                          <span>button-power</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="calendar-grid-58"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-calendar-grid-58" />
                          <span>calendar-grid-58</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="camera-compact"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-camera-compact" />
                          <span>camera-compact</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="caps-small"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-caps-small" />
                          <span>caps-small</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="cart"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-cart" />
                          <span>cart</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="chart-bar-32"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-chart-bar-32" />
                          <span>chart-bar-32</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="chart-pie-35"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-chart-pie-35" />
                          <span>chart-pie-35</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="chat-round"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-chat-round" />
                          <span>chat-round</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="check-bold"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-check-bold" />
                          <span>check-bold</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="circle-08"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-circle-08" />
                          <span>circle-08</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="cloud-download-95"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-cloud-download-95" />
                          <span>cloud-download-95</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="cloud-upload-96"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-cloud-upload-96" />
                          <span>cloud-upload-96</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="compass-04"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-compass-04" />
                          <span>compass-04</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="controller"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-controller" />
                          <span>controller</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="credit-card"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-credit-card" />
                          <span>credit-card</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="curved-next"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-curved-next" />
                          <span>curved-next</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="delivery-fast"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-delivery-fast" />
                          <span>delivery-fast</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="diamond"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-diamond" />
                          <span>diamond</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="email-83"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-email-83" />
                          <span>email-83</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="fat-add"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-fat-add" />
                          <span>fat-add</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="fat-delete"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-fat-delete" />
                          <span>fat-delete</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="fat-remove"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-fat-remove" />
                          <span>fat-remove</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="favourite-28"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-favourite-28" />
                          <span>favourite-28</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="folder-17"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-folder-17" />
                          <span>folder-17</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="glasses-2"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-glasses-2" />
                          <span>glasses-2</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="hat-3"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-hat-3" />
                          <span>hat-3</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="headphones"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-headphones" />
                          <span>headphones</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="html5"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-html5" />
                          <span>html5</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="istanbul"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-istanbul" />
                          <span>istanbul</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="circle-08"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-circle-08" />
                          <span>circle-08</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="key-25"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-key-25" />
                          <span>key-25</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="laptop"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-laptop" />
                          <span>laptop</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="like-2"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-like-2" />
                          <span>like-2</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="lock-circle-open"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-lock-circle-open" />
                          <span>lock-circle-open</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="map-big"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-map-big" />
                          <span>map-big</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="mobile-button"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-mobile-button" />
                          <span>mobile-button</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="money-coins"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-money-coins" />
                          <span>money-coins</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="note-03"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-note-03" />
                          <span>note-03</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="notification-70"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-notification-70" />
                          <span>notification-70</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="palette"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-palette" />
                          <span>palette</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="paper-diploma"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-paper-diploma" />
                          <span>paper-diploma</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="pin-3"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-pin-3" />
                          <span>pin-3</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="planet"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-planet" />
                          <span>planet</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="ruler-pencil"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-ruler-pencil" />
                          <span>ruler-pencil</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="satisfied"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-satisfied" />
                          <span>satisfied</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="scissors"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-scissors" />
                          <span>scissors</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="send"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-send" />
                          <span>send</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="settings-gear-65"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-settings-gear-65" />
                          <span>settings-gear-65</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="settings"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-settings" />
                          <span>settings</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="single-02"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-single-02" />
                          <span>single-02</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="single-copy-04"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-single-copy-04" />
                          <span>single-copy-04</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="sound-wave"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-sound-wave" />
                          <span>sound-wave</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="spaceship"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-spaceship" />
                          <span>spaceship</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="square-pin"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-square-pin" />
                          <span>square-pin</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="support-16"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-support-16" />
                          <span>support-16</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="tablet-button"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-tablet-button" />
                          <span>tablet-button</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="tag"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-tag" />
                          <span>tag</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="tie-bow"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-tie-bow" />
                          <span>tie-bow</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="time-alarm"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-time-alarm" />
                          <span>time-alarm</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="trophy"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-trophy" />
                          <span>trophy</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="tv-2"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-tv-2" />
                          <span>tv-2</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="umbrella-13"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-umbrella-13" />
                          <span>umbrella-13</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="user-run"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-user-run" />
                          <span>user-run</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="vector"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-vector" />
                          <span>vector</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="watch-time"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-watch-time" />
                          <span>watch-time</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="world"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-world" />
                          <span>world</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="zoom-split-in"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-zoom-split-in" />
                          <span>zoom-split-in</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="collection"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-collection" />
                          <span>collection</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="image"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-image" />
                          <span>image</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="shop"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-shop" />
                          <span>shop</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="ungroup"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-ungroup" />
                          <span>ungroup</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="world-2"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-world-2" />
                          <span>world-2</span>
                        </div>
                      </button>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="ui-04"
                        title="Copy to clipboard"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-ui-04" />
                          <span>ui-04</span>
                        </div>
                      </button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
