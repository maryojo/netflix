import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'



const Row = ({rowID, title, fetchURL}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    return () => {
      axios.get(fetchURL).then((response) =>{
        setMovies(response.data.results);
      })
    };
  }, [fetchURL]);

  console.log(movies);

  const slideLeft = () =>{
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () =>{
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h4 className="p-4">{title}</h4>
      <div className="flex items-center relative group">
      <MdChevronLeft onMouseOver={slideLeft} size={40} className="text-black bg-white rounded-full opacity-50 absolute hover:opacity-80 cursor-pointer z-10 hidden group-hover:block left-0"/>
        <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide relative" >
          { movies?.map((item, id) => (
              <MovieCard item={item} id={id}/>
          ))
          }
        </div>
      <MdChevronRight onMouseOver={slideRight} size={40} className="text-black bg-white rounded-full opacity-50 absolute  hover:opacity-80 cursor-pointer z-10 hidden group-hover:block right-0"/>
      </div>
    </>
  )
}

export default Row