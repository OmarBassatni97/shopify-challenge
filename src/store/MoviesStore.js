import { createContext, useState } from "react";

const MovieStore = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [nominatedMovies, setNominatedMovies] = useState()
  return (
    <MovieStore.Provider value={{ movies, setMovies, nominatedMovies, setNominatedMovies }}>{children}</MovieStore.Provider>
  );
};


export {MovieStore, MovieProvider}