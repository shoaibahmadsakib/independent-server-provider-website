import React from "react";
import { Card, Button } from "react-bootstrap";
import myPhoto from "../../Assets/myPhoto.jpg";

const About = () => {
  return (
    <Card style={{ width: "30rem" }} className="m-auto mt-5">
      <Card.Body>
        <Card.Img variant="top" src={myPhoto}  height="300px" />
        <Card.Title>My Self & my Hobbies</Card.Title>
        <Card.Text>
          My name is Shoaib.I studing in Information and communication
          Engineering in Pabna University of Science and Technology.
          <br />
          My future Plan is ,I am working Like a big company and became a
          successfull Softwere Engineer
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
