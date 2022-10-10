import React,{useContext} from 'react'
import { MovieStore } from '../store/MoviesStore'
const Movie = ({title, releaseData, img, addMovie}) => {
  const {nominatedMovies} = useContext(MovieStore)
  const nominatedMoviesLimit = nominatedMovies.length === 5 ? true : false
  return (
    <div className='lg:flex mb-10'>
        <img className='h-[250px]' src={img} alt={img} />
        <div className='m-3 font-bold'>
        <p>{title}</p>
        <p>Released: {releaseData}</p>
        </div>
        <button onClick={addMovie} disabled={nominatedMoviesLimit} className='border-solid border-2 rounded-lg h-10 w-10 m-3 cursor-pointer hover:bg-gray-400'>+</button>
    </div>
  )
}

export default Movie