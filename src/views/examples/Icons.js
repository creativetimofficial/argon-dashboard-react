/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Icons = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
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
                    <CopyToClipboard
                      text={"ni ni-active-40"}
                      onCopy={() => setCopiedText("ni ni-active-40")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        id="tooltip982655500"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-active-40" />
                          <span>active-40</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip982655500"
                    >
                      {copiedText === "ni ni-active-40"
                        ? "This was Copied!"
                        : "Copy To Clipboard"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-air-baloon"}
                      onCopy={() => setCopiedText("ni ni-air-baloon")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="air-baloon"
                        id="tooltip47550434"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-air-baloon" />
                          <span>air-baloon</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip47550434"
                    >
                      {copiedText === "ni ni-air-baloon"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-album-2"}
                      onCopy={() => setCopiedText("ni ni-album-2")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="album-2"
                        id="tooltip945481346"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-album-2" />
                          <span>album-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip945481346"
                    >
                      {copiedText === "ni ni-album-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-align-center"}
                      onCopy={() => setCopiedText("ni ni-align-center")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="align-center"
                        id="tooltip662352101"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-align-center" />
                          <span>align-center</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip662352101"
                    >
                      {copiedText === "ni ni-align-center"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-left-2"}
                      onCopy={() => setCopiedText("ni ni-align-left-2")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="align-left-2"
                        id="tooltip125499785"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-align-left-2" />
                          <span>align-left-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip125499785"
                    >
                      {copiedText === "ni ni-align-left-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-ambulance"}
                      onCopy={() => setCopiedText("ni ni-ambulance")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="ambulance"
                        id="tooltip382136785"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-ambulance" />
                          <span>ambulance</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip382136785"
                    >
                      {copiedText === "ni ni-ambulance"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-asdasdsafsdsad"}
                      onCopy={() => setCopiedText("ni ni-app")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="app"
                        id="tooltip3354607"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-app" />
                          <span>app</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip3354607"
                    >
                      {copiedText === "ni ni-app"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-archive-2"}
                      onCopy={() => setCopiedText("ni ni-archive-2")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="archive-2"
                        id="tooltip949558633"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-archive-2" />
                          <span>archive-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip949558633"
                    >
                      {copiedText === "ni ni-archive-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-atom"}
                      onCopy={() => setCopiedText("ni ni-atom")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="atom"
                        id="tooltip742747005"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-atom" />
                          <span>atom</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip742747005"
                    >
                      {copiedText === "ni ni-atom"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-badge"}
                      onCopy={() => setCopiedText("ni ni-badge")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="badge"
                        id="tooltip488565068"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-badge" />
                          <span>badge</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip488565068"
                    >
                      {copiedText === "ni ni-badge"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bag-17"}
                      onCopy={() => setCopiedText("ni ni-bag-17")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bag-17"
                        id="tooltip163626790"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bag-17" />
                          <span>bag-17</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip163626790"
                    >
                      {copiedText === "ni ni-bag-17"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-basket"}
                      onCopy={() => setCopiedText("ni ni-basket")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="basket"
                        id="tooltip387253692"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-basket" />
                          <span>basket</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip387253692"
                    >
                      {copiedText === "ni ni-basket"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bell-55"}
                      onCopy={() => setCopiedText("ni ni-bell-55")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bell-55"
                        id="tooltip126752761"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bell-55" />
                          <span>bell-55</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip126752761"
                    >
                      {copiedText === "ni ni-bell-55"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-down"}
                      onCopy={() => setCopiedText("ni ni-bold-down")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bold-down"
                        id="tooltip819281856"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-down" />
                          <span>bold-down</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip819281856"
                    >
                      {copiedText === "ni ni-bold-down"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-left"}
                      onCopy={() => setCopiedText("ni ni-bold-left")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bold-left"
                        id="tooltip881699027"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-left" />
                          <span>bold-left</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip881699027"
                    >
                      {copiedText === "ni ni-bold-left"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-right"}
                      onCopy={() => setCopiedText("ni ni-bold-right")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bold-right"
                        id="tooltip208507461"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-right" />
                          <span>bold-right</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip208507461"
                    >
                      {copiedText === "ni ni-bold-right"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-up"}
                      onCopy={() => setCopiedText("ni ni-bold-up")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bold-up"
                        id="tooltip105289310"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-up" />
                          <span>bold-up</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip105289310"
                    >
                      {copiedText === "ni ni-bold-up"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold"}
                      onCopy={() => setCopiedText("ni ni-bold")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bold"
                        id="tooltip832362262"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold" />
                          <span>bold</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip832362262"
                    >
                      {copiedText === "ni ni-bold"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-book-bookmark"}
                      onCopy={() => setCopiedText("ni ni-book-bookmark")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="book-bookmark"
                        id="tooltip606002875"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-book-bookmark" />
                          <span>book-bookmark</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip606002875"
                    >
                      {copiedText === "ni ni-book-bookmark"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-books"}
                      onCopy={() => setCopiedText("ni ni-books")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="books"
                        id="tooltip484529730"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-books" />
                          <span>books</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip484529730"
                    >
                      {copiedText === "ni ni-books"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-box-2"}
                      onCopy={() => setCopiedText("ni ni-box-2")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="box-2"
                        id="tooltip509205883"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-box-2" />
                          <span>box-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip509205883"
                    >
                      {copiedText === "ni ni-box-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-briefcase-24"}
                      onCopy={() => setCopiedText("ni ni-briefcase-24")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="briefcase-24"
                        id="tooltip147778056"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-briefcase-24" />
                          <span>briefcase-24</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip147778056"
                    >
                      {copiedText === "ni ni-briefcase-24"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-building"}
                      onCopy={() => setCopiedText("ni ni-building")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="building"
                        id="tooltip157423388"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-building" />
                          <span>building</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip157423388"
                    >
                      {copiedText === "ni ni-building"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bulb-61"}
                      onCopy={() => setCopiedText("ni ni-bulb-61")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bulb-61"
                        id="tooltip126210465"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bulb-61" />
                          <span>bulb-61</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip126210465"
                    >
                      {copiedText === "ni ni-bulb-61"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-list-67"}
                      onCopy={() => setCopiedText("ni ni-list-67")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bullet-list-67"
                        id="tooltip672244852"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bullet-list-67" />
                          <span>bullet-list-67</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip672244852"
                    >
                      {copiedText === "ni ni-list-67"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bus-front-12"}
                      onCopy={() => setCopiedText("ni ni-bus-front-12")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="bus-front-12"
                        id="tooltip17383590"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bus-front-12" />
                          <span>bus-front-12</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip17383590"
                    >
                      {copiedText === "ni ni-bus-front-12"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-button-pause"}
                      onCopy={() => setCopiedText("ni ni-button-pause")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="button-pause"
                        id="tooltip721295259"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-button-pause" />
                          <span>button-pause</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip721295259"
                    >
                      {copiedText === "ni ni-button-pause"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-button-play"}
                      onCopy={() => setCopiedText("ni ni-button-play")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="button-play"
                        id="tooltip397403700"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-button-play" />
                          <span>button-play</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip397403700"
                    >
                      {copiedText === "ni ni-button-play"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-button-power"}
                      onCopy={() => setCopiedText("ni ni-button-power")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="button-power"
                        id="tooltip286478188"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-button-power" />
                          <span>button-power</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip286478188"
                    >
                      {copiedText === "ni ni-button-power"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-calendar-grid-58"}
                      onCopy={() => setCopiedText("ni ni-calendar-grid-58")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="calendar-grid-58"
                        id="tooltip332635506"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-calendar-grid-58" />
                          <span>calendar-grid-58</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip332635506"
                    >
                      {copiedText === "ni ni-calendar-grid-58"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-camera-compact"}
                      onCopy={() => setCopiedText("ni ni-camera-compact")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="camera-compact"
                        id="tooltip872817724"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-camera-compact" />
                          <span>camera-compact</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip872817724"
                    >
                      {copiedText === "ni ni-camera-compact"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-caps-small"}
                      onCopy={() => setCopiedText("ni ni-caps-small")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="caps-small"
                        id="tooltip108271146"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-caps-small" />
                          <span>caps-small</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip108271146"
                    >
                      {copiedText === "ni ni-caps-small"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-cart"}
                      onCopy={() => setCopiedText("ni ni-cart")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="cart"
                        id="tooltip315375170"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-cart" />
                          <span>cart</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip315375170"
                    >
                      {copiedText === "ni ni-cart"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-chart-bar-32"}
                      onCopy={() => setCopiedText("ni ni-chart-bar-32")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="chart-bar-32"
                        id="tooltip906739900"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-chart-bar-32" />
                          <span>chart-bar-32</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip906739900"
                    >
                      {copiedText === "ni ni-chart-bar-32"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-chart-pie-35"}
                      onCopy={() => setCopiedText("ni ni-chart-pie-35")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="chart-pie-35"
                        id="tooltip211198935"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-chart-pie-35" />
                          <span>chart-pie-35</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip211198935"
                    >
                      {copiedText === "ni ni-chart-pie-35"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-chat-round"}
                      onCopy={() => setCopiedText("ni ni-chat-round")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="chat-round"
                        id="tooltip452799920"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-chat-round" />
                          <span>chat-round</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip452799920"
                    >
                      {copiedText === "ni ni-chat-round"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-check-bold"}
                      onCopy={() => setCopiedText("ni ni-check-bold")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="check-bold"
                        id="tooltip204269497"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-check-bold" />
                          <span>check-bold</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip204269497"
                    >
                      {copiedText === "ni ni-check-bold"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-circle-08"}
                      onCopy={() => setCopiedText("ni ni-circle-08")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="circle-08"
                        id="tooltip63796078"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-circle-08" />
                          <span>circle-08</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip63796078"
                    >
                      {copiedText === "ni ni-circle-08"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-cloud-download-95"}
                      onCopy={() => setCopiedText("ni ni-cloud-download-95")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="cloud-download-95"
                        id="tooltip171823822"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-cloud-download-95" />
                          <span>cloud-download-95</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip171823822"
                    >
                      {copiedText === "ni ni-cloud-download-95"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-cloud-upload-96"}
                      onCopy={() => setCopiedText("ni ni-cloud-upload-96")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="cloud-upload-96"
                        id="tooltip603641354"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-cloud-upload-96" />
                          <span>cloud-upload-96</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip603641354"
                    >
                      {copiedText === "ni ni-cloud-upload-96"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-compass-04"}
                      onCopy={() => setCopiedText("ni ni-compass-04")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="compass-04"
                        id="tooltip138747611"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-compass-04" />
                          <span>compass-04</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip138747611"
                    >
                      {copiedText === "ni ni-compass-04"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-controller"}
                      onCopy={() => setCopiedText("ni ni-controller")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="controller"
                        id="tooltip477306514"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-controller" />
                          <span>controller</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip477306514"
                    >
                      {copiedText === "ni ni-controller"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-credit-card"}
                      onCopy={() => setCopiedText("ni ni-credit-card")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="credit-card"
                        id="tooltip672313572"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-credit-card" />
                          <span>credit-card</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip672313572"
                    >
                      {copiedText === "ni ni-credit-card"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-curved-next"}
                      onCopy={() => setCopiedText("ni ni-curved-next")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="curved-next"
                        id="tooltip228405488"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-curved-next" />
                          <span>curved-next</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip228405488"
                    >
                      {copiedText === "ni ni-curved-next"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-delivery-fast"}
                      onCopy={() => setCopiedText("ni ni-delivery-fast")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="delivery-fast"
                        id="tooltip405559"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-delivery-fast" />
                          <span>delivery-fast</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip405559"
                    >
                      {copiedText === "ni ni-delivery-fast"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-diamond"}
                      onCopy={() => setCopiedText("ni ni-diamond")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="diamond"
                        id="tooltip842334307"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-diamond" />
                          <span>diamond</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip842334307"
                    >
                      {copiedText === "ni ni-diamond"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-email-83"}
                      onCopy={() => setCopiedText("ni ni-email-83")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="email-83"
                        id="tooltip695661232"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-email-83" />
                          <span>email-83</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip695661232"
                    >
                      {copiedText === "ni ni-email-83"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-fat-add"}
                      onCopy={() => setCopiedText("ni ni-fat-add")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="fat-add"
                        id="tooltip112280005"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-fat-add" />
                          <span>fat-add</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip112280005"
                    >
                      {copiedText === "ni ni-fat-add"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-fat-delete"}
                      onCopy={() => setCopiedText("ni ni-fat-delete")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="fat-delete"
                        id="tooltip361927124"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-fat-delete" />
                          <span>fat-delete</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip361927124"
                    >
                      {copiedText === "ni ni-fat-delete"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-fat-remove"}
                      onCopy={() => setCopiedText("ni ni-fat-remove")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="fat-remove"
                        id="tooltip451275187"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-fat-remove" />
                          <span>fat-remove</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip451275187"
                    >
                      {copiedText === "ni ni-fat-remove"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-favourite-28"}
                      onCopy={() => setCopiedText("ni ni-favourite-28")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="favourite-28"
                        id="tooltip893689512"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-favourite-28" />
                          <span>favourite-28</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip893689512"
                    >
                      {copiedText === "ni ni-favourite-28"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-folder-17"}
                      onCopy={() => setCopiedText("ni ni-folder-17")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="folder-17"
                        id="tooltip988458715"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-folder-17" />
                          <span>folder-17</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip988458715"
                    >
                      {copiedText === "ni ni-folder-17"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-glasses-2"}
                      onCopy={() => setCopiedText("ni ni-glasses-2")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="glasses-2"
                        id="tooltip576477258"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-glasses-2" />
                          <span>glasses-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip576477258"
                    >
                      {copiedText === "ni ni-glasses-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-hat-3"}
                      onCopy={() => setCopiedText("ni ni-hat-3")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="hat-3"
                        id="tooltip977228923"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-hat-3" />
                          <span>hat-3</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip977228923"
                    >
                      {copiedText === "ni ni-hat-3"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-headphones"}
                      onCopy={() => setCopiedText("ni ni-headphones")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="headphones"
                        id="tooltip711983709"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-headphones" />
                          <span>headphones</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip711983709"
                    >
                      {copiedText === "ni ni-headphones"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-html5"}
                      onCopy={() => setCopiedText("ni ni-html5")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="html5"
                        id="tooltip346497134"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-html5" />
                          <span>html5</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip346497134"
                    >
                      {copiedText === "ni ni-html5"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-istanbul"}
                      onCopy={() => setCopiedText("ni ni-istanbul")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="istanbul"
                        id="tooltip344591402"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-istanbul" />
                          <span>istanbul</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip344591402"
                    >
                      {copiedText === "ni ni-istanbul"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-circle-08"}
                      onCopy={() => setCopiedText("ni ni-circle-08")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="circle-08"
                        id="tooltip815029398"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-circle-08" />
                          <span>circle-08</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip815029398"
                    >
                      {copiedText === "ni ni-circle-08"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-key-25"}
                      onCopy={() => setCopiedText("ni ni-key-25")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="key-25"
                        id="tooltip580511416"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-key-25" />
                          <span>key-25</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip580511416"
                    >
                      {copiedText === "ni ni-key-25"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-laptop"}
                      onCopy={() => setCopiedText("ni ni-laptop")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="laptop"
                        id="tooltip455996160"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-laptop" />
                          <span>laptop</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip455996160"
                    >
                      {copiedText === "ni ni-laptop"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-like-2"}
                      onCopy={() => setCopiedText("ni ni-like-2")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="like-2"
                        id="tooltip928932853"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-like-2" />
                          <span>like-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip928932853"
                    >
                      {copiedText === "ni ni-like-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-lock-circle-open"}
                      onCopy={() => setCopiedText("ni ni-lock-circle-open")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="lock-circle-open"
                        id="tooltip634042199"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-lock-circle-open" />
                          <span>lock-circle-open</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip634042199"
                    >
                      {copiedText === "ni ni-lock-circle-open"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-map-big"}
                      onCopy={() => setCopiedText("ni ni-map-big")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="map-big"
                        id="tooltip615611081"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-map-big" />
                          <span>map-big</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip615611081"
                    >
                      {copiedText === "ni ni-map-big"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-mobile-button"}
                      onCopy={() => setCopiedText("ni ni-mobile-button")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="mobile-button"
                        id="tooltip426682279"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-mobile-button" />
                          <span>mobile-button</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip426682279"
                    >
                      {copiedText === "ni ni-mobile-button"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-money-coins"}
                      onCopy={() => setCopiedText("ni ni-money-coins")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="money-coins"
                        id="tooltip198953665"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-money-coins" />
                          <span>money-coins</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip198953665"
                    >
                      {copiedText === "ni ni-money-coins"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-note-03"}
                      onCopy={() => setCopiedText("ni ni-note-03")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="note-03"
                        id="tooltip909975995"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-note-03" />
                          <span>note-03</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip909975995"
                    >
                      {copiedText === "ni ni-note-03"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-notification-70"}
                      onCopy={() => setCopiedText("ni ni-notification-70")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="notification-70"
                        id="tooltip942089221"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-notification-70" />
                          <span>notification-70</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip942089221"
                    >
                      {copiedText === "ni ni-notification-70"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-palette"}
                      onCopy={() => setCopiedText("ni ni-palette")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="palette"
                        id="tooltip721048582"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-palette" />
                          <span>palette</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip721048582"
                    >
                      {copiedText === "ni ni-palette"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-paper-diploma"}
                      onCopy={() => setCopiedText("ni ni-paper-diploma")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="paper-diploma"
                        id="tooltip875782946"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-paper-diploma" />
                          <span>paper-diploma</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip875782946"
                    >
                      {copiedText === "ni ni-paper-diploma"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-pin-3"}
                      onCopy={() => setCopiedText("ni ni-pin-3")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="pin-3"
                        id="tooltip945087492"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-pin-3" />
                          <span>pin-3</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip945087492"
                    >
                      {copiedText === "ni ni-pin-3"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-planet"}
                      onCopy={() => setCopiedText("ni ni-planet")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="planet"
                        id="tooltip482139663"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-planet" />
                          <span>planet</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip482139663"
                    >
                      {copiedText === "ni ni-planet"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-ruler-pencil"}
                      onCopy={() => setCopiedText("ni ni-ruler-pencil")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="ruler-pencil"
                        id="tooltip693938896"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-ruler-pencil" />
                          <span>ruler-pencil</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip693938896"
                    >
                      {copiedText === "ni ni-ruler-pencil"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-satisfied"}
                      onCopy={() => setCopiedText("ni ni-satisfied")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="satisfied"
                        id="tooltip634575265"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-satisfied" />
                          <span>satisfied</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip634575265"
                    >
                      {copiedText === "ni ni-satisfied"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-scissors"}
                      onCopy={() => setCopiedText("ni ni-scissors")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="scissors"
                        id="tooltip688473648"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-scissors" />
                          <span>scissors</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip688473648"
                    >
                      {copiedText === "ni ni-scissors"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-send"}
                      onCopy={() => setCopiedText("ni ni-send")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="send"
                        id="tooltip161268791"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-send" />
                          <span>send</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip161268791"
                    >
                      {copiedText === "ni ni-send"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-settings-gear-65"}
                      onCopy={() => setCopiedText("ni ni-settings-gear-65")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="settings-gear-65"
                        id="tooltip487959296"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-settings-gear-65" />
                          <span>settings-gear-65</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip487959296"
                    >
                      {copiedText === "ni ni-settings-gear-65"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-settings"}
                      onCopy={() => setCopiedText("ni ni-settings")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="settings"
                        id="tooltip156598208"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-settings" />
                          <span>settings</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip156598208"
                    >
                      {copiedText === "ni ni-settings"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-single-02"}
                      onCopy={() => setCopiedText("ni ni-single-02")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="single-02"
                        id="tooltip487356467"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-single-02" />
                          <span>single-02</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip487356467"
                    >
                      {copiedText === "ni ni-single-02"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-single-copy-04"}
                      onCopy={() => setCopiedText("ni ni-single-copy-04")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="single-copy-04"
                        id="tooltip340498904"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-single-copy-04" />
                          <span>single-copy-04</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip340498904"
                    >
                      {copiedText === "ni ni-single-copy-04"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-sound-wave"}
                      onCopy={() => setCopiedText("ni ni-sound-wave")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="sound-wave"
                        id="tooltip289156059"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-sound-wave" />
                          <span>sound-wave</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip289156059"
                    >
                      {copiedText === "ni ni-sound-wave"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-spaceship"}
                      onCopy={() => setCopiedText("ni ni-spaceship")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="spaceship"
                        id="tooltip603604642"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-spaceship" />
                          <span>spaceship</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip603604642"
                    >
                      {copiedText === "ni ni-spaceship"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-square-pin"}
                      onCopy={() => setCopiedText("ni ni-square-pin")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="square-pin"
                        id="tooltip153036405"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-square-pin" />
                          <span>square-pin</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip153036405"
                    >
                      {copiedText === "ni ni-square-pin"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-support-16"}
                      onCopy={() => setCopiedText("ni ni-support-16")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="support-16"
                        id="tooltip906422211"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-support-16" />
                          <span>support-16</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip906422211"
                    >
                      {copiedText === "ni ni-support-16"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-tablet-button"}
                      onCopy={() => setCopiedText("ni ni-tablet-button")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="tablet-button"
                        id="tooltip517579618"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-tablet-button" />
                          <span>tablet-button</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip517579618"
                    >
                      {copiedText === "ni ni-tablet-button"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-tag"}
                      onCopy={() => setCopiedText("ni ni-tag")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="tag"
                        id="tooltip297195808"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-tag" />
                          <span>tag</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip297195808"
                    >
                      {copiedText === "ni ni-tag"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-tie-bow"}
                      onCopy={() => setCopiedText("ni ni-tie-bow")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="tie-bow"
                        id="tooltip793084796"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-tie-bow" />
                          <span>tie-bow</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip793084796"
                    >
                      {copiedText === "ni ni-tie-bow"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-time-alarm"}
                      onCopy={() => setCopiedText("ni ni-time-alarm")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="time-alarm"
                        id="tooltip258891035"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-time-alarm" />
                          <span>time-alarm</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip258891035"
                    >
                      {copiedText === "ni ni-time-alarm"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-trophy"}
                      onCopy={() => setCopiedText("ni ni-trophy")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="trophy"
                        id="tooltip881235890"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-trophy" />
                          <span>trophy</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip881235890"
                    >
                      {copiedText === "ni ni-trophy"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-tv-2"}
                      onCopy={() => setCopiedText("ni ni-tv-2")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="tv-2"
                        id="tooltip330279137"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-tv-2" />
                          <span>tv-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip330279137"
                    >
                      {copiedText === "ni ni-tv-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-umbrella-13"}
                      onCopy={() => setCopiedText("ni ni-umbrella-13")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="umbrella-13"
                        id="tooltip412313570"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-umbrella-13" />
                          <span>umbrella-13</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip412313570"
                    >
                      {copiedText === "ni ni-umbrella-13"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-user-run"}
                      onCopy={() => setCopiedText("ni ni-user-run")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="user-run"
                        id="tooltip176201858"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-user-run" />
                          <span>user-run</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip176201858"
                    >
                      {copiedText === "ni ni-user-run"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-vector"}
                      onCopy={() => setCopiedText("ni ni-vector")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="vector"
                        id="tooltip71164138"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-vector" />
                          <span>vector</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip71164138"
                    >
                      {copiedText === "ni ni-vector"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-watch-time"}
                      onCopy={() => setCopiedText("ni ni-watch-time")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="watch-time"
                        id="tooltip495578192"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-watch-time" />
                          <span>watch-time</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip495578192"
                    >
                      {copiedText === "ni ni-watch-time"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-world"}
                      onCopy={() => setCopiedText("ni ni-world")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="world"
                        id="tooltip604848245"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-world" />
                          <span>world</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip604848245"
                    >
                      {copiedText === "ni ni-world"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-zoom-split-in"}
                      onCopy={() => setCopiedText("ni ni-zoom-split-in")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="zoom-split-in"
                        id="tooltip916423293"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-zoom-split-in" />
                          <span>zoom-split-in</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip916423293"
                    >
                      {copiedText === "ni ni-zoom-split-in"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-collection"}
                      onCopy={() => setCopiedText("ni ni-collection")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="collection"
                        id="tooltip142934658"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-collection" />
                          <span>collection</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip142934658"
                    >
                      {copiedText === "ni ni-collection"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-image"}
                      onCopy={() => setCopiedText("ni ni-image")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="image"
                        id="tooltip842947283"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-image" />
                          <span>image</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip842947283"
                    >
                      {copiedText === "ni ni-image"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-shop"}
                      onCopy={() => setCopiedText("ni ni-shop")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="shop"
                        id="tooltip531866818"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-shop" />
                          <span>shop</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip531866818"
                    >
                      {copiedText === "ni ni-shop"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-ungroup"}
                      onCopy={() => setCopiedText("ni ni-ungroup")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="ungroup"
                        id="tooltip470734151"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-ungroup" />
                          <span>ungroup</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip470734151"
                    >
                      {copiedText === "ni ni-ungroup"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-world-2"}
                      onCopy={() => setCopiedText("ni ni-world-2")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="world-2"
                        id="tooltip932383030"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-world-2" />
                          <span>world-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip932383030"
                    >
                      {copiedText === "ni ni-world-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-ui-04"}
                      onCopy={() => setCopiedText("ni ni-ui-04")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="ui-04"
                        id="tooltip9332484"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-ui-04" />
                          <span>ui-04</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip9332484"
                    >
                      {copiedText === "ni ni-ui-04"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
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
};

export default Icons;
