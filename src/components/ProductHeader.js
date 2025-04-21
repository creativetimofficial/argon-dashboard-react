

import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row >
            <Col lg="10" md="10">
              <h1 className="display-2 text-white">Ready to sell?</h1>
              <p className="text-white mt-0 mb-5">
                Just fill in the form below, and click the "Submit" button
              </p>
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
