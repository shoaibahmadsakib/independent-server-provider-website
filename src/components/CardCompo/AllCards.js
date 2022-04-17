import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AllCards = (props) => {
  const { id, picture, name, price } = props.myPhoto;

  

  const navigate = useNavigate();

  const showPhotoDetails = (props) => {
    const path = `/card/${id}`;
    navigate(path);
  };


  return (
    <>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <p>price: {price}</p>
        </Card.Footer>
        <Link to={"/card/" + id}>Show details</Link>
       
          <button onClick={props.handleAddtoCart}>Add to cart </button>
       
      </Card>
    </>
  );
};

export default AllCards;
