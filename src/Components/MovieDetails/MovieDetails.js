import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Moviedetails = ({movies}) => {
    const { idmovie } = useParams();

    const [movie, setMovie] = useState({});
  
    const findMovie = () => {
      setMovie(movies.find((el) => el.id === idmovie));
    };
  
    useEffect(() => {
      findMovie();
    }, []);
  
    return (
      <div style={{ marginTop: "100px" }}>
        <h1>{movie.title}</h1>
      </div>
    );
  };
    

export default Moviedetails;

