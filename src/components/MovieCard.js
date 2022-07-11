import { useState } from 'react'
import {FaHeart, FaRegHeart } from 'react-icons/fa'

const MovieCard = ({item, id}) => {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[100px] sm:w-[160px] md:w-[200px] lg:w-[240px] inline-block p-2 cursor-pointer relative">
      <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt={item?.title}/>
      <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="text-white white-space-normal text-xs md:text-sm font-semibold flex justify-center items-center h-full text-center">{item?.title}</p>
        <p className='absolute top-4 left-4 text-gray-400'>
          {
            like ? <FaHeart/> : <FaRegHeart/>
          }
        </p>
      </div>
    </div>
  )
}

export default MovieCard