import React, { useEffect, useState } from 'react'
import MovieSearchBar from '../components/MovieSearchBar'
import MovieList from '../components/MovieList'
import NominatedList from '../components/NominatedList'
import { AiOutlineArrowUp } from 'react-icons/ai'
const Home = () => {
  const [showButton, setShowButton] = useState()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      }
      else {
        setShowButton(false)
      }
    })

  }, [])
  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  }
  return (
    <div>
      <MovieSearchBar />
      <div className="md:flex">
        <MovieList />
        <NominatedList />
      </div>
      <div className='flex justify-end'>
        {showButton &&
          <button onClick={goUp} className='p-3 border-2 border-solid rounded bg-slate-400 m-10 '><AiOutlineArrowUp /></button>}
      </div>
    </div>
  )
}

export default Home