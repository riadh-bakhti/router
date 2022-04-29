import "./App.css";
import { useState } from "react";
import  MovieList  from "./Components/MovieList/MovieList";
import  NavbarComponent  from "./Components/NavbarComponent/NavbarComponent";
import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import MovieDetails from "./Components/MovieDetails/MovieDetails";


const App = () => {
  const data = [
    {
      title: "Never Back Down",
      rate: 4,
      img:
        "https://m.media-amazon.com/images/M/MV5BMTkzNDg3MTIyMF5BMl5BanBnXkFtZTcwOTAwNDc1MQ@@._V1_FMjpg_UX1000_.jpg",
      desc: "Never Back Down is a 2008 American martial arts film directed by Jeff Wadlow and starring Sean Faris, Amber Heard, Cam Gigandet, and Djimon Hounsou. It tells the story of a frustrated and conflicted teenager who arrives at a new high school and discovers an underground fight club there.",
      year: "2008",
      trailer: "",
      link: "",
      id: Math.random(),
    },
    {
      title: "Titanic",
      rate: 5,
      img:
        "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
      desc: "The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio. The two play characters who are of different social classes. They fall in love after meeting aboard the ship, but it was not good for a rich girl to fall in love with a poor boy in 1912.",
      year: "1997",
      trailer: "",
      link: "",
      id: Math.random(),
    },
    {
      title: "Matrix",
      rate: 1,
      img:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      desc: "It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.",
      year: "1999",
      trailer: "",
      link: "",
      id: Math.random(),
    },
  ];

  const [searchTxt, setSearchTxt] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  const [movies, setMovies] = useState(data);
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie])};




  return (
    <div>
      <NavbarComponent
      setSearchTxt={setSearchTxt}
      rate={movies.rate}
      setSearchRate={setSearchRate}
      addMovie={addMovie}
      setMovies={setMovies}
      />
      <Routes>
        <Route path="/" element={<Home />}/>
        
        <Route path="/movielist" element={
          <MovieList
            movies={movies}
            searchTxt={searchTxt}
            searchRate={searchRate}
            setMovies={setMovies}
          />
        }/>
        <Route
          path="/moviedetails/:idmovie"
          element={<MovieDetails movies={movies} />}
        />

      </Routes>


            

    </div>
  );
};

export default App;
