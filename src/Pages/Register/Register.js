import React, { useState } from "react";
import { Container, Form ,Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase.init";


const Register = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [conpassword,setConPassword] = useState('')

const handleEmailChange=(e)=>{
   
  setEmail(e.target.value);
}
const handlePasswordChange=(e)=>{

  setPassword(e.target.value);

}
const handleConPasswordChange=(e)=>{

  setConPassword(e.target.value);

}



const handleSubmitChange =(e)=>{
  e.preventDefault();

  if(!password == conpassword){
    console.log("not match");
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
     console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });



    console.log(email,password);
}









  return (
    <Container  style={{height:'80vh'}}>
      <h2 className="m-auto text-center">Sign Up</h2>
      <Card className="card w-50 m-auto mt-5">
        <Form onSubmit={handleSubmitChange} className="p-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={handleEmailChange} type="email" placeholder="type your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control onChange={handlePasswordChange} type="password" placeholder="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control onChange={handleConPasswordChange} type="password" placeholder="Confirm password" />
          </Form.Group>

          <Button type="submit" class="btn btn-primary mb-4">
            Sign Up
          </Button>
          <p className="pt-3">Already sign Up? <Link to='/login'>Login Here</Link></p>
        </Form>
      </Card>
    </Container>
  );
};

export default Register;
