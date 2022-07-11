import { Link } from "react-router-dom";
import logo from '../images/netflix-logo.png';
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () =>{
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleSignout = async (e) =>{
    e.preventDefault();
    try{
      await logOut();
      navigate("/");
    } catch(error){
      console.log(error);
    }
}

  return(
    <nav className="relative flex flex-col">
      <Link to="/">
      <img src={logo} alt="" width={170} className="ml-10 absolute z-10"/>
      </Link>
      { user?.email ? ( 
        <div className="absolute right-10 top-5 flex flex-row-reverse justify-center items-center">
          <div onClick={handleSignout} className='px-6 py-2 z-10 cursor-pointer text-white rounded bg-primary'>Sign Out</div>
        <Link to="/">
          <p className="text-primary mr-5 font-semibold">Account</p>
        </Link>
      </div> )
      : (<div className="absolute right-10 top-5 flex flex-row-reverse justify-center items-center">
        <Link to="/login">
          <div className='px-6 py-2 z-10 cursor-pointer text-white rounded bg-primary'>Sign in</div>
        </Link>
        <Link to="/">
          <p className="text-primary mr-5 font-semibold">Sign Up</p>
        </Link>
      </div>)
      }
  
    </nav>
  )
}

export default Navbar;