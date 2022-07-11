import { createContext, useContext, useState, useEffect } from "react";
import { auth } from '../config'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuthStateChanged,
  onAuthStateChanged,
  // connectAuthEmulator,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({children}){
  const [user, setUser] = useState({});

   const logIn = (email, password) => {
      return  signInWithEmailAndPassword(auth, email, password);
    };

    const register = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
      return  signOut(auth);
    };

    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
      });
      return () =>{
          unsubscribe();
      };
    })

  return(
  <AuthContext.Provider value={{register, logIn, logOut, user}}>
    {children}
  </AuthContext.Provider>
  )
}

export function UserAuth(){
  return useContext(AuthContext)
}