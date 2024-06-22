import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import { Navigate, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";
import Contact from "./components/Contact";


const App = () => {
  const [AuthUser, setAuthUser]=useAuth()
  console.log(AuthUser);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={AuthUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
