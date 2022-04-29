import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";
import { useState,useEffect } from "react";
import  Stars  from "../Stars/Stars";

const MovieForm = ({movies,isEdit,id,addMovie,setMovies}) => {
    const [modalShow, setModalShow] = useState(false);
    const [movie, setMovie] = useState({});
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [rate, setRate] = useState(0);
    const [trailer, setTrailer] = useState("");
    const [link, setLink] = useState("");

    const findMovie = () => {
      setMovie(movies && movies.find((el, i) => el.id === id));
    };
    useEffect(() => {
      findMovie();
      if (isEdit) {
        setTitle(movie.title);
        setDesc(movie.desc);
        setImg(movie.img);
        setRate(movie.rate);
        setYear(movie.year);
        setTrailer(movie.trailer);
        setLink(movie.link);
        
      } else {
        setTitle("");
        setDesc("");
        setImg("");
        setRate(0);
        setYear("");
        setTrailer("");
        setLink("");
      }
    },[isEdit, movie]);
    
    const add = (e) => {
      e.preventDefault();
      let newMovie = {
        title,
        img,
        desc,
        year,
        rate,
        trailer,
        link,
        id: Math.random(),
      };
  
      if (
        title === "" ||
        year === "" ||
        img === "" ||
        trailer === "" ||
        link === "" ||
        desc === ""
      )
        return alert("Missing some fields");
  
      if (rate === 0) return alert("Rate must be above of zero");
  
      addMovie(newMovie);
      setTitle("");
      setDesc("");
      setImg("");
      setRate(0);
      setYear("");
      setLink("");
      setTrailer("");
      setModalShow(false);
    };
  
    const edit = (e) => {
      e.preventDefault();
      let updatedMovie = {
        title,
        img,
        desc,
        year,
        trailer,
        link,
        rate,
        id: movie.id,
      };
  
      setMovies(
        movies.map((el, i) => (el.id === movie.id ? { ...updatedMovie } : el))
      );
  
      setModalShow(false);
    };
  
    
    return (
        
    <>
      <Button
        variant="light"
        className="addbutton"
        onClick={() => setModalShow(true)}
      >
        {isEdit ? "Edit Movie" : "Add Movie"}
      </Button>

      <Modal 
        show={modalShow} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton onClick={() => setModalShow(false)}>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header >
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e)=>setTitle(e.target.value)}
                autoFocus
              />
              <Form.Label>year</Form.Label>
              <Form.Control
                type="text"
                value={year}
                placeholder="year"
                onChange={(e)=>setYear(e.target.value)}
                autoFocus
                />
                <Form.Label>trailer</Form.Label>
              <Form.Control
                type="text"
                value={trailer}
                placeholder="trailer"
                onChange={(e)=>setTrailer(e.target.value)}
                autoFocus
                />
                <Form.Label>link</Form.Label>
              <Form.Control
                type="text"
                value={link}
                placeholder="link"
                onChange={(e)=>setLink(e.target.value)}
                autoFocus
                />
                <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control
                placeholder="Enter movie image"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>
                <Stars rate={rate} isEdit={true} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>desc</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={3}
              placeholder="Enter movie desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => {
                isEdit ? edit(e) : add(e);
              }}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    );
}

export default MovieForm;
