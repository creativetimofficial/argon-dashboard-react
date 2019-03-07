import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className=" ct-page-title">
          <h1 className=" ct-title" id="content">
            Card
          </h1>
          <div className=" avatar-group mt-3" />
        </div>
        <p className=" ct-lead">
          A card provides a flexible and extensible content container with
          multiple variants and options.
        </p>
        <hr />
        <h3 id="examples">Examples</h3>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="table-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="table-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="table-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="table-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="table-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="table-component-tab"
              className=" tab-example-result fade show active"
              id="table-component"
              role="tabpanel"
            >
              <Card style={{ width: "18rem" }}>
                <CardImg
                  alt="..."
                  src={require("assets/img/theme/img-1-1000x900.jpg")}
                  top
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
            </TabPane>
            <TabPane
              aria-labelledby="table-html-tab"
              className=" fade"
              id="table-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h3 id="stats-card">Stats card</h3>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="card-stats-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="card-stats-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="card-stats-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="card-stats-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="card-stats-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="card-stats-component-tab"
              className=" tab-example-result fade show active"
              id="card-stats-component"
              role="tabpanel"
            >
              <div style={{ width: "18rem" }}>
                <Card className=" card-stats mb-4 mb-lg-0">
                  <CardBody>
                    <Row>
                      <div className=" col">
                        <CardTitle className=" text-uppercase text-muted mb-0">
                          Total traffic
                        </CardTitle>
                        <span className=" h2 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col className=" col-auto">
                        <div className=" icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className=" fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className=" mt-3 mb-0 text-muted text-sm">
                      <span className=" text-success mr-2">
                        <i className=" fa fa-arrow-up" />
                        3.48%
                      </span>
                      <span className=" text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </div>
            </TabPane>
            <TabPane
              aria-labelledby="card-stats-html-tab"
              className=" fade"
              id="card-stats-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
      </>
    );
  }
}

export default Card;
