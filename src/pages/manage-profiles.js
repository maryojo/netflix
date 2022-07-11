import logo from '../images/netflix-logo.png'
import Navbar from '../components/Navbar';
import ProfileCard from '../components/profile-card';
import { Link } from 'react-router-dom';
import avatar1 from '../images/avatar1.png'
import avatar2 from '../images/kidsavatar.jpg'

const ManageProfiles = () =>{
  return(
    <div className="h-screen">
    <Navbar/>
    <div className='flex flex-col items-center justify-center h-screen space-y-10'>
      <h2 className='font-semibold text-3xl'>Who's watching?</h2>
      <div className='grid grid-flow-col gap-6 align-middle'>
        <Link to="/home">
        <ProfileCard name="Visitor" src={avatar1}/>
        </Link>
        <ProfileCard name="Kids" src={avatar2}/>
        <svg className="w-32 h-32 opacity-40" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>
      </div>
      <div className="uppercase px-5 py-2 cursor-pointer border-solid border-2 border-gray-700">Manage Profiles</div>
    </div>
    </div>
  )
}


export default ManageProfiles;