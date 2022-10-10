import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieStore } from '../store/MoviesStore'
import NominatedMovie from './NominatedMovie'

const NominatedList = () => {
  const { nominatedMovies, setNominatedMovies } = useContext(MovieStore)
  const reset = () => {
    setNominatedMovies([])
  }
  return (
    <div className="bg-white flex  m-10 p-5 rounded w-[50%]">
      <div>
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


      {nominatedMovies.length === 5 && 
        <div>
          <Link to='/choose-movie'><button className='border-solid border-2 rounded p-2 hover:bg-slate-400'>Lets choose a movie</button></Link>
          <button onClick={reset} className='border-solid border-2 rounded p-2 ml-2 hover:bg-slate-400'>Reset</button>
        </div>
      }



    </div>
  )
}

export default NominatedList