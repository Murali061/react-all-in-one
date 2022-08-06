import React from "react";
import { Container, Navbar } from "react-bootstrap";

type Props = {};

const Header = (props: Props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand >React All In One App</Navbar.Brand>
      </Container>
     
    </Navbar>
  );
};

export default Header;
