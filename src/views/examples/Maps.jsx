import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";
// corec components
import Header from "components/Header/Header.jsx";
class Maps extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow border-0">
                <div
                  className="map-canvas"
                  data-lat="40.748817"
                  data-lng="-73.985428"
                  id="map-canvas"
                  style={{ height: "600px" }}
                />
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Maps;
