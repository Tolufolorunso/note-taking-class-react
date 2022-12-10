import React, { useState } from "react";

import "./HomePage.css";
import Header from "../header/Header";
import Form from "../form/Form";

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <Header />
      <div className="title__container">
        <div className="title__heading">
          <h2>Welcome to Note App</h2>
        </div>
        <div>
          <button className="title__btn" type="submit" onClick={handleShowForm}>
            Create New Note
          </button>
        </div>
      </div>
      <Form open={showForm} onClose={handleCloseForm} />
      
    </>
  );
};

export default HomePage;
