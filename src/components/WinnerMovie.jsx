import React from 'react'

const WinnerMovie = ({ img, releaseDate, title }) => {
    return (
        <div className='flex flex-col mb-10'>
            <img className='h-[450px]' src={img} alt={img} />
            <div className='m-3 font-bold'>
                <p>{title}</p>
                <p>Released: {releaseDate}</p>
            </div>
        </div>
    )
}

export default WinnerMovie