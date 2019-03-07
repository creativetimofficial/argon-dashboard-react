import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <h1 className="ct-title" id="content">
          Demo navbars
        </h1>
        <p>
          In our template product, we have two demo navbars that can be found
          inside{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/IndexNavbar.jsx
          </code>{" "}
          and{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/ExamplesNavbar.jsx
          </code>
          .
        </p>
        <h2 id="content">
          <code className="highlighter-rouge">
            src/components/Navbars/IndexNavbar.jsx
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on the{" "}
          <code className="highlighter-rouge">src/views/Index.jsx</code>.
        </p>
        <p>
          It is diveded in two parts, the left one, that is used for the product
          name, and the right part with some social links and some links for
          navigating through the product.
        </p>
        <h2 id="content">
          <code className="highlighter-rouge">
            src/components/Navbars/ExamplesNavbar.jsx
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on all the pages
          found inside{" "}
          <code className="highlighter-rouge">src/views/examples/*</code>.
        </p>
        <p>
          It is diveded in two parts, the left one, that is used for the product
          name, and the right part with some social links and some links for
          navigating through the product.
        </p>
      </>
    );
  }
}

export default Navbar;
