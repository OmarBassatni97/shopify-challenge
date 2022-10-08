import React from 'react'

const Movie = ({title, releaseData, img}) => {
  return (
    <div className='flex mb-10'>
        <img className='h-[250px]' src={img} alt={img} />
        <div className='m-3 font-bold'>
        <p>{title}</p>
        <p>Released: {releaseData}</p>
        </div>
        <button className='border-solid border-2 rounded-lg h-10 w-10 m-3 cursor-pointer hover:bg-gray-400'>+</button>
    </div>
  )
}

export default Movie