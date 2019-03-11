import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";

class Cards extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Card
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          A card provides a flexible and extensible content container with
          multiple variants and options.
        </p>
        <hr />
        <h3 id="examples">Examples</h3>
        <div className="ct-example">
          <Card style={{ width: "18rem" }}>
            <CardImg
              alt="..."
              src={require("assets/img/theme/img-1-1000x900.jpg")}
              top
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </div>
        <h3 id="stats-card">Stats card</h3>
        <div className="ct-example">
          <div style={{ width: "18rem" }}>
            <Card className="card-stats mb-4 mb-lg-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle className="text-uppercase text-muted mb-0">
                      Total traffic
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">350,897</span>
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
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
