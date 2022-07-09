import logo from '../images/netflix-logo.png'
import ProfileCard from '../components/profile-card';
import { Link } from 'react-router-dom';

const ManageProfiles = () =>{
  return(
    <div className="h-screen">
    <Link to="/">
      <img src={logo} alt="" width={170} className="ml-10 absolute z-10"/>
    </Link>

    <div>
      <h2 className='font-semibold text-3xl'>Who's watching?</h2>
      <div className='flex flex-row space-x-5'>
        {/* <ProfileCard name="Techies"/> */}
        <ProfileCard name="Visitor"/>
        <ProfileCard name="Kids"/>
      </div>
      <div className="uppercase px-5 py-2 cursor-pointer border-solid border-2 border-gray-700">Manage Profiles</div>
    </div>
    </div>
  )
}


export default ManageProfiles;