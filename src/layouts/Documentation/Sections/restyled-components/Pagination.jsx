import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane
} from "reactstrap";

class Paginations extends React.Component {
  render() {
    return (
      <>
        <div className=" ct-page-title">
          <h1 className=" ct-title" id="content">
            Pagination
          </h1>
          <div className=" avatar-group mt-3" />
        </div>
        <p className=" ct-lead">
          Documentation and examples for showing pagination to indicate a series
          of related content exists across multiple pages.
        </p>
        <hr />
        <h2 id="examples">Examples</h2>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="pagination-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="pagination-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="pagination-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="pagination-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="pagination-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="pagination-component-tab"
              className=" tab-example-result fade show active"
              id="pagination-component"
              role="tabpanel"
            >
              <nav aria-label="Page navigation example">
                <Pagination>
                  <PaginationItem>
                    <PaginationLink
                      aria-label="Previous"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className=" fa fa-angle-left" />
                      <span className=" sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      aria-label="Next"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className=" fa fa-angle-right" />
                      <span className=" sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </TabPane>
            <TabPane
              aria-labelledby="pagination-html-tab"
              className=" fade"
              id="pagination-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="disabled-and-active-states">Disabled and active states</h2>
        <div className=" ct-example">
          <Nav
            className=" nav-tabs-code"
            id="pagination-states-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="pagination-states-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="pagination-states-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="pagination-states-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="pagination-states-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="pagination-states-component-tab"
              className=" tab-example-result fade show active"
              id="pagination-states-component"
              role="tabpanel"
            >
              <nav aria-label="...">
                <Pagination>
                  <PaginationItem className=" disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      tabindex="-1"
                    >
                      <i className=" fa fa-angle-left" />
                      <span className=" sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className=" active">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      2 <span className=" sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className=" fa fa-angle-right" />
                      <span className=" sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </TabPane>
            <TabPane
              aria-labelledby="pagination-states-html-tab"
              className=" fade"
              id="pagination-states-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="sizing">Sizing</h2>
        <p>
          Fancy larger or smaller pagination? Add{" "}
          <code className=" highlighter-rouge">.pagination-lg</code>
          or <code className=" highlighter-rouge">.pagination-sm</code>
          for additional sizes.
        </p>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="pagination-lg-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="pagination-lg-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="pagination-lg-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="pagination-lg-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="pagination-lg-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="pagination-lg-component-tab"
              className=" tab-example-result fade show active"
              id="pagination-lg-component"
              role="tabpanel"
            >
              <nav aria-label="...">
                <Pagination
                  className="pagination pagination-lg"
                  listClassName=" pagination-lg"
                >
                  <PaginationItem className=" disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      tabindex="-1"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className=" active">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </TabPane>
            <TabPane
              aria-labelledby="pagination-lg-html-tab"
              className=" fade"
              id="pagination-lg-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <div className=" ct-example">
          <Nav className=" nav-tabs-code" id="pagination-sm-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="pagination-sm-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="pagination-sm-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="pagination-sm-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="pagination-sm-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="pagination-sm-component-tab"
              className=" tab-example-result fade show active"
              id="pagination-sm-component"
              role="tabpanel"
            >
              <nav aria-label="...">
                <Pagination
                  className="pagination pagination-sm"
                  listClassName=" pagination-sm"
                >
                  <PaginationItem className=" disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      tabindex="-1"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className=" active">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </TabPane>
            <TabPane
              aria-labelledby="pagination-sm-html-tab"
              className=" fade"
              id="pagination-sm-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="alignment">Alignment</h2>
        <p>
          Change the alignment of pagination components with{" "}
          <a href="argon-dashboard/docs//utilities/flex/">flexbox utilities</a>.
        </p>
        <div className=" ct-example">
          <Nav
            className=" nav-tabs-code"
            id="pagination-center-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="pagination-center-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="pagination-center-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="pagination-center-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="pagination-center-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="pagination-center-component-tab"
              className=" tab-example-result fade show active"
              id="pagination-center-component"
              role="tabpanel"
            >
              <nav aria-label="Page navigation example">
                <Pagination
                  className="pagination justify-content-center"
                  listClassName=" justify-content-center"
                >
                  <PaginationItem className=" disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      tabindex="-1"
                    >
                      <i className=" fa fa-angle-left" />
                      <span className=" sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className=" active">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className=" fa fa-angle-right" />
                      <span className=" sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </TabPane>
            <TabPane
              aria-labelledby="pagination-center-html-tab"
              className=" fade"
              id="pagination-center-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <div className=" ct-example">
          <Nav
            className=" nav-tabs-code"
            id="pagination-right-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="pagination-right-component"
                aria-selected={true}
                className=" active"
                data-toggle="tab"
                href="#pablo"
                id="pagination-right-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="pagination-right-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="pagination-right-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="pagination-right-component-tab"
              className=" tab-example-result fade show active"
              id="pagination-right-component"
              role="tabpanel"
            >
              <nav aria-label="Page navigation example">
                <Pagination
                  className="pagination justify-content-end"
                  listClassName=" justify-content-end"
                >
                  <PaginationItem className=" disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      tabindex="-1"
                    >
                      <i className=" fa fa-angle-left" />
                      <span className=" sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className=" active">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className=" fa fa-angle-right" />
                      <span className=" sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </TabPane>
            <TabPane
              aria-labelledby="pagination-right-html-tab"
              className=" fade"
              id="pagination-right-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
      </>
    );
  }
}

export default Paginations;
