import React, { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

import auth from "../../Firebase.init";

import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
 

  if(user){
    navigate("/")
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    
  

  
    signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });


    console.log(email, password);
  };





  const location = useLocation()

  const from =location?.state?.from?.pathname || "/"
  const handleGoogleSignIn =()=>{
    signInWithGoogle()
    .then( ()=>{
      navigate(from ,{ replace: true})
    })
  }


  return (
    <Container style={{ height: "70vh" }}>
      <h2 className="m-auto text-center">Login Form</h2>
      <Card className="card w-50 m-auto mt-5">
        <Form onSubmit={handleSubmitChange} className="p-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              onChange={handleEmailChange}
              type="email"
              placeholder="type your email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              onChange={handlePasswordChange}
              type="password"
              placeholder="type your password"
            />
          </Form.Group>

          <div>
            <Button onClick={handleGoogleSignIn} className="">Google Sign in</Button>
          </div>

          <br />
          <Button type="submit" class="btn btn-primary mb-5">
            Login Here
          </Button>

          <p className="pt-3">
            If you don't registation please?{" "}
            <Link to="/register">Sign Up Here</Link>
          </p>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
