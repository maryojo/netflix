import { Link } from 'react-router-dom';
import BackgroundLayout from './backgroundlayout'

function Banner() {
  return (
        <BackgroundLayout>
          <div className="absolute z-10 text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-5 w-6/12">
            {/* <div className='w-5/6 self-center'> */}
            <h1 className="pt-10">Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            {/* </div> */}
          <div className="flex flex-row justify-center w-full">
            <input type="text" placeholder="Email address" className='py-5 px-3 w-4/6'/>
            <div className='py-5 px-7 bg-primary cursor-pointer text-2xl'>Get started</div>
        </div>
        </div>
      {/* </div> */}
     
     
    {/* // </div> */}
    </BackgroundLayout>

  );
}

export default Banner;
