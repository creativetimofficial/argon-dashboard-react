import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  UncontrolledTooltip
} from "reactstrap";

class Tooltips extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Tooltips
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Documentation and examples for Bootstrap’s powerful, responsive
          navigation header, the navbar. Includes support for branding,
          navigation, and more, including support for our collapse plugin.
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <div className="ct-example">
          <Button
            className="btn-white"
            color="default"
            data-placement="top"
            id="tooltip611234743"
            size="sm"
            type="button"
          >
            Tooltip on top
          </Button>
          <UncontrolledTooltip
            delay={0}
            placement="top"
            target="tooltip611234743"
          >
            Tooltip on top
          </UncontrolledTooltip>
          <Button
            className="btn-white"
            color="default"
            data-placement="right"
            id="tooltip159654437"
            size="sm"
            type="button"
          >
            Tooltip on right
          </Button>
          <UncontrolledTooltip
            delay={0}
            placement="right"
            target="tooltip159654437"
          >
            Tooltip on right
          </UncontrolledTooltip>
          <Button
            className="btn-white"
            color="default"
            data-placement="bottom"
            id="tooltip860969338"
            size="sm"
            type="button"
          >
            Tooltip on bottom
          </Button>
          <UncontrolledTooltip
            delay={0}
            placement="bottom"
            target="tooltip860969338"
          >
            Tooltip on bottom
          </UncontrolledTooltip>
          <Button
            className="btn-white"
            color="default"
            data-placement="left"
            id="tooltip297043631"
            size="sm"
            type="button"
          >
            Tooltip on left
          </Button>
          <UncontrolledTooltip
            delay={0}
            placement="left"
            target="tooltip297043631"
          >
            Tooltip on left
          </UncontrolledTooltip>
        </div>
      </>
    );
  }
}

export default Tooltips;
