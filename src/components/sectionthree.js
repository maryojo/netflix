import app from '../images/mobile.jpg'

function SectionThree(){
  return(
    <div className='flex flex-row px-36 py-14 border-b-gray-600 border-b-8'>
    <div className='w-3/6 my-auto space-y-5'>
      <h1>Watch Everywhere.</h1>
      <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
    </div>
    <div>
    <div className='relative'>
      <img src={app} alt="" className='relative -left-20 w-5/6 z-10 hidden'/>
    </div>
    </div>
 </div>
//     </div>
  )
}

export default SectionThree;