import React from 'react'
import { Route, Routes } from 'react-router-dom';

import './App.scss'
import Login from './components/login'
import Register from './components/register'
import Verified from './components/verified';
import Forgot from './components/forgot/forgotpass';
import ForgotLink from './components/forgot/forgotLink';
import Hero from './components/main/hero';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/forgotpassword" element={<Forgot/>}></Route>
        <Route path="/home" element={<Hero/>}></Route>

        <Route path="/users/:id/forgot/:token" element={<ForgotLink/>}></Route>
        <Route path="/users/:id/verify/:token" element={<Verified/>}></Route>
    
      </Routes>

    </>
  );
}

export default App;
