import { Link, useNavigate } from "react-router-dom";
import logo from '../images/netflix-logo.png';
import { UserAuth } from "../context/AuthContext";

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
        <div>
        <div className="absolute right-10 top-5 flex flex-row-reverse justify-center items-center z-10">
          <button onClick={handleSignout} className='px-6 py-2 z-10 cursor-pointer text-white rounded bg-primary'>Sign Out</button>
        <Link to="/account">
          <button className="text-primary mr-5 font-semibold">Account</button>
        </Link>
      </div> 
      </div>
      ) : (
        <div>
        <div className="absolute right-10 top-5 flex flex-row-reverse justify-center items-center z-10">
        <Link to="/login">
          <button className='px-6 py-2 z-10 cursor-pointer text-white rounded bg-primary'>Sign In</button>
        </Link>
        <Link to="/register">
          <button className="text-primary mr-5 font-semibold">Sign Up</button>
        </Link>
      </div> 
      </div>
      )}
    </nav>
  );
};

export default Navbar;