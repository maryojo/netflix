import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
// import {auth } from '../config'
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useAuthState } from "react-firebase-hooks/auth";
import BackgroundLayout from "../components/backgroundlayout";

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [error, setError ] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
      e.preventDefault();
      try{
        let cred = await logIn(email, password);
        console.log(cred);
        navigate("/manage-profiles");
      } catch(error){
        console.log(error);
        setError(error.message);
      }
  }
  
  return(
    <div>
      <BackgroundLayout status="invisible">
        <div className="absolute p-20 bg-black bg-opacity-80 w-4/12 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="font-semibold text-3xl mb-7">Sign In</h2>
          <div className="space-y-3">
          <div>
            {error ? <p>{error}</p> : null}
          </div>
            <input 
            name="email" 
            type="email" 
            placeholder="Email or phone number" 
            className="w-full py-3 rounded-lg px-3 bg-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            className="w-full py-3 px-3 rounded-lg text-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <div 
            onClick={handleSubmit} 
            className="bg-primary text-center text-lg font-medium rounded-lg py-3 cursor-pointer ">Sign In</div>
            <div>

            </div>
            <div>
              Need help?
            </div>
          </div>
        </div>
      </BackgroundLayout>
    </div>
  )
}

export default Login;