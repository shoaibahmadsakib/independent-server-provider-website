import React, { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {signInWithEmailAndPassword } from "firebase/auth"
import auth from "../../Firebase.init";


const Login = () => {



  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

const handleEmailChange=(e)=>{
   
  setEmail(e.target.value);
}
const handlePasswordChange=(e)=>{

  setPassword(e.target.value);

}



const handleSubmitChange =(e)=>{
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
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
    <Container style={{height:'70vh'}}>
      <h2 className="m-auto text-center">Login Form</h2>
      <Card className="card w-50 m-auto mt-5">
        <Form  onSubmit={handleSubmitChange} className="p-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={handleEmailChange} type="email" placeholder="type your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control onChange={handlePasswordChange}  type="password" placeholder="type your password" />
          </Form.Group>

          <Button type="submit" class="btn btn-primary mb-5">
            Login Here
          </Button>
         
          <p className="pt-3">If you don't registation please? <Link to='/register'>Sign Up Here</Link></p>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
