import kids from '../images/kids.png'

function SectionFour(){
  return(
    <div className='flex flex-row-reverse px-36 py-14 border-b-gray-600 border-b-8'>
    <div className='w-4/6 my-auto space-y-5'>
      <h1>Create profiles for kids.</h1>
      <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
    </div>
    <div>
    <div className='relative'>
      <img src={kids} alt="" className='relative -left-10 w-5/6 z-10'/>
    </div>
    </div>
 </div>
//     </div>
  )
}

export default SectionFour;