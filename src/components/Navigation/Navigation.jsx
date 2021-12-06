import React from 'react';
import './Navigation.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Pokedex</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/caught-pokemons">Caught pokemons</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
