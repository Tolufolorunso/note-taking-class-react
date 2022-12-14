import React from "react";
import "./App.css";
import Header from "./components/header/Header";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, NotePage, RegisterPage, LoginPage, NotFound } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
