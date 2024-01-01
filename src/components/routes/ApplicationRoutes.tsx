import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Projects from "../pages/Projects";
import ContactUs from "../pages/ContactUs";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={null} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
