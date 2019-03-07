import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const fileStructure = `Blk• Design System React
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── README.md
├── package.json
├── Documentation
│   └── documentation.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── variables
    │   └── charts.jsx
    ├── assets
    │   ├── css
    │   │   ├── blk-design-system-react.css
    │   │   ├── blk-design-system-react.css.map
    │   │   ├── blk-design-system-react.min.css
    │   │   └── nucleo-icons.css
    │   ├── demo
    │   │   └── demo.css
    │   ├── fonts
    │   │   ├── nucleo.eot
    │   │   ├── nucleo.ttf
    │   │   ├── nucleo.woff
    │   │   └── nucleo.woff2
    │   ├── img
    │   └── scss
    │       ├── blk-design-system-react
    │       │   ├── bootstrap
    │       │   │   ├── mixins
    │       │   │   └── utilities
    │       │   ├── custom
    │       │   │   ├── cards
    │       │   │   ├── mixins
    │       │   │   ├── sections
    │       │   │   ├── utilities
    │       │   │   └── vendor
    │       │   └── react
    │       │       └── react-differences.scss
    │       └── blk-design-system-react.scss
    ├── components
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Navbars
    │   │   ├── ComponentsNavbar.jsx
    │   │   └── ExamplesNavbar.jsx
    │   └── PageHeader
    │       └── PageHeader.jsx
    └── views
        ├── Index.jsx
        ├── IndexSections
        │   ├── Basics.jsx
        │   ├── Download.jsx
        │   ├── Examples.jsx
        │   ├── JavaScript.jsx
        │   ├── Navbars.jsx
        │   ├── Notifications.jsx
        │   ├── NucleoIcons.jsx
        │   ├── Pagination.jsx
        │   ├── Signup.jsx
        │   ├── Tabs.jsx
        │   └── Typography.jsx
        └── examples
            ├── LandingPage.jsx
            ├── ProfilePage.jsx
            └── RegisterPage.jsx`;

class Contents extends React.Component {
  render() {
    return (
      <>
        <h1 className="ct-title" id="content">
          Contents
        </h1>
        <p className="ct-lead">
          Discover what's included in BLK Design System React
        </p>
        <h2 id="precompiled-bootstrap">BLK Design System React</h2>
        <p>
          Once downloaded, unzip the compressed folder and you’ll see something
          like this:
        </p>
        {/* NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too. */}
        <SyntaxHighlighter language="bash" style={prism}>
          {fileStructure}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default Contents;
