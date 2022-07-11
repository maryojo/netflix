// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  // connectAuthEmulator,
} from "firebase/auth";
import {
   getFirestore,
    query,
   getDocs,
    collection,
    where,
   addDoc,
  } from "firebase/firestore";
// import firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: process.env.REACT_APP_apiKey,
   authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
     messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId,
    };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// connectAuthEmulator(auth, "https://localhost:9099");


    // const logInWithEmailAndPassword = async (email, password) => {
    //   try {
    //     let userCred = await signInWithEmailAndPassword(auth, email, password);
    //     console.log(userCred.user);
    //   } catch (err) {
    //     console.error(err);
    //     alert(err.message);
    //   }
    // };

    // const registerWithEmailAndPassword = async (name, email, password) => {
    //   try {
    //     const res = await createUserWithEmailAndPassword(auth, email, password);
    //     const user = res.user;
    //     await addDoc(collection(db, "users"), {
    //       uid: user.uid,
    //       name,
    //       authProvider: "local",
    //       email,
    //     });
    //   } catch (err) {
    //     console.error(err);
    //     alert(err.message);
    //   }
    // };

    // const logout = () => {
    //   signOut(auth);
    // };
    // export {
    //   auth,
    //   db,
    //   logInWithEmailAndPassword,
    //   registerWithEmailAndPassword,
    //   logout,
    // };