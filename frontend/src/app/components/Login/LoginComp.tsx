import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LoginSignUp.css";

type Props = {};

const LoginComp = (props: Props) => {

  let navigate = useNavigate();


  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/home');
  }
   


  return (
    <div className="login-container">
      <Card  style={{ width: "30rem" }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Card.Title>Please login </Card.Title>
          <form>
            <Form.Group className="mb-3" controlId="formUserId">
              <Form.Label htmlFor="userId">User Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter your User Id"
                id="userId"
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) =>  handleLogin(e)}>
             Login
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginComp;
