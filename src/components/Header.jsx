import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Flight Management System</Navbar.Brand>
        <Navbar.Text>Welcome to our airline dashboard</Navbar.Text>
      </Container>
    </Navbar>
  );
}
