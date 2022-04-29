import React from 'react';
import { Navbar , Container,Nav } from 'react-bootstrap';
import Rate from "../Filter/Rate";
import Stars from '../Stars/Stars';
import  MovieForm  from "../MovieForm/MovieForm";
import { Link } from 'react-router-dom';

const NavbarComponent = ({ setSearchTxt, setSearchRate, searchRate, addMovie,setMovies,rate }) => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
      <Nav.Link><Link to={"/movielist"}>MovieList</Link></Nav.Link>
      <Rate 
      setSearchTxt={setSearchTxt}
       />
      <Stars isEdit={true}
       rate={rate}
       setSearchRate={setSearchRate}
       searchRate={searchRate}
        />
        <MovieForm
        isEdit={false}
        addMovie={addMovie}
        setMovies={setMovies}
        />
    </Nav>
    </Container>
  </Navbar>

            
        </div>
    );
}

export default NavbarComponent;
