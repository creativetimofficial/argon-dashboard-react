import React from "react";

class BuildTools extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Build tools
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Learn how to use Bootstrap’s included npm scripts to build our
          documentation, compile source code, run tests, and more.
        </p>
        <hr />
        <h2 id="tooling-setup">Tooling setup</h2>
        <p>
          Bootstrap uses{" "}
          <a href="https://docs.npmjs.com/misc/scripts">NPM scripts</a>
          for its build system. Our package.json includes convenient methods for
          working with the framework, including compiling code, running tests,
          and more.
        </p>
        <p>
          To use our build system and use Sass to customize your website you’ll
          need a copy of Argon’s source files and Node. Follow these steps and
          you should be ready to rock:
        </p>
        <ol>
          <li>
            <a href="https://nodejs.org/en/download/">
              Download and install Node.js
            </a>
            , which we use to manage our dependencies.
          </li>
          <li>
            Navigate to the root{" "}
            <code className="highlighter-rouge">/argon</code>
            directory and run{" "}
            <code className="highlighter-rouge">npm install</code>
            to install our local dependencies.
          </li>
        </ol>
        <p>
          When completed, you’ll be able to run the various commands provided
          from the command line.
        </p>
        <h2 id="using-gulp">Using Gulp</h2>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="highlighter-rouge">gulp</code>
              </td>
              <td>
                <code className="highlighter-rouge">gulp</code>
                starts a Browsersync instance on port 3000 served from dist,
                defaults to index.html with the modifications made in SASS or
                HTML.
              </td>
            </tr>
            <tr>
              <td>
                <code className="highlighter-rouge">gulp build</code>
              </td>
              <td>
                <code className="highlighter-rouge">gulp build</code>
                creates the <code className="highlighter-rouge">/dist</code>
                directory with compiled files.
              </td>
            </tr>
          </tbody>
        </table>
        <h2 id="autoprefixer">Autoprefixer</h2>
        <p>
          Argon uses{" "}
          <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>
          (included in our build process) to automatically add vendor prefixes
          to some CSS properties at build time. Doing so saves us time and code
          by allowing us to write key parts of our CSS a single time while
          eliminating the need for vendor mixins like those found in v3.
        </p>
        <h2 id="troubleshooting">Troubleshooting</h2>
        <p>
          Should you encounter problems with installing dependencies, uninstall
          all previous dependency versions (global and local). Then, rerun{" "}
          <code className="highlighter-rouge">npm install</code>.
        </p>
      </>
    );
  }
}

export default BuildTools;
