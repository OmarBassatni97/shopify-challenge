import React, { useContext } from "react";
import { MovieStore } from "../store/MoviesStore";
import Movie from "./Movie";

const MovieList = () => {
  const { movies, setNominatedMovies } = useContext(MovieStore);

  const addMovie = (e,movie) => {
    const addedMovie = {
      imdBID: movie.imdbID,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
    };
    setNominatedMovies(prev => [...prev,addedMovie])
    e.target.disabled = true
  };
  return (
    <div className="bg-white m-10 p-5 rounded  md:w-[50%]">
      <h1 className="font-bold text-[25px] mb-3">Results:</h1>
      {movies &&
        movies.Search.slice(0, 3).map((movie) => {
          return (
            <Movie
              key={movie.imdbID}
              title={movie.Title}
              releaseData={movie.Year}
              img={movie.Poster}
              addMovie={(e) => addMovie(e,movie)}
            />
          );
        })}
    </div>
  );
};

export default MovieList;
