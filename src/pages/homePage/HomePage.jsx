import React, { useEffect, useState } from "react";

import "./HomePage.css";
import Form from "../../components/form/Form";
import Loading from "../../components/Loading";

import { useAppContext } from "../../store/appContext";

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
console.log(useAppContext())
  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.title || !values.description) {
      alert("Enter all fields");
      return;
    }

    const response = await fetch("http://localhost:4000/api/v1/notes", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(values),
    });

    const note = await response.json();

    if (!note.status) {
      console.log(note.message);
      alert(note.message);
    }

    setValues({
      title: "",
      description: "",
    });
  };

  return (
    <>
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
      <Form
        open={showForm}
        onClose={handleCloseForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
      />
    </>
  );
};

export default HomePage;
