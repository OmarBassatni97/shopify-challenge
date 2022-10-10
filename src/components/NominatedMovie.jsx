import React from "react";

const NominatedMovie = ({ img, releaseDate, title }) => {
  return (
    <div className='lg:flex mb-10'>
        <img className='h-[150px]' src={img} alt={img} />
        <div className='m-3 font-bold'>
        <p>{title}</p>
        <p>Released: {releaseDate}</p>
        </div>
    </div>
  );
};

export default NominatedMovie;
