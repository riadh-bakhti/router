import React from 'react';
import { Link } from 'react-router-dom';
import MovieForm from '../MovieForm/MovieForm';
import Stars from '../Stars/Stars';
import "./MovieCard.css";


const MovieCard = ({movie:{title, img, year, desc, rate, id,trailer,link},movies,setMovies}) => {
  
    return (
      <div id="container">
      <div className="product-details">
        <h1>{title}</h1>

        <p className="information">{year}</p>

        <Stars rate={rate} isEdit={false} />
        <MovieForm
        isEdit={true}
        id={id}
        movies={movies}
        setMovies={setMovies}
        />


        <div className="control">
          <button>
            <span className="details"><Link to={`/moviedetails/${id}`}>show More details</Link></span>
          </button>
        
        </div>
      </div>

      <div className="product-image">
        <img src={img} alt="" />
        <div className="info">
          <h2> Description</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
            

export default MovieCard;
