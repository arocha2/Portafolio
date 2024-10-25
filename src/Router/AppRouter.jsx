import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { HomePage } from "../HomePage/HomePage";
import { Footer } from "../Footer/Footer";
import { ProyectPage } from "../proyectPage/ProyectPage";
import { Faqs } from "../Faqs/Faqs";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/proyectos" element={<ProyectPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};
