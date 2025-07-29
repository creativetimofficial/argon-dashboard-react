import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = ({ stats = [] }) => {
  return (
    <>
      <div className="header pb-8 pt-4 pt-md-7" style={{ background: 'linear-gradient(87deg, #F1F2B5 -20%, #135058 100%)' }}>
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {stats.map((stat, index) => (
                <Col key={index} lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            {stat.title}
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {stat.value}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className={`icon icon-shape ${stat.bgClass} text-white rounded-circle shadow`}>
                            <i className={stat.icon} />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;