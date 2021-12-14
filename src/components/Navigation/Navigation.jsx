import React from 'react';
import './Navigation.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar className="navigation" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={`/`}>
          Pokedex
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={`/caught-pokemons`}>
            Caught pokemons
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
