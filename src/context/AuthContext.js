import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from '../config'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuthStateChanged,
  onAuthStateChanged,
  // connectAuthEmulator,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({children}){
  const [user, setUser] = useState({});

   const logIn = (email, password) => {
      return  signInWithEmailAndPassword(auth, email, password);
    };

    const register = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, 'users', email), {
        savedShows : []
      })
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