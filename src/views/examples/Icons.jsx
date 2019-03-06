import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledTooltip
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
                          <CardTitle
                            className="text-uppercase text-muted mb-0"
                            tag="h5"
                          >
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
                          <CardTitle
                            className="text-uppercase text-muted mb-0"
                            tag="h5"
                          >
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
                          <CardTitle
                            className="text-uppercase text-muted mb-0"
                            tag="h5"
                          >
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
                          <CardTitle
                            className="text-uppercase text-muted mb-0"
                            tag="h5"
                          >
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
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Icons</h3>
                </CardHeader>
                <CardBody>
                  <Row className=" icon-examples">
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="active-40"
                        id="tooltip982655500"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-active-40" />
                          <span>active-40</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip982655500">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="air-baloon"
                        id="tooltip47550434"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-air-baloon" />
                          <span>air-baloon</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip47550434">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="album-2"
                        id="tooltip945481346"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-album-2" />
                          <span>album-2</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip945481346">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="align-center"
                        id="tooltip662352101"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-align-center" />
                          <span>align-center</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip662352101">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="align-left-2"
                        id="tooltip125499785"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-align-left-2" />
                          <span>align-left-2</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip125499785">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="ambulance"
                        id="tooltip382136785"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-ambulance" />
                          <span>ambulance</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip382136785">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="app"
                        id="tooltip3354607"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-app" />
                          <span>app</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip3354607">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="archive-2"
                        id="tooltip949558633"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-archive-2" />
                          <span>archive-2</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip949558633">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="atom"
                        id="tooltip742747005"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-atom" />
                          <span>atom</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip742747005">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="badge"
                        id="tooltip488565068"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-badge" />
                          <span>badge</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip488565068">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="bag-17"
                        id="tooltip163626790"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-bag-17" />
                          <span>bag-17</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip163626790">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="basket"
                        id="tooltip387253692"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-basket" />
                          <span>basket</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip387253692">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="bell-55"
                        id="tooltip126752761"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-bell-55" />
                          <span>bell-55</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip126752761">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="bold-down"
                        id="tooltip819281856"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-bold-down" />
                          <span>bold-down</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip819281856">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="bold-left"
                        id="tooltip881699027"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-bold-left" />
                          <span>bold-left</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip881699027">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="bold-right"
                        id="tooltip208507461"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-bold-right" />
                          <span>bold-right</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip208507461">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="bold-up"
                        id="tooltip105289310"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-bold-up" />
                          <span>bold-up</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip105289310">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="bold"
                        id="tooltip832362262"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-bold" />
                          <span>bold</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip832362262">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="book-bookmark"
                        id="tooltip606002875"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-book-bookmark" />
                          <span>book-bookmark</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip606002875">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="books"
                        id="tooltip484529730"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-books" />
                          <span>books</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip484529730">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="box-2"
                        id="tooltip509205883"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-box-2" />
                          <span>box-2</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip509205883">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="briefcase-24"
                        id="tooltip147778056"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-briefcase-24" />
                          <span>briefcase-24</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip147778056">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="building"
                        id="tooltip157423388"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-building" />
                          <span>building</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip157423388">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="bulb-61"
                        id="tooltip126210465"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-bulb-61" />
                          <span>bulb-61</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip126210465">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="bullet-list-67"
                        id="tooltip672244852"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-bullet-list-67" />
                          <span>bullet-list-67</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip672244852">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="bus-front-12"
                        id="tooltip17383590"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-bus-front-12" />
                          <span>bus-front-12</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip17383590">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="button-pause"
                        id="tooltip721295259"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-button-pause" />
                          <span>button-pause</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip721295259">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="button-play"
                        id="tooltip397403700"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-button-play" />
                          <span>button-play</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip397403700">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="button-power"
                        id="tooltip286478188"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-button-power" />
                          <span>button-power</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip286478188">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="calendar-grid-58"
                        id="tooltip332635506"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-calendar-grid-58" />
                          <span>calendar-grid-58</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip332635506">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="camera-compact"
                        id="tooltip872817724"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-camera-compact" />
                          <span>camera-compact</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip872817724">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="caps-small"
                        id="tooltip108271146"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-caps-small" />
                          <span>caps-small</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip108271146">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="cart"
                        id="tooltip315375170"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-cart" />
                          <span>cart</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip315375170">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="chart-bar-32"
                        id="tooltip906739900"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-chart-bar-32" />
                          <span>chart-bar-32</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip906739900">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="chart-pie-35"
                        id="tooltip211198935"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-chart-pie-35" />
                          <span>chart-pie-35</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip211198935">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="chat-round"
                        id="tooltip452799920"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-chat-round" />
                          <span>chat-round</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip452799920">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="check-bold"
                        id="tooltip204269497"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-check-bold" />
                          <span>check-bold</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip204269497">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="circle-08"
                        id="tooltip63796078"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-circle-08" />
                          <span>circle-08</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip63796078">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="cloud-download-95"
                        id="tooltip171823822"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-cloud-download-95" />
                          <span>cloud-download-95</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip171823822">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="cloud-upload-96"
                        id="tooltip603641354"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-cloud-upload-96" />
                          <span>cloud-upload-96</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip603641354">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="compass-04"
                        id="tooltip138747611"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-compass-04" />
                          <span>compass-04</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip138747611">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="controller"
                        id="tooltip477306514"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-controller" />
                          <span>controller</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip477306514">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="credit-card"
                        id="tooltip672313572"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-credit-card" />
                          <span>credit-card</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip672313572">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="curved-next"
                        id="tooltip228405488"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-curved-next" />
                          <span>curved-next</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip228405488">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="delivery-fast"
                        id="tooltip405559"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-delivery-fast" />
                          <span>delivery-fast</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip405559">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="diamond"
                        id="tooltip842334307"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-diamond" />
                          <span>diamond</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip842334307">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="email-83"
                        id="tooltip695661232"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-email-83" />
                          <span>email-83</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip695661232">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="fat-add"
                        id="tooltip112280005"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-fat-add" />
                          <span>fat-add</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip112280005">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="fat-delete"
                        id="tooltip361927124"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-fat-delete" />
                          <span>fat-delete</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip361927124">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="fat-remove"
                        id="tooltip451275187"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-fat-remove" />
                          <span>fat-remove</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip451275187">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="favourite-28"
                        id="tooltip893689512"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-favourite-28" />
                          <span>favourite-28</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip893689512">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="folder-17"
                        id="tooltip988458715"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-folder-17" />
                          <span>folder-17</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip988458715">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="glasses-2"
                        id="tooltip576477258"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-glasses-2" />
                          <span>glasses-2</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip576477258">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="hat-3"
                        id="tooltip977228923"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-hat-3" />
                          <span>hat-3</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip977228923">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="headphones"
                        id="tooltip711983709"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-headphones" />
                          <span>headphones</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip711983709">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="html5"
                        id="tooltip346497134"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-html5" />
                          <span>html5</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip346497134">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="istanbul"
                        id="tooltip344591402"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-istanbul" />
                          <span>istanbul</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip344591402">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="circle-08"
                        id="tooltip815029398"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-circle-08" />
                          <span>circle-08</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip815029398">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="key-25"
                        id="tooltip580511416"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-key-25" />
                          <span>key-25</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip580511416">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="laptop"
                        id="tooltip455996160"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-laptop" />
                          <span>laptop</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip455996160">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="like-2"
                        id="tooltip928932853"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-like-2" />
                          <span>like-2</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip928932853">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="lock-circle-open"
                        id="tooltip634042199"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-lock-circle-open" />
                          <span>lock-circle-open</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip634042199">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="map-big"
                        id="tooltip615611081"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-map-big" />
                          <span>map-big</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip615611081">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="mobile-button"
                        id="tooltip426682279"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-mobile-button" />
                          <span>mobile-button</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip426682279">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="money-coins"
                        id="tooltip198953665"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-money-coins" />
                          <span>money-coins</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip198953665">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="note-03"
                        id="tooltip909975995"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-note-03" />
                          <span>note-03</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip909975995">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="notification-70"
                        id="tooltip942089221"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-notification-70" />
                          <span>notification-70</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip942089221">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="palette"
                        id="tooltip721048582"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-palette" />
                          <span>palette</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip721048582">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="paper-diploma"
                        id="tooltip875782946"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-paper-diploma" />
                          <span>paper-diploma</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip875782946">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="pin-3"
                        id="tooltip945087492"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-pin-3" />
                          <span>pin-3</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip945087492">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="planet"
                        id="tooltip482139663"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-planet" />
                          <span>planet</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip482139663">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="ruler-pencil"
                        id="tooltip693938896"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-ruler-pencil" />
                          <span>ruler-pencil</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip693938896">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="satisfied"
                        id="tooltip634575265"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-satisfied" />
                          <span>satisfied</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip634575265">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="scissors"
                        id="tooltip688473648"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-scissors" />
                          <span>scissors</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip688473648">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="send"
                        id="tooltip161268791"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-send" />
                          <span>send</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip161268791">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="settings-gear-65"
                        id="tooltip487959296"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-settings-gear-65" />
                          <span>settings-gear-65</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip487959296">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="settings"
                        id="tooltip156598208"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-settings" />
                          <span>settings</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip156598208">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="single-02"
                        id="tooltip487356467"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-single-02" />
                          <span>single-02</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip487356467">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="single-copy-04"
                        id="tooltip340498904"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-single-copy-04" />
                          <span>single-copy-04</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip340498904">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="sound-wave"
                        id="tooltip289156059"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-sound-wave" />
                          <span>sound-wave</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip289156059">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="spaceship"
                        id="tooltip603604642"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-spaceship" />
                          <span>spaceship</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip603604642">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="square-pin"
                        id="tooltip153036405"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-square-pin" />
                          <span>square-pin</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip153036405">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="support-16"
                        id="tooltip906422211"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-support-16" />
                          <span>support-16</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip906422211">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="tablet-button"
                        id="tooltip517579618"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-tablet-button" />
                          <span>tablet-button</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip517579618">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="tag"
                        id="tooltip297195808"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-tag" />
                          <span>tag</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip297195808">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="tie-bow"
                        id="tooltip793084796"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-tie-bow" />
                          <span>tie-bow</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip793084796">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="time-alarm"
                        id="tooltip258891035"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-time-alarm" />
                          <span>time-alarm</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip258891035">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="trophy"
                        id="tooltip881235890"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-trophy" />
                          <span>trophy</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip881235890">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="tv-2"
                        id="tooltip330279137"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-tv-2" />
                          <span>tv-2</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip330279137">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="umbrella-13"
                        id="tooltip412313570"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-umbrella-13" />
                          <span>umbrella-13</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip412313570">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="user-run"
                        id="tooltip176201858"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-user-run" />
                          <span>user-run</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip176201858">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="vector"
                        id="tooltip71164138"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-vector" />
                          <span>vector</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip71164138">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="watch-time"
                        id="tooltip495578192"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-watch-time" />
                          <span>watch-time</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip495578192">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="world"
                        id="tooltip604848245"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-world" />
                          <span>world</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip604848245">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="zoom-split-in"
                        id="tooltip916423293"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-zoom-split-in" />
                          <span>zoom-split-in</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip916423293">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="collection"
                        id="tooltip142934658"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-collection" />
                          <span>collection</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip142934658">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="image"
                        id="tooltip842947283"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-image" />
                          <span>image</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip842947283">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="shop"
                        id="tooltip531866818"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-shop" />
                          <span>shop</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip531866818">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="ungroup"
                        id="tooltip470734151"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-ungroup" />
                          <span>ungroup</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip470734151">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="world-2"
                        id="tooltip932383030"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-world-2" />
                          <span>world-2</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip932383030">
                        Copy to clipboard
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                      <button
                        className=" btn-icon-clipboard"
                        data-clipboard-text="ui-04"
                        id="tooltip9332484"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-ui-04" />
                          <span>ui-04</span>
                        </div>
                      </button>
                      <UncontrolledTooltip delay={0} target="tooltip9332484">
                        Copy to clipboard
                      </UncontrolledTooltip>
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
