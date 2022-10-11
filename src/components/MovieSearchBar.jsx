import React, { useContext, useState } from "react";
import { MovieStore } from "../store/MoviesStore";

const MovieSearchBar = () => {
  const [title, setTitle] = useState('')
  const { setMovies, setError } = useContext(MovieStore);



  const fetchData = async (e, title) => {
    e.preventDefault()
    const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=9b0bfa13`)
    const data = await response.json()
    setMovies(data)
    setError(data.Error)
    console.log(data)
    setTitle('')

  }



  return (
    <div className=" m-10 ">
      <div className="flex justify-between mb-2">
        <h1 className="text-[25px] font-bold ">The Shoppies</h1>
      </div>
      <div className="bg-white rounded p-5">
        <p className="text-[20px]">Movie title</p>
        <form onSubmit={(e) => fetchData(e, title)}>
          <input
            className="border-solid border-2 w-full border-gray rounded p-2"
            placeholder="Search"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="border-solid border-2 border-black p-2 rounded mt-2">Search</button>
        </form>
      </div>
    </div>
  );
};

export default MovieSearchBar;
