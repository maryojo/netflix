//file: src/webpages/index.js
import React from 'react';
import {
  BrowserRouter,
  Routes,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import ProtectedRoutes from '../components/ProtectedRoutes';
import Login from './login';
import Register from './register';
import Landing from './landing';
import ManageProfiles from './manage-profiles';
import Account from './Account';
import Home from './home';

const Pages = () => {
    return(
      <BrowserRouter>
           <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/manage-profiles" element={<ManageProfiles/>} />
            <Route path="/home" element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
            <Route path="/account" element={<ProtectedRoutes><Account/></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
       
    );
};


export default Pages;