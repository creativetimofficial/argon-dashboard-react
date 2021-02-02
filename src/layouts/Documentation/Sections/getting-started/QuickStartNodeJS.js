/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

import { Alert } from "reactstrap";

class QuickStart extends React.Component {
  render() {
    return (
      <>
        <div class="ct-page-title">
          <h1 class="ct-title" id="content">
            API Getting started
          </h1>
          <div class="avatar-group mt-3"></div>
        </div>
        <p class="ct-lead">
          Learn more about the Argon API and how it covers all your need
          regating backend for your project.
        </p>
        <hr />

        <p>
          Argon API is organized around REST. Our API has predictable URLs,
          accepts form-encoded request bodies, returns JSON-encoded responses,
          and uses standard HTTP response codes, authentication, and verbs.
        </p>
        <p>
          Base url in development environment is:{" "}
          <b>
            BASE_URL=<i>https://localhost:5100/api</i>
          </b>
        </p>

        <div class="ct-page-title">
          <h1 class="ct-title" id="content">
            Authentification
          </h1>
          <div class="avatar-group mt-3"></div>
        </div>
        <hr />
        <p>
          Our API uses tokens for sessions. You have the follwing endpoints for
          Authentification
        </p>
        <h2 id="get-characters">Login</h2>
        <p>
          <b>POST</b> <code class="higlighted">{`{{ BASE_URL }}/users/login`}</code>
        </p>
        <h4>QUERY PARAMETERS</h4>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>email</td>
              <td>String</td>
              <td>(Required) User email</td>
            </tr>
            <tr>
              <td>password</td>
              <td>String</td>
              <td>(Required) User password</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4>RESPONSE</h4>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>success</td>
              <td>Boolean</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>msg</td>
              <td>String</td>
              <td>Only if success = false</td>
            </tr>
            <tr>
              <td>token</td>
              <td>String</td>
              <td>(Only if success = true) JWT token that lasts 1 week</td>
            </tr>
            <tr>
              <td>user</td>
              <td>Object</td>
              <td>(Only if success = true) Informations about the user</td>
            </tr>
          </tbody>
        </table>

        <h2 id="get-characters">Logout</h2>
        <p>
          <b>POST</b>{" "}
          <code class="higlighted">{`{{ BASE_URL }}/users/logout`}</code>
          <br />
          <p>Protected Route</p>
        </p>
        <h4>QUERY PARAMETERS</h4>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>token</td>
              <td>String</td>
              <td>(Required)</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4>RESPONSE</h4>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>success</td>
              <td>Boolean</td>
              <td>true / false</td>
            </tr>
          </tbody>
        </table>

        <h2 id="get-characters">Check active session</h2>
        <p>
          <b>POST</b>{" "}
          <code class="higlighted">{`{{ BASE_URL }}/users/checkSession`}</code>
          <br />
          <p>Protected Route</p>
        </p>
        <h4>RESPONSE</h4>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>success</td>
              <td>Boolean</td>
              <td>(true / false) If token is still active or not</td>
            </tr>
            <tr>
              <td>msg</td>
              <td>String</td>
              <td>Only if success = false</td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          Our API uses tokens for sessions. You have the follwing endpoints for
          Authentification
        </p>
        <h2 id="get-characters">Login</h2>
        <p>
          <b>POST</b> <code class="higlighted">{`{{ BASE_URL }}/users/login`}</code>
        </p>
        <h4>QUERY PARAMETERS</h4>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>email</td>
              <td>String</td>
              <td>(Required) User email</td>
            </tr>
            <tr>
              <td>password</td>
              <td>String</td>
              <td>(Required) User password</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4>RESPONSE</h4>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>success</td>
              <td>Boolean</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>msg</td>
              <td>String</td>
              <td>Only if success = false</td>
            </tr>
            <tr>
              <td>token</td>
              <td>String</td>
              <td>(Only if success = true) JWT token that lasts 1 week</td>
            </tr>
            <tr>
              <td>user</td>
              <td>Object</td>
              <td>(Only if success = true) Informations about the user</td>
            </tr>
          </tbody>
        </table>

        <h2 id="get-characters">Logout</h2>
        <p>
          <b>POST</b>{" "}
          <code class="higlighted">{`{{ BASE_URL }}/users/logout`}</code>
          <br />
          <p>Protected Route</p>
        </p>
        <h4>QUERY PARAMETERS</h4>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>token</td>
              <td>String</td>
              <td>(Required)</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4>RESPONSE</h4>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>success</td>
              <td>Boolean</td>
              <td>true / false</td>
            </tr>
          </tbody>
        </table>

        <h2 id="get-characters">Check active session</h2>
        <p>
          <b>POST</b>{" "}
          <code class="higlighted">{`{{ BASE_URL }}/users/checkSession`}</code>
          <br />
          <p>Protected Route</p>
        </p>
        <h4>RESPONSE</h4>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>success</td>
              <td>Boolean</td>
              <td>(true / false) If token is still active or not</td>
            </tr>
            <tr>
              <td>msg</td>
              <td>String</td>
              <td>Only if success = false</td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default QuickStart;
