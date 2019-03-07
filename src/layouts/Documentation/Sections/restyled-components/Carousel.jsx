import React from "react";

class Carousel extends React.Component {
  render() {
    return (
      <>
        <div className=" ct-page-title">
          <h1 className=" ct-title" id="content">
            Carousel
          </h1>
          <div className=" avatar-group mt-3" />
        </div>
        <p className=" ct-lead">
          A slideshow component for cycling through elements—images or slides of
          text—like a carousel.
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <div
          className=" carousel slide"
          data-ride="carousel"
          id="carouselExampleIndicators"
        >
          <ol className=" carousel-indicators">
            <li
              className=" active"
              data-slide-to="0"
              data-target="#carouselExampleIndicators"
            />
            <li data-slide-to="1" data-target="#carouselExampleIndicators" />
            <li data-slide-to="2" data-target="#carouselExampleIndicators" />
          </ol>
          <div className=" carousel-inner">
            <div className=" carousel-item active">
              <img
                alt="..."
                className=" d-block w-100"
                src={require("assets/img/theme/img-1-1200x1000.jpg")}
              />
            </div>
            <div className=" carousel-item">
              <img
                alt="..."
                className=" d-block w-100"
                src={require("assets/img/theme/img-2-1200x1000.jpg")}
              />
            </div>
            <div className=" carousel-item">
              <img
                alt="..."
                className=" d-block w-100"
                src={require("assets/img/theme/img-1-1200x1000.jpg")}
              />
            </div>
          </div>
          <a
            className=" carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={e => e.preventDefault()}
            role="button"
          >
            <span aria-hidden={true} className=" carousel-control-prev-icon" />
            <span className=" sr-only">Previous</span>
          </a>
          <a
            className=" carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={e => e.preventDefault()}
            role="button"
          >
            <span aria-hidden={true} className=" carousel-control-next-icon" />
            <span className=" sr-only">Next</span>
          </a>
        </div>
        <div className=" position-relative" />
      </>
    );
  }
}

export default Carousel;
