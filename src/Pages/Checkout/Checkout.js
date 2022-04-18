import React, { useState } from "react";
import { Card } from "react-bootstrap";
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import "../Checkout/Checkout.css"


const Checkout = () => {

  const [start,setStart] = useState(0);

  const handleIncrease=()=>{
    
    setStart(start+1)

  }
  const handleDecrease=()=>{
    setStart(start-1)
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <div className="card_image">
            <img src={img1} alt="" />
            Quantity:
            <button onClick={handleIncrease}>+</button>
            <p>{start}</p>
            <button  onClick={handleDecrease}>-</button>
            <p>price:200$</p>
          </div>
        </Card.Body>
        <Card.Body>This is some text within a card body.
          <div className="card_image">
            <img src={img2} alt="" />
            Quantity:
            <button onClick={handleIncrease}>+</button>
            <p>{start}</p>
            <button  onClick={handleDecrease}>-</button>
            <p>price:200$</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Checkout;
