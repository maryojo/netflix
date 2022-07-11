import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from './Navbar'
import requests from "../requests";

const Main = () =>{

  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    return () => {
      axios.get(requests.requestTrending).then((response) =>{
        setMovies(response.data.results);
      })
    };
  }, []);

  console.log(movie);

  const truncateText = (text, num) =>{
    if(text?.length > num){
      return text.slice(0, num) + "...";
    } else {
      return text;
    }
  }

  return(
    <>
    <Navbar/>
    <div className="w-full h-[500px] ">
        <div className="w-full h-full">
        <div className="absolute h-[500px] w-full bg-gradient-to-r from-black"></div>
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
          <div className="absolute top-[20%] w-full p-4 md:p-8 space-y-5">
            <h3 className="font-semibold">{movie?.title}</h3>
            <div>
              <button className="border bg-gray-300 text-black py-2 px-3">Play</button>
              <button className="border-gray-300 border ml-3 text-gray-100 py-2 px-3">Watch Later</button>
            </div>
            <div className="font-sm text-gray-400">Released: {movie?.release_date}</div>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateText(`${movie?.overview}`, 200)}</p>
          </div>
        </div>
    </div>

    </>
  )
}

export default Main;