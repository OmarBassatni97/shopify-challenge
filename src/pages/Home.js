import React from 'react'
import MovieSearchBar from '../components/MovieSearchBar'
import MovieList from '../components/MovieList'
import NominatedList from '../components/NominatedList'
const Home = () => {
  return (
    <div>
        <MovieSearchBar />
        <div className="md:flex">
          <MovieList />
          <NominatedList />
        </div>
      </div>
  )
}

export default Home