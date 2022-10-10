import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import WinnerMovie from '../components/WinnerMovie'
import { MovieStore } from '../store/MoviesStore'

const ChooseMoviePage = () => {
    const {nominatedMovies} = useContext(MovieStore)
    const randomNumber = Math.floor(Math.random() * 5)
    const winnerMovie = nominatedMovies[randomNumber]
  return (
    <div className='flex flex-col justify-center h-[100vh] items-center bg-slate-900 text-white'>
        <h1 className='text-[30px] mb-4'>Winner Movie</h1>
        <WinnerMovie
         key={winnerMovie.imdbID}
         title={winnerMovie.Title}
         releaseDate={winnerMovie.Year}
         img={winnerMovie.Poster}
        />
        <Link to='/'>
        <button className='border-2 border-solid hover:bg-slate-400 p-4 rounded'>Try Again</button>
        </Link>
      
    </div>
  )
}

export default ChooseMoviePage