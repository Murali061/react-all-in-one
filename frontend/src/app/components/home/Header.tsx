import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand >React All In One App</Navbar.Brand>
      </Container>
      <Container>
        <Nav variant="pills">
          <Nav.Item >
           <Link to='/users' style={{color: "#fff"}}>Users</Link>
           </Nav.Item>
          <Nav.Item>
           <Link to='/posts' style={{color: "#fff", marginLeft: '12px'}}>Posts</Link>
        </Nav.Item>
        </Nav>
      </Container>
     
    </Navbar>
  );
};

export default Header;
