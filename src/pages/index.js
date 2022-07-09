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
import Home from './home';
import ManageProfiles from './manage-profiles';

const Pages = () => {
    return(
      <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            {/* <Route path="/register" element={<Register/>} /> */}
            <Route path="/manage-profiles" element={<ManageProfiles/>} />
        </Routes>
      </BrowserRouter>
       
    );
};


export default Pages;