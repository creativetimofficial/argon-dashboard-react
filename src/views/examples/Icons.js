/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
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
                    <CopyToClipboard
                      text={"active-40"}
                      onCopy={() => setCopiedText("active-40")}
                    >
                      <button
                        className=" btn-icon-clipboard"
                        id="tooltip982655500"
                        type="button"
                      >
                        <div>
                          <i className=" ni ni-active-40" />
                          <span>active-40</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip982655500"
                    >
                      {copiedText === "active-40"
                        ? "Copied"
                        : "Copy To Clipboard"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"air-baloon"}
                      onCopy={() => setCopiedText("air-baloon")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip47550434"
                    >
                      {copiedText === "air-baloon"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"album-2"}
                      onCopy={() => setCopiedText("album-2")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip945481346"
                    >
                      {copiedText === "album-2" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"align-center"}
                      onCopy={() => setCopiedText("align-center")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip662352101"
                    >
                      {copiedText === "align-center"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"left-2"}
                      onCopy={() => setCopiedText("align-left-2")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip125499785"
                    >
                      {copiedText === "align-left-2"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ambulance"}
                      onCopy={() => setCopiedText("ambulance")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip382136785"
                    >
                      {copiedText === "ambulance"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"asdasdsafsdsad"}
                      onCopy={() => setCopiedText("app")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip3354607"
                    >
                      {copiedText === "app" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"archive-2"}
                      onCopy={() => setCopiedText("archive-2")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip949558633"
                    >
                      {copiedText === "archive-2"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"atom"}
                      onCopy={() => setCopiedText("atom")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip742747005"
                    >
                      {copiedText === "atom" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"badge"}
                      onCopy={() => setCopiedText("badge")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip488565068"
                    >
                      {copiedText === "badge" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"bag-17"}
                      onCopy={() => setCopiedText("bag-17")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip163626790"
                    >
                      {copiedText === "bag-17" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"basket"}
                      onCopy={() => setCopiedText("basket")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip387253692"
                    >
                      {copiedText === "basket" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"bell-55"}
                      onCopy={() => setCopiedText("bell-55")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip126752761"
                    >
                      {copiedText === "bell-55" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"bold-down"}
                      onCopy={() => setCopiedText("bold-down")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip819281856"
                    >
                      {copiedText === "bold-down"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"bold-left"}
                      onCopy={() => setCopiedText("bold-left")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip881699027"
                    >
                      {copiedText === "bold-left"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"bold-right"}
                      onCopy={() => setCopiedText("bold-right")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip208507461"
                    >
                      {copiedText === "bold-right"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"bold-up"}
                      onCopy={() => setCopiedText("bold-up")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip105289310"
                    >
                      {copiedText === "bold-up" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"bold"}
                      onCopy={() => setCopiedText("bold")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip832362262"
                    >
                      {copiedText === "bold" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"book-bookmark"}
                      onCopy={() => setCopiedText("book-bookmark")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip606002875"
                    >
                      {copiedText === "book-bookmark"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"books"}
                      onCopy={() => setCopiedText("books")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip484529730"
                    >
                      {copiedText === "books" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"box-2"}
                      onCopy={() => setCopiedText("box-2")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip509205883"
                    >
                      {copiedText === "box-2" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"briefcase-24"}
                      onCopy={() => setCopiedText("briefcase-24")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip147778056"
                    >
                      {copiedText === "briefcase-24"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"building"}
                      onCopy={() => setCopiedText("building")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip157423388"
                    >
                      {copiedText === "building"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"bulb-61"}
                      onCopy={() => setCopiedText("bulb-61")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip126210465"
                    >
                      {copiedText === "bulb-61" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"list-67"}
                      onCopy={() => setCopiedText("list-67")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip672244852"
                    >
                      {copiedText === "list-67" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"bus-front-12"}
                      onCopy={() => setCopiedText("bus-front-12")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip17383590"
                    >
                      {copiedText === "bus-front-12"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"button-pause"}
                      onCopy={() => setCopiedText("button-pause")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip721295259"
                    >
                      {copiedText === "button-pause"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"button-play"}
                      onCopy={() => setCopiedText("button-play")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip397403700"
                    >
                      {copiedText === "button-play"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"button-power"}
                      onCopy={() => setCopiedText("button-power")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip286478188"
                    >
                      {copiedText === "button-power"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"calendar-grid-58"}
                      onCopy={() => setCopiedText("calendar-grid-58")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip332635506"
                    >
                      {copiedText === "calendar-grid-58"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"camera-compact"}
                      onCopy={() => setCopiedText("camera-compact")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip872817724"
                    >
                      {copiedText === "camera-compact"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"caps-small"}
                      onCopy={() => setCopiedText("caps-small")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip108271146"
                    >
                      {copiedText === "caps-small"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"cart"}
                      onCopy={() => setCopiedText("cart")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip315375170"
                    >
                      {copiedText === "cart" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"chart-bar-32"}
                      onCopy={() => setCopiedText("chart-bar-32")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip906739900"
                    >
                      {copiedText === "chart-bar-32"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"chart-pie-35"}
                      onCopy={() => setCopiedText("chart-pie-35")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip211198935"
                    >
                      {copiedText === "chart-pie-35"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"chat-round"}
                      onCopy={() => setCopiedText("chat-round")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip452799920"
                    >
                      {copiedText === "chat-round"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"check-bold"}
                      onCopy={() => setCopiedText("check-bold")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip204269497"
                    >
                      {copiedText === "check-bold"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"circle-08"}
                      onCopy={() => setCopiedText("circle-08")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip63796078"
                    >
                      {copiedText === "circle-08"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"cloud-download-95"}
                      onCopy={() => setCopiedText("cloud-download-95")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip171823822"
                    >
                      {copiedText === "cloud-download-95"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"cloud-upload-96"}
                      onCopy={() => setCopiedText("cloud-upload-96")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip603641354"
                    >
                      {copiedText === "cloud-upload-96"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"compass-04"}
                      onCopy={() => setCopiedText("compass-04")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip138747611"
                    >
                      {copiedText === "compass-04"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"controller"}
                      onCopy={() => setCopiedText("controller")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip477306514"
                    >
                      {copiedText === "controller"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"credit-card"}
                      onCopy={() => setCopiedText("credit-card")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip672313572"
                    >
                      {copiedText === "credit-card"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"curved-next"}
                      onCopy={() => setCopiedText("curved-next")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip228405488"
                    >
                      {copiedText === "curved-next"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"delivery-fast"}
                      onCopy={() => setCopiedText("delivery-fast")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip405559"
                    >
                      {copiedText === "delivery-fast"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"diamond"}
                      onCopy={() => setCopiedText("diamond")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip842334307"
                    >
                      {copiedText === "diamond" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"email-83"}
                      onCopy={() => setCopiedText("email-83")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip695661232"
                    >
                      {copiedText === "email-83"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"fat-add"}
                      onCopy={() => setCopiedText("fat-add")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip112280005"
                    >
                      {copiedText === "fat-add" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"fat-delete"}
                      onCopy={() => setCopiedText("fat-delete")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip361927124"
                    >
                      {copiedText === "fat-delete"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"fat-remove"}
                      onCopy={() => setCopiedText("fat-remove")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip451275187"
                    >
                      {copiedText === "fat-remove"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"favourite-28"}
                      onCopy={() => setCopiedText("favourite-28")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip893689512"
                    >
                      {copiedText === "favourite-28"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"folder-17"}
                      onCopy={() => setCopiedText("folder-17")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip988458715"
                    >
                      {copiedText === "folder-17"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"glasses-2"}
                      onCopy={() => setCopiedText("glasses-2")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip576477258"
                    >
                      {copiedText === "glasses-2"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"hat-3"}
                      onCopy={() => setCopiedText("hat-3")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip977228923"
                    >
                      {copiedText === "hat-3" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"headphones"}
                      onCopy={() => setCopiedText("headphones")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip711983709"
                    >
                      {copiedText === "headphones"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"html5"}
                      onCopy={() => setCopiedText("html5")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip346497134"
                    >
                      {copiedText === "html5" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"istanbul"}
                      onCopy={() => setCopiedText("istanbul")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip344591402"
                    >
                      {copiedText === "istanbul"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"circle-08"}
                      onCopy={() => setCopiedText("circle-08")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip815029398"
                    >
                      {copiedText === "circle-08"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"key-25"}
                      onCopy={() => setCopiedText("key-25")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip580511416"
                    >
                      {copiedText === "key-25" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"laptop"}
                      onCopy={() => setCopiedText("laptop")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip455996160"
                    >
                      {copiedText === "laptop" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"like-2"}
                      onCopy={() => setCopiedText("like-2")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip928932853"
                    >
                      {copiedText === "like-2" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"lock-circle-open"}
                      onCopy={() => setCopiedText("lock-circle-open")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip634042199"
                    >
                      {copiedText === "lock-circle-open"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"map-big"}
                      onCopy={() => setCopiedText("map-big")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip615611081"
                    >
                      {copiedText === "map-big" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"mobile-button"}
                      onCopy={() => setCopiedText("mobile-button")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip426682279"
                    >
                      {copiedText === "mobile-button"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"money-coins"}
                      onCopy={() => setCopiedText("money-coins")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip198953665"
                    >
                      {copiedText === "money-coins"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"note-03"}
                      onCopy={() => setCopiedText("note-03")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip909975995"
                    >
                      {copiedText === "note-03" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"notification-70"}
                      onCopy={() => setCopiedText("notification-70")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip942089221"
                    >
                      {copiedText === "notification-70"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"palette"}
                      onCopy={() => setCopiedText("palette")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip721048582"
                    >
                      {copiedText === "palette" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"paper-diploma"}
                      onCopy={() => setCopiedText("paper-diploma")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip875782946"
                    >
                      {copiedText === "paper-diploma"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"pin-3"}
                      onCopy={() => setCopiedText("pin-3")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip945087492"
                    >
                      {copiedText === "pin-3" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"planet"}
                      onCopy={() => setCopiedText("planet")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip482139663"
                    >
                      {copiedText === "planet" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ruler-pencil"}
                      onCopy={() => setCopiedText("ruler-pencil")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip693938896"
                    >
                      {copiedText === "ruler-pencil"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"satisfied"}
                      onCopy={() => setCopiedText("satisfied")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip634575265"
                    >
                      {copiedText === "satisfied"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"scissors"}
                      onCopy={() => setCopiedText("scissors")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip688473648"
                    >
                      {copiedText === "scissors"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"send"}
                      onCopy={() => setCopiedText("send")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip161268791"
                    >
                      {copiedText === "send" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"settings-gear-65"}
                      onCopy={() => setCopiedText("settings-gear-65")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip487959296"
                    >
                      {copiedText === "settings-gear-65"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"settings"}
                      onCopy={() => setCopiedText("settings")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip156598208"
                    >
                      {copiedText === "settings"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"single-02"}
                      onCopy={() => setCopiedText("single-02")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip487356467"
                    >
                      {copiedText === "single-02"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"single-copy-04"}
                      onCopy={() => setCopiedText("single-copy-04")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip340498904"
                    >
                      {copiedText === "single-copy-04"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"sound-wave"}
                      onCopy={() => setCopiedText("sound-wave")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip289156059"
                    >
                      {copiedText === "sound-wave"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"spaceship"}
                      onCopy={() => setCopiedText("spaceship")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip603604642"
                    >
                      {copiedText === "spaceship"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"square-pin"}
                      onCopy={() => setCopiedText("square-pin")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip153036405"
                    >
                      {copiedText === "square-pin"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"support-16"}
                      onCopy={() => setCopiedText("support-16")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip906422211"
                    >
                      {copiedText === "support-16"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"tablet-button"}
                      onCopy={() => setCopiedText("tablet-button")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip517579618"
                    >
                      {copiedText === "tablet-button"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"tag"}
                      onCopy={() => setCopiedText("tag")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip297195808"
                    >
                      {copiedText === "tag" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"tie-bow"}
                      onCopy={() => setCopiedText("tie-bow")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip793084796"
                    >
                      {copiedText === "tie-bow" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"time-alarm"}
                      onCopy={() => setCopiedText("time-alarm")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip258891035"
                    >
                      {copiedText === "time-alarm"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"trophy"}
                      onCopy={() => setCopiedText("trophy")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip881235890"
                    >
                      {copiedText === "trophy" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"tv-2"}
                      onCopy={() => setCopiedText("tv-2")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip330279137"
                    >
                      {copiedText === "tv-2" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"umbrella-13"}
                      onCopy={() => setCopiedText("umbrella-13")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip412313570"
                    >
                      {copiedText === "umbrella-13"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"user-run"}
                      onCopy={() => setCopiedText("user-run")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip176201858"
                    >
                      {copiedText === "user-run"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"vector"}
                      onCopy={() => setCopiedText("vector")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip71164138"
                    >
                      {copiedText === "vector" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"watch-time"}
                      onCopy={() => setCopiedText("watch-time")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip495578192"
                    >
                      {copiedText === "watch-time"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"world"}
                      onCopy={() => setCopiedText("world")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip604848245"
                    >
                      {copiedText === "world" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"zoom-split-in"}
                      onCopy={() => setCopiedText("zoom-split-in")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip916423293"
                    >
                      {copiedText === "zoom-split-in"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"collection"}
                      onCopy={() => setCopiedText("collection")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip142934658"
                    >
                      {copiedText === "collection"
                        ? "Copied"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"image"}
                      onCopy={() => setCopiedText("image")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip842947283"
                    >
                      {copiedText === "image" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"shop"}
                      onCopy={() => setCopiedText("shop")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip531866818"
                    >
                      {copiedText === "shop" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ungroup"}
                      onCopy={() => setCopiedText("ungroup")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip470734151"
                    >
                      {copiedText === "ungroup" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"world-2"}
                      onCopy={() => setCopiedText("world-2")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip932383030"
                    >
                      {copiedText === "world-2" ? "Copied" : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ui-04"}
                      onCopy={() => setCopiedText("ui-04")}
                    >
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
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip9332484"
                    >
                      {copiedText === "ui-04" ? "Copied" : "Copy To Clipbord"}
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
