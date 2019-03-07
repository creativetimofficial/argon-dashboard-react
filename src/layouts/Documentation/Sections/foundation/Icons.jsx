import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { CardBody, Row, Col } from "reactstrap";

const codeImport = `import "assets/css/nucleo-icons.css";`;

const codeExample = `<i className="ni ni-single-02">`;

class Icons extends React.Component {
  render() {
    return (
      <>
        <h1 className="ct-title" id="content">
          Nucleo Icons
        </h1>
        <p className="ct-lead" />
        <h2 id="nucleo">Nucleo</h2>
        <p>
          <b>BLK•</b>
          Design System comes with 100 custom icons made by our friends from
          Nucleo App. The official package contains over 25000 icons which are
          looking great in combination with <b>BLK•</b>. Make sure you check all
          of them and use those that you like the most.
        </p>
        <h3 id="usage">Usage</h3>
        <p>
          In order to use this icons on your app don't forget to import the
          styles:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <h3 id="initialization">Initialization</h3>
        <p>
          Start placing icons in your app. We recommend using a consistent HTML
          element, like <code className="highlighter-rouge">{`<i>`}</code>. Find
          the right icon and learn how to reference it in your markup.
        </p>
        <h3 id="example">Example</h3>
        <div className="ct-example" data-example-id="">
          <i className="ni ni-single-02" />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h3 id="icons">Icons</h3>
        <div className="ct-example">
          <CardBody className="all-icons">
            <Row>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-alert-circle-exc" />
                  <p>icon-alert-circle-exc</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-align-center" />
                  <p>icon-align-center</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-align-left-2" />
                  <p>icon-align-left-2</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-app" />
                  <p>icon-app</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-atom" />
                  <p>icon-atom</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-attach-87" />
                  <p>icon-attach-87</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-badge" />
                  <p>icon-badge</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-bag-16" />
                  <p>icon-bag-16</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-bank" />
                  <p>icon-bank</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-basket-simple" />
                  <p>icon-basket-simple</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-bell-55" />
                  <p>icon-bell-55</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-bold" />
                  <p>icon-bold</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-book-bookmark" />
                  <p>icon-book-bookmark</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-double-right" />
                  <p>icon-double-right</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-bulb-63" />
                  <p>icon-bulb-63</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-bullet-list-67" />
                  <p>icon-bullet-list-67</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-bus-front-12" />
                  <p>icon-bus-front-12</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-button-power" />
                  <p>icon-button-power</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-camera-18" />
                  <p>icon-camera-18</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-calendar-60" />
                  <p>icon-calendar-60</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-caps-small" />
                  <p>icon-caps-small</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-cart" />
                  <p>icon-cart</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-chart-bar-32" />
                  <p>icon-chart-bar-32</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-chart-pie-36" />
                  <p>icon-chart-pie-36</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-chat-33" />
                  <p>icon-chat-33</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-check-2" />
                  <p>icon-check-2</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-cloud-download-93" />
                  <p>icon-cloud-download-93</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-cloud-upload-94" />
                  <p>icon-cloud-upload-94</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-coins" />
                  <p>icon-coins</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-compass-05" />
                  <p>icon-compass-05</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-controller" />
                  <p>icon-controller</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-credit-card" />
                  <p>icon-credit-card</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-delivery-fast" />
                  <p>icon-delivery-fast</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-email-85" />
                  <p>icon-email-85</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-gift-2" />
                  <p>icon-gift-2</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-globe-2" />
                  <p>icon-globe-2</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-headphones" />
                  <p>icon-headphones</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-heart-2" />
                  <p>icon-heart-2</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-html5" />
                  <p>icon-html5</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-double-left" />
                  <p>icon-double-left</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-image-02" />
                  <p>icon-image-02</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-istanbul" />
                  <p>icon-istanbul</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-key-25" />
                  <p>icon-key-25</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-laptop" />
                  <p>icon-laptop</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-light-3" />
                  <p>icon-light-3</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-link-72" />
                  <p>icon-link-72</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-lock-circle" />
                  <p>icon-lock-circle</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-map-big" />
                  <p>icon-map-big</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-minimal-down" />
                  <p>icon-minimal-down</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-minimal-left" />
                  <p>icon-minimal-left</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-minimal-right" />
                  <p>icon-minimal-right</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-minimal-up" />
                  <p>icon-minimal-up</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-mobile" />
                  <p>icon-mobile</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-molecule-40" />
                  <p>icon-molecule-40</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-money-coins" />
                  <p>icon-money-coins</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-notes" />
                  <p>icon-notes</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-palette" />
                  <p>icon-palette</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-paper" />
                  <p>icon-paper</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-pin" />
                  <p>icon-pin</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-planet" />
                  <p>icon-planet</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-puzzle-10" />
                  <p>icon-puzzle-10</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-pencil" />
                  <p>icon-pencil</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-satisfied" />
                  <p>icon-satisfied</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-scissors" />
                  <p>icon-scissors</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-send" />
                  <p>icon-send</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-settings-gear-63" />
                  <p>icon-settings-gear-63</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-settings" />
                  <p>icon-settings</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-wifi" />
                  <p>icon-wifi</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-single-02" />
                  <p>icon-single-02</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-single-copy-04" />
                  <p>icon-single-copy-04</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-sound-wave" />
                  <p>icon-sound-wave</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-spaceship" />
                  <p>icon-spaceship</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-square-pin" />
                  <p>icon-square-pin</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-support-17" />
                  <p>icon-support-17</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-tablet-2" />
                  <p>icon-tablet-2</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-tag" />
                  <p>icon-tag</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-tap-02" />
                  <p>icon-tap-02</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-tie-bow" />
                  <p>icon-tie-bow</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-time-alarm" />
                  <p>icon-time-alarm</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-trash-simple" />
                  <p>icon-trash-simple</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-trophy" />
                  <p>icon-trophy</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-tv-2" />
                  <p>icon-tv-2</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-upload" />
                  <p>icon-upload</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-user-run" />
                  <p>icon-user-run</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-vector" />
                  <p>icon-vector</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-video-66" />
                  <p>icon-video-66</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-wallet-43" />
                  <p>icon-wallet-43</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-volume-98" />
                  <p>icon-volume-98</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-watch-time" />
                  <p>icon-watch-time</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-world" />
                  <p>icon-world</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-zoom-split" />
                  <p>icon-zoom-split</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-refresh-01" />
                  <p>icon-refresh-01</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-refresh-02" />
                  <p>icon-refresh-02</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-shape-star" />
                  <p>icon-shape-star</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-components" />
                  <p>icon-components</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-triangle-right-17" />
                  <p>icon-triangle-right-17</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-button-pause" />
                  <p>icon-button-pause</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-simple-remove" />
                  <p>icon-simple-remove</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-simple-add" />
                  <p>icon-simple-add</p>
                </div>
              </Col>
              <Col
                className="font-icon-list col-xs-6 col-xs-6"
                lg="2"
                md="3"
                sm="4"
              >
                <div className="font-icon-detail">
                  <i className="ni ni-simple-delete" />
                  <p>icon-simple-delete</p>
                </div>
              </Col>
            </Row>
          </CardBody>
        </div>
      </>
    );
  }
}

export default Icons;
