import React from 'react'
import Navbar from '../components/Navbar'
import background from '../images/netflix-background.png'
import SavedMovies from '../components/SavedMovies'



const Account = () => {
  return (
    <div className=' relative'>
    <Navbar/>
      <div className=" bg-stone-700 bg-cover bg-center h-[450px] relative">
        <img alt="" src={background} className="w-full h-full object-cover mix-blend-overlay"/>
      </div>
      <div className='absolute top-[40%] p-4 md:p-8'>
        <h3 className='font-semibold'>My Shows</h3>
      </div>
      <SavedMovies/>
    </div>
  )
}

export default Account