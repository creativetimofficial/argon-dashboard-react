import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Charts extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Charts
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Simple yet flexible Javascript charting for designers &amp; developers
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <div className="ct-example">
          <Card>
            <CardBody>
              <div className="chart">
                {/* Chart wrapper */}
                <canvas className="chart-canvas" id="chart-orders" />
              </div>
            </CardBody>
          </Card>
        </div>
        <h2 id="dark-card-with-chart">Dark card with chart</h2>
        <div className="ct-example">
          <Card className="bg-default">
            <CardBody>
              <div className="chart">
                {/* Chart wrapper */}
                <canvas className="chart-canvas" id="chart-sales" />
              </div>
            </CardBody>
          </Card>
        </div>
        <h2 id="usage">Usage</h2>
        <p>
          In order to use this charts on your page you will need to include the
          following script in the “Optional JS” area from the page’s footer:
        </p>
        <h3 id="markup">Markup</h3>
        <p>
          Simply copy one of the code examples demonstrated above and include it
          in your page.
        </p>
      </>
    );
  }
}

export default Charts;
