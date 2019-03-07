import React from "react";

// reactstrap components
import { Button, Row, Col } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Icons
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Get started with Bootstrap, the world’s most popular framework for
          building responsive, mobile-first sites, with BootstrapCDN and a
          template starter page.
        </p>
        <hr />
        <h2 id="nucleo">Nucleo</h2>
        <p>
          Argon comes with 100 custom icons made by our friends from Nucleo App.
          The official package contains over 25000 icons which are looking great
          in combination with Argon. Make sure you check all of them and use
          those that you like the most.
        </p>
        <h3 id="usage">Usage</h3>
        <p>
          In order to use this icons on your page you will need to include the
          following script in the{" "}
          <code className="highlighter-rouge">{`<head>`}</code>
          section of your page before the theme’s main style:
        </p>
        <h3 id="initialization">Initialization</h3>
        <p>
          Start placing icons in your HTML’s{" "}
          <code className="highlighter-rouge">{`<body>`}</code>. We recommend
          using a consistent HTML element, like{" "}
          <code className="highlighter-rouge">{`<i>`}</code>. Find the right
          icon and learn how to reference it in your markup.
        </p>
        <p>You need to know two bits of information to reference an icon:</p>
        <ol>
          <li>its name, prefixed with ni- and</li>
          <li>the style you want to use’s corresponding prefix.</li>
        </ol>
        <h3 id="icons">Icons</h3>
        <Row className="icon-examples mb-4">
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
          <Col lg="3">
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
        <p>
          Want more icons? Increase your collection by choosing more icon
          examples from Nucleo App website:{" "}
          <Button
            className="mt-4"
            color="primary"
            href="https://nucleoapp.com/?ref=1712"
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to Nucleo App
          </Button>
        </p>
        <h2 id="font-awesome-5">Font Awesome 5</h2>
        <p>
          Optionally, Argon comes with Font Awesome which means 3000+ more
          vector icons made for you to use.
        </p>
        <h3 id="usage-1">Usage</h3>
        <p>
          In order to use this icons on your page you will need to include the
          following script in the{" "}
          <code className="highlighter-rouge">{`<head>`}</code>
          section of your page before the theme’s main style:
        </p>
        <h3 id="initialization-1">Initialization</h3>
        <p>
          Start placing icons in your HTML’s{" "}
          <code className="highlighter-rouge">{`<body>`}</code>. We recommend
          using a consistent HTML element, like{" "}
          <code className="highlighter-rouge">{`<i>`}</code>. Find the right
          icon and learn how to reference it in your markup.
        </p>
        <p>You need to know two bits of information to reference an icon:</p>
        <ol>
          <li>its name, prefixed with fa- and</li>
          <li>the style you want to use’s corresponding prefix.</li>
        </ol>
        <h3 id="icons-1">Icons</h3>
        <p>Get the icon you need on the official website:</p>
        <p>
          <Button
            color="primary"
            href="https://fontawesome.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to Font Awesome
          </Button>
        </p>
      </>
    );
  }
}

export default Icons;
