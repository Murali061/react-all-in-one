import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomInput from "../shared/CustomInput";
import "./LoginSignUp.css";
import { Formik, FormikHelpers, Form } from "formik";
import { LoginSchema } from "./LoginSchema";

type Props = {
  setUserName: any
};

interface LoginFormValues {
  username?: string;
  
}

const LoginComp = (props: Props) => {
  let navigate = useNavigate();

  const handleLogin = (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    actions.resetForm();
    props.setUserName(values.username);
    navigate("/home");
    console.log(JSON.stringify(values.username));
  };

  const initialValues: LoginFormValues = {
    username: "",
  };

  return (
    <div className="login-container">
      <Card style={{ width: "30rem" }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Card.Title>Please login </Card.Title>
          <Formik
            onSubmit={handleLogin}
            initialValues={initialValues}
            validationSchema={LoginSchema}
          >
            {/* using render props for creating the forms */}
            {/* {(props) => (
              <Form >
                <label>Username</label>
                <Field type='text'  name="username"/>

                <Button
                  variant="primary"
                  type="submit"
                 
                >
                  Login
                </Button>
              </Form>
            )} */}

            {({ isSubmitting }) => (
              <Form>
                <CustomInput
                  name="username"
                  placeholder="Please enter the name"
                  label="User name"
                />
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginComp;
