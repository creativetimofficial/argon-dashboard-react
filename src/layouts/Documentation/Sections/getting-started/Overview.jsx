import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class Overview extends React.Component {
  render() {
    return (
      <>
        <h1 className="ct-title" id="content">
          Overview
        </h1>
        <p className="ct-lead">
          An user-friendly, open source and beautiful design system based on
          Bootstrap 4, using Reactstrap, React and create-react-app.
        </p>
        <p>
          We at Creative Tim have always wanted to deliver great tools to all
          the web developers. We want to see better websites and web apps on the
          internet. <b>BLK•</b>
          Design
        </p>
        <Row className="mt-5">
          <Col md="4">
            <div className="info">
              <div className="icon icon-primary">
                <i className="ni ni-html5" />
              </div>
              <h4 className="info-title text-muted">Developer First</h4>
              <hr className="line-primary" />
              <p className="text-muted">
                <b>BLK•</b>
                Design System is a "Developer First" product, with a lot of
                variables for colors, fonts, sizes and other elements.
              </p>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-warning">
                <i className="ni ni-paper" />
              </div>
              <h4 className="info-title text-muted">
                High quality before everything
              </h4>
              <hr className="line-warning" />
              <p className="text-muted">
                We are following the latest code standards provided by the guys
                from Bootstrap, so you will love working with this design
                system.
              </p>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-danger">
                <i className="ni ni-heart-2" />
              </div>
              <h4 className="info-title text-muted">Community helpers</h4>
              <hr className="line-danger" />
              <p className="text-muted">
                Since all our products are built on top of Open Source also{" "}
                <b>BLK•</b>
                Design System is released under{" "}
                <a href="https://www.creative-tim.com/license?ref=license-page-mk-pro">
                  MIT License
                </a>
                .
              </p>
            </div>
          </Col>
        </Row>
        <h2 id="resources-and-credits">Resources and credits</h2>
        <p>
          This Design System is fully coded and built on top of Open Source,
          more details here:
        </p>
        <ul>
          <li>
            <a href="https://www.getbootstrap.com">Bootstrap 4</a>- Open source
            front end framework
          </li>
          <li>
            <a href="https://reactjs.org/">React</a>- Easy to use React
            Bootstrap 4 components
          </li>
          <li>
            <a href="https://facebook.github.io/create-react-app/">
              create-react-app
            </a>
            - Whether you’re using React or another library, Create React App
            lets you focus on code, not build tools.
          </li>
          <li>
            <a href="https://reactstrap.github.io/">Reactstrap</a>- A JavaScript
            library for building user interfaces
          </li>
          <li>
            <a href="https://fonts.google.com/specimen/Poppins">Poppins Font</a>
            - Google’s Open Source typefaces
          </li>
          <li>
            <a href="https://refreshless.com/nouislider/">noUISlider</a>-
            JavaScript Range Slider
          </li>
          <li>
            <a href="https://popper.js.org/">Popper.js</a>- Kickass library used
            to manage poppers
          </li>
        </ul>
        <h3 id="learn-more">Learn more</h3>
        <p>
          Stay up to date on the development journey and connect with us on:
        </p>
        <ul>
          <li>
            Follow{" "}
            <a href="https://twitter.com/creativetim">
              Creative Tim on Twitter
            </a>
            .
          </li>
          <li>
            Read and subscribe to{" "}
            <a href="http://blog.creative-tim.com/">
              The Official Creative Tim Blog
            </a>
            .
          </li>
          <li>
            Follow{" "}
            <a href="https://www.instagram.com/creativetimofficial/">
              Creative Tim on Instagram
            </a>
            .
          </li>
          <li>
            Like{" "}
            <a href="https://www.facebook.com/CreativeTim/">
              Creative Tim on Facebook
            </a>
            .
          </li>
        </ul>
      </>
    );
  }
}

export default Overview;
