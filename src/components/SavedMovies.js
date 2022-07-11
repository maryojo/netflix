import React, {useState, useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { db } from '../config'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'


const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const {user} = UserAuth();

  const slideLeft = () =>{
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () =>{
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  useEffect(() =>{
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) =>{
      setMovies(doc.data()?.savedMovies);
    })

  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}` );

  const deleteMovies = async (passedID) =>{
    try{
        //remove from state on client 
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
          savedMovies : result,
        })
        //push changes to db
    } catch(error){
        console.log(error);
    }
  }

  return (
    <div>
      <h4 className="p-4">Saved Movies</h4>
      <div className="flex items-center relative group">
      <MdChevronLeft onMouseOver={slideLeft} size={40} className="text-black bg-white rounded-full opacity-50 absolute hover:opacity-80 cursor-pointer z-10 hidden group-hover:block left-0"/>
        <div 
        id={'slider'} 
        className="w-full h-full overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide relative" >
          { movies?.map((item, id) => (
            <div 
            key = {item.id}
            className="w-[100px] sm:w-[160px] md:w-[200px] lg:w-[240px] inline-block p-2 cursor-pointer relative">
              <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.poster}`} alt={item?.title}/>
              {/* <img className="w-full h-auto block hidden" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop}`} alt={item?.title}/> */}
              <p onClick={()=> deleteMovies(item.id)}><AiOutlineClose className='z-10 absolute text-gray-300 top-4 right-2'/></p>
               <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100">
                <p className=" text-white white-space-normal text-xs md:text-sm font-semibold flex justify-center items-center h-full text-center">{item?.title}</p>                
             </div>
           </div>
          ))
          }
        </div>
      <MdChevronRight onMouseOver={slideRight} size={40} className="text-black bg-white rounded-full opacity-50 absolute  hover:opacity-80 cursor-pointer z-10 hidden group-hover:block right-0"/>
      </div>
    </div>
  )
}

export default SavedMovies