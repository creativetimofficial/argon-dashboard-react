import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class Colors extends React.Component {
  render() {
    return (
      <>
        <h1 className="ct-title" id="content">
          Colors
        </h1>
        <p className="ct-lead">
          You can change the default colors via variables from SCSS
        </p>
        <ol>
          <li>Download the project’s zip</li>
          <li>Make sure you have node.js (https://nodejs.org/en/) installed</li>
          <li>
            Type <code className="highlighter-rouge">npm install</code>
            in terminal/console in the source folder where{" "}
            <code className="highlighter-rouge">package.json</code>
            is located
          </li>
          <li>
            You can find the colors in{" "}
            <code className="highlighter-rouge">
              assets/scss/now-ui-dashboard/_variables.scss
            </code>
            starting with line 51 where is the primary color set:{" "}
            <code className="highlighter-rouge">
              $primary-color: #f96332 !default
            </code>
            .
          </li>
          <li>
            Run in terminal{" "}
            <code className="highlighter-rouge">gulp compile-scss</code>
            for a single compilation or{" "}
            <code className="highlighter-rouge">gulp watch</code>
            for continous compilation of the changes that you make in{" "}
            <code className="highlighter-rouge">*.scss</code>
            files. This command should be run in the same folder where{" "}
            <code className="highlighter-rouge">gulpfile.js</code>
            and <code className="highlighter-rouge">package.json</code>
            are located
          </li>
        </ol>
      </>
    );
  }
}

export default Colors;
