import React, { useEffect, useState } from "react";
import { CardGroup, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AllCards from "./AllCards";
import "./CardComponent.css";
import CardDetails from "./CardDetails";

const CardComponent = () => {
  const [photo, setPhoto] = useState([]);
const [cart, setCart] = useState([]);
  useEffect(() => {
    const url = "Photo.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhoto(data));
  }, []);

  // const handleAddtoCart = () => {
  //   console.log(myPhoto);
  // };
  
  return (
    <div>
      <CardGroup className="card-style">
        {photo.map((myPhoto) => (
          <AllCards key={myPhoto.id} myPhoto={myPhoto} ></AllCards>
        ))}
      </CardGroup>
    </div>
  );
};

export default CardComponent;
