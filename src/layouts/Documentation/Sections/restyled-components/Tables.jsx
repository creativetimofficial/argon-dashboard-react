import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Media,
  Progress,
  Table,
  UncontrolledTooltip
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Tables
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Documentation and examples for opt-in styling of tables (given their
          prevalent use in JavaScript plugins) with Bootstrap.
        </p>
        <hr />
        <h3 id="examples">Examples</h3>
        <div className="ct-example">
          <Table className="align-items-center" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Budget</th>
                <th scope="col">Status</th>
                <th scope="col">Users</th>
                <th scope="col">Completion</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/bootstrap.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Argon Design System</span>
                    </Media>
                  </Media>
                </th>
                <td>$2,500 USD</td>
                <td>
                  <Badge className="badge-dot mr-4">
                    <i className="bg-warning" />
                    pending
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip574032106"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip574032106">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip32616511"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip32616511">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip258917170"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip258917170">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip653249638"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip653249638">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">60%</span>
                    <div>
                      <Progress max="100" value="60" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <Button
                      aria-expanded={false}
                      aria-haspopup={true}
                      className="btn-icon-only text-light"
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      role="button"
                      size="sm"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Button>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/angular.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        Angular Now UI Kit PRO
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$1,800 USD</td>
                <td>
                  <Badge className="badge-dot">
                    <i className="bg-success" />
                    completed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip668858607"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip668858607">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip566011961"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip566011961">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip735018835"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip735018835">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip473548344"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip473548344">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">100%</span>
                    <div>
                      <Progress max="100" value="100" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <Button
                      aria-expanded={false}
                      aria-haspopup={true}
                      className="btn-icon-only text-light"
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      role="button"
                      size="sm"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Button>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/sketch.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Black Dashboard</span>
                    </Media>
                  </Media>
                </th>
                <td>$3,150 USD</td>
                <td>
                  <Badge className="badge-dot mr-4">
                    <i className="bg-danger" />
                    delayed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip87657561"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip87657561">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip620941904"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip620941904">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip983382795"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip983382795">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip995261388"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip995261388">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">72%</span>
                    <div>
                      <Progress max="100" value="72" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <Button
                      aria-expanded={false}
                      aria-haspopup={true}
                      className="btn-icon-only text-light"
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      role="button"
                      size="sm"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Button>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/react.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        React Material Dashboard
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$4,400 USD</td>
                <td>
                  <Badge className="badge-dot">
                    <i className="bg-info" />
                    on schedule
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip682692648"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip682692648">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip211311176"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip211311176">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip548963332"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip548963332">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip163247478"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip163247478">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">90%</span>
                    <div>
                      <Progress max="100" value="90" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <Button
                      aria-expanded={false}
                      aria-haspopup={true}
                      className="btn-icon-only text-light"
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      role="button"
                      size="sm"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Button>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/vue.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Vue Paper UI Kit PRO</span>
                    </Media>
                  </Media>
                </th>
                <td>$2,200 USD</td>
                <td>
                  <Badge className="badge-dot mr-4">
                    <i className="bg-success" />
                    completed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip451605656"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip451605656">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip310334691"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip310334691">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip969127177"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip969127177">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip846856763"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip846856763">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">100%</span>
                    <div>
                      <Progress max="100" value="100" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <Button
                      aria-expanded={false}
                      aria-haspopup={true}
                      className="btn-icon-only text-light"
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      role="button"
                      size="sm"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Button>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <h3 id="dark-table">Dark table</h3>
        <div className="ct-example">
          <Table className="align-items-center table-dark" responsive>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Budget</th>
                <th scope="col">Status</th>
                <th scope="col">Users</th>
                <th scope="col">Completion</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/bootstrap.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Argon Design System</span>
                    </Media>
                  </Media>
                </th>
                <td>$2,500 USD</td>
                <td>
                  <Badge className="badge-dot mr-4">
                    <i className="bg-warning" />
                    pending
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip753060071"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip753060071">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip986405743"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip986405743">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip485174764"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip485174764">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip638413402"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip638413402">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">60%</span>
                    <div>
                      <Progress max="100" value="60" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <Button
                      aria-expanded={false}
                      aria-haspopup={true}
                      className="btn-icon-only text-light"
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      role="button"
                      size="sm"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Button>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/angular.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        Angular Now UI Kit PRO
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$1,800 USD</td>
                <td>
                  <Badge className="badge-dot">
                    <i className="bg-success" />
                    completed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip785879850"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip785879850">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip44351395"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip44351395">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip452171283"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip452171283">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip241731883"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip241731883">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">100%</span>
                    <div>
                      <Progress max="100" value="100" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <Button
                      aria-expanded={false}
                      aria-haspopup={true}
                      className="btn-icon-only text-light"
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      role="button"
                      size="sm"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Button>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/sketch.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Black Dashboard</span>
                    </Media>
                  </Media>
                </th>
                <td>$3,150 USD</td>
                <td>
                  <Badge className="badge-dot mr-4">
                    <i className="bg-danger" />
                    delayed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip136212956"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip136212956">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip200882809"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip200882809">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip421322746"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip421322746">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip528882951"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip528882951">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">72%</span>
                    <div>
                      <Progress max="100" value="72" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <Button
                      aria-expanded={false}
                      aria-haspopup={true}
                      className="btn-icon-only text-light"
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      role="button"
                      size="sm"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Button>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/react.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        React Material Dashboard
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$4,400 USD</td>
                <td>
                  <Badge className="badge-dot">
                    <i className="bg-info" />
                    on schedule
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip698746701"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip698746701">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip120240543"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip120240543">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip681485381"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip681485381">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip971702068"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip971702068">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">90%</span>
                    <div>
                      <Progress max="100" value="90" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <Button
                      aria-expanded={false}
                      aria-haspopup={true}
                      className="btn-icon-only text-light"
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      role="button"
                      size="sm"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Button>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/vue.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Vue Paper UI Kit PRO</span>
                    </Media>
                  </Media>
                </th>
                <td>$2,200 USD</td>
                <td>
                  <Badge className="badge-dot mr-4">
                    <i className="bg-success" />
                    completed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip698052170"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip698052170">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip626494793"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip626494793">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip348657459"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip348657459">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip572361529"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip572361529">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">100%</span>
                    <div>
                      <Progress max="100" value="100" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <Button
                      aria-expanded={false}
                      aria-haspopup={true}
                      className="btn-icon-only text-light"
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      role="button"
                      size="sm"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Button>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default Tables;
