// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
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
  apiKey: "AIzaSyCbwGkpP14BexZMoP1gqvSbLZSfYigjUvfcXkroScK",
   authDomain: "netflix-clone-c7b22.firebaseapp.com",
    projectId: "netflix-clone-c7b22",
    storageBucket: "netflix-clone-c7b22.appspot.com",
     messagingSenderId: "826536555534",
      appId: "1:826536555534:web:4cd826c38455310028385f"
    
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



    const logInWithEmailAndPassword = async (email, password) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    };
    const registerWithEmailAndPassword = async (name, email, password) => {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        });
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    };

    const logout = () => {
      signOut(auth);
    };
    export {
      auth,
      db,
      logInWithEmailAndPassword,
      registerWithEmailAndPassword,
      logout,
    };