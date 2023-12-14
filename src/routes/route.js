// Rotas.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "../pages/signin/signin"
import Signup from '../pages/singup/signup';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        {/* <Route path="/signup/:userId/:token" element={<Signup />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
