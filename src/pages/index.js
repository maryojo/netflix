//file: src/webpages/index.js
import React from 'react';
import {
  BrowserRouter,
  Routes,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from './login';
// import Register from './register';
import Landing from './landing';
import ManageProfiles from './manage-profiles';
import Home from './home';

const Pages = () => {
    return(
      <BrowserRouter>
           <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            {/* <Route path="/register" element={<Register/>} /> */}
            <Route path="/manage-profiles" element={<ManageProfiles/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
       
    );
};


export default Pages;