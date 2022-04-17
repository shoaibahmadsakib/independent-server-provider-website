import React from "react";
import { Card, Container, ListGroup, Table } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="pt-5">
      <Card>
        <Card.Subtitle className="p-3 ">
          Difference between authorization and authentication?
        </Card.Subtitle>
        <Card.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Authentication</th>
                <th>Authorization</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Authentication is a process,which is before to Authorization
                </td>
                <td>
                  Authorization is a process which is after the Authentication
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Authentication is for varifing a user for permision in the
                  plartform
                </td>
                <td>
                  {" "}
                  authorization is the process of verifying what specific
                  applications, files, and data a user has access to.{" "}
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  The first step is to confirm the identity of a passenger to
                  make sure they are who they say they are. Once a passenger’s
                  identity has been determined,
                </td>
                <td>
                  {" "}
                  the second step is verifying any special services the
                  passenger has access to, whether it’s flying first-class or
                  visiting the VIP lounge.
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      {/* second */}

      <Card className="mt-5">
        <Card.Body>
          <Card.Subtitle className="p-3 ">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Card.Subtitle>
          <p>
            *Firebase auth provide us many strong authintication system like
            ,facebook, github, google auth provider for authentication and their
            security system is very high the also provide us build in user
            interface component for auth .they also provide us other Backend
            service like realtime data base , firebase data stor etc
            <br />
            there are many othe options for implemetation authentication
            <ul>
              <li>Solutionsreview.com </li>
              <li>Authress</li>
              <li>Frontegg</li>
              <li>Keycloak</li>
              <li>PingIdentity</li>
            </ul>
          </p>
        </Card.Body>
      </Card>

      <Card className="mt-5">
        <Card.Body>
          <Card.Subtitle className="p-3 ">
            What other services does firebase provide other than authentication?
          </Card.Subtitle>

          <ul>
            <li>Cloud Firestore.</li>
            <li>Cloud Functions.</li>

            <li>Cloud Storage..</li>
            <li>Google Analytics.</li>
            <li>Predictions.</li>
            <li>Cloud Messaging..</li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Blog;
