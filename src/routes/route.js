// Rotas.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "../pages/signin/signin"
import Signup from '../pages/singup/signup';
import Home from '../pages/Home/home';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        {/* <Route path="/signup/:userId/:token" element={<Signup />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/home/:username/:email" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
