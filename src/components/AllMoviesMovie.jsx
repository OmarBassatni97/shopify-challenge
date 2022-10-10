import React from 'react'

const AllMoviesMovie = ({title,img,releaseDate}) => {
  return (
    <div>
         <div class="py-3 sm:max-w-xl sm:mx-auto">
    <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
      <div class="h-48 overflow-visible w-1/2">
          <img class="rounded-3xl shadow-lg" src={img} alt={img}/>
      </div>
      <div class="flex flex-col w-1/2 space-y-4">
        <div class="flex justify-between items-start">
          <h2 class="text-3xl font-bold">{title}</h2>
        </div>
        <div>
          <div class="text-lg text-gray-800">{releaseDate}</div>
        </div>
      </div>

    </div>
  </div>
  
    </div>
  )
}

export default AllMoviesMovie