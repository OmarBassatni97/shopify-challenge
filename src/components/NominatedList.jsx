import React, { useContext } from 'react'
import { MovieStore } from '../store/MoviesStore'
import NominatedMovie from './NominatedMovie'

const NominatedList = () => {
    const {nominatedMovies} = useContext(MovieStore)
  return (
    <div className="bg-white m-10 p-5 rounded w-[50%]">
 <h1 className="font-bold text-[25px] mb-3">Nominated Movies:</h1>
 {nominatedMovies &&
        nominatedMovies.map((movie) => {
          return (
            <NominatedMovie
              key={movie.imdbID}
              title={movie.Title}
              releaseDate={movie.Year}
              img={movie.Poster}
            />
          );
        })}
    </div>
  )
}

export default NominatedList