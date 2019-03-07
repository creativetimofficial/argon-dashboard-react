import React from "react";

class QuickStart extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Quick start
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          To start using this design system you will need to import some files
          in your current project or start from scratch using our template
          (scroll down in this page to view it).
        </p>
        <hr />
        <h2 id="css">CSS</h2>
        <p>
          Copy-paste the stylesheet{" "}
          <code className="highlighter-rouge">{`<link>`}</code>
          into your <code className="highlighter-rouge">{`<head>`}</code>
          before all other stylesheets to load our CSS.
        </p>
        <h2 id="js">JS</h2>
        <p>
          Many of our components require the use of JavaScript to function.
          Specifically, they require <a href="https://jquery.com">jQuery</a>,{" "}
          <a href="https://popper.js.org/">Popper.js</a>, and our own JavaScript
          plugins. Place the following{" "}
          <code className="highlighter-rouge">{`<script>`}</code>s near the end
          of your pages, right before the closing{" "}
          <code className="highlighter-rouge">{`</body>`}</code>
          tag, to enable them. jQuery must come first, then Popper.js, and then
          our JavaScript plugins.
        </p>
        <p>
          We use{" "}
          <a href="https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/">
            jQuery’s slim build
          </a>
          , but the full version is also supported.
        </p>
        <p>
          Need to use a certain plugin in your page? You can find out how to
          integrate them and make them work in the{" "}
          <a href="../../docs/plugins/datepicker.html">Plugins</a>
          dedicated page. In this way you will be sure that your website is
          optimized and uses only the needed resources.
        </p>
        <h2 id="starter-template">Starter template</h2>
        <p>
          Be sure to have your pages set up with the latest design and
          development standards. That means using an HTML5 doctype and including
          a viewport meta tag for proper responsive behaviors. Put it all
          together and your pages should look like this:
        </p>
        <h2 id="important-globals">Important globals</h2>
        <p>
          Argon employs a handful of important global styles and settings that
          you’ll need to be aware of when using it, all of which are almost
          exclusively geared towards the <em>normalization</em>
          of cross browser styles. Let’s dive in.
        </p>
        <h3 id="html5-doctype">HTML5 doctype</h3>
        <p>
          Bootstrap requires the use of the HTML5 doctype. Without it, you’ll
          see some funky incomplete styling, but including it shouldn’t cause
          any considerable hiccups.
        </p>
        <h3 id="responsive-meta-tag">Responsive meta tag</h3>
        <p>
          Bootstrap is developed <em>mobile first</em>, a strategy in which we
          optimize code for mobile devices first and then scale up components as
          necessary using CSS media queries. To ensure proper rendering and
          touch zooming for all devices,{" "}
          <strong>add the responsive viewport meta tag</strong>
          to your <code className="highlighter-rouge">{`<head>`}</code>.
        </p>
        <p>
          You can see an example of this in action in the{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            starter template
          </a>
          .
        </p>
      </>
    );
  }
}

export default QuickStart;
