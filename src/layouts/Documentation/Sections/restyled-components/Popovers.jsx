import React from "react";

// reactstrap components
import { Button, PopoverBody, UncontrolledPopover } from "reactstrap";

class Popovers extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Navbar
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
            color="default"
            data-container="body"
            data-content="This is a very beautiful popover, show some love."
            data-placement="top"
            id="tooltip876279349"
            type="button"
          >
            Popover on top
          </Button>
          <UncontrolledPopover placement="top" target="tooltip876279349">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="default"
            data-container="body"
            data-content="This is a very beautiful popover, show some love."
            data-placement="right"
            id="tooltip641002859"
            type="button"
          >
            Popover on right
          </Button>
          <UncontrolledPopover placement="right" target="tooltip641002859">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="default"
            data-container="body"
            data-content="Vivamussagittis lacus vel augue laoreet rutrum faucibus."
            data-placement="bottom"
            id="tooltip765206973"
            type="button"
          >
            Popover on bottom
          </Button>
          <UncontrolledPopover placement="bottom" target="tooltip765206973">
            <PopoverBody>
              Vivamussagittis lacus vel augue laoreet rutrum faucibus.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="default"
            data-container="body"
            data-content="This is a very beautiful popover, show some love."
            data-placement="left"
            id="tooltip523914989"
            type="button"
          >
            Popover on left
          </Button>
          <UncontrolledPopover placement="left" target="tooltip523914989">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
        </div>
        <h2 id="variations">Variations</h2>
        <div className="ct-example">
          <Button
            color="default"
            data-color="default"
            data-container="body"
            data-content="This is a very beautiful popover, show some love."
            data-placement="top"
            id="tooltip348236073"
            type="button"
          >
            Default popover
          </Button>
          <UncontrolledPopover placement="top" target="tooltip348236073">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="primary"
            data-color="primary"
            data-container="body"
            data-content="This is a very beautiful popover, show some love."
            data-placement="top"
            id="tooltip165342254"
            type="button"
          >
            Primary popover
          </Button>
          <UncontrolledPopover placement="top" target="tooltip165342254">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="secondary"
            data-color="secondary"
            data-container="body"
            data-content="This is a very beautiful popover, show some love."
            data-placement="top"
            id="tooltip538314748"
            type="button"
          >
            Secondary popover
          </Button>
          <UncontrolledPopover placement="top" target="tooltip538314748">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="info"
            data-color="info"
            data-container="body"
            data-content="This is a very beautiful popover, show some love."
            data-placement="top"
            id="tooltip751185789"
            type="button"
          >
            Info popover
          </Button>
          <UncontrolledPopover placement="top" target="tooltip751185789">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="success"
            data-color="success"
            data-container="body"
            data-content="This is a very beautiful popover, show some love."
            data-placement="top"
            id="tooltip518437705"
            type="button"
          >
            Success popover
          </Button>
          <UncontrolledPopover placement="top" target="tooltip518437705">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="danger"
            data-color="danger"
            data-container="body"
            data-content="This is a very beautiful popover, show some love."
            data-placement="top"
            id="tooltip75038580"
            type="button"
          >
            Danger popover
          </Button>
          <UncontrolledPopover placement="top" target="tooltip75038580">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="warning"
            data-color="warning"
            data-container="body"
            data-content="This is a very beautiful popover, show some love."
            data-placement="top"
            id="tooltip783693128"
            type="button"
          >
            Warning popover
          </Button>
          <UncontrolledPopover placement="top" target="tooltip783693128">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
        </div>
      </>
    );
  }
}

export default Popovers;
