import kids from '../images/kids.png'

function Faq(){
  return(
    <div className='px-36 py-14 border-b-gray-600 border-b-8 text-center'>
    {/* <div className='w-4/6 my-auto space-y-5'> */}
      <h1>Frequently Asked Questions</h1>
    {/* </div> */}
      <div>Toggle</div>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="flex flex-row justify-center w-5/6">
            <input placeholder="Email address" className='py-5 px-3 w-4/6'/>
            <div className='py-5 px-7 bg-primary cursor-pointer text-2xl'>Get started</div>
      </div>
 </div>
//     </div>
  )
}

export default Faq;