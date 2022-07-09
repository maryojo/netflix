import React, {useState, useEffect} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../config";
import BackgroundLayout from "../components/backgroundlayout";



const Register = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  // const navigate = useNavigate();
  const register = () =>{
    registerWithEmailAndPassword(email, password);
  };

 useEffect(() => {
    if(loading) return;
    if(user) history.replace("/manage-profiles");
 }, [user, loading]);

  return(
    <div>
      <BackgroundLayout>
        <div className="absolute p-20 bg-black bg-opacity-80 w-4/12 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="font-semibold text-3xl mb-7">Sign In</h2>
          <form className="space-y-3">
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
            <div onClick={register} className="bg-primary text-center text-lg font-medium rounded-lg py-3 cursor-pointer ">Sign In</div>
            <div>

            </div>
            <div>
              Need help?
            </div>
          </form>
        </div>
      </BackgroundLayout>
    </div>
  )
}

export default Register;