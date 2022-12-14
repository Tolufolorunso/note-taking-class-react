import React from "react";
import "./App.css";
import Header from "./components/header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NotFound from "./pages/404";
// import NotePage from "./pages/NotePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

import { HomePage, NotePage, AboutPage, ContactPage, NotFound } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
