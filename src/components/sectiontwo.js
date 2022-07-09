import tv from '../images/tv.png'
import app from '../images/mobile.jpg'

function SectionTwo(){
  return(
    <div className='flex flex-row-reverse bg-black px-36 py-14 text-white border-b-gray-600 border-b-8'>
    <div className='w-4/6 my-auto space-y-5'>
      <h1>Download your shows to watch offline.</h1>
      <h3>Save your favorites easily and always have something to watch.</h3>
    </div>
    <div>
    <div className='relative'>
      <img src={app} alt="" className='relative -left-20 w-5/6 z-10'/>
    </div>
    </div>
 </div>
//     </div>
  )
}

export default SectionTwo;