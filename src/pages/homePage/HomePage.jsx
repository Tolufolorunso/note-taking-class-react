import React, { useEffect, useState } from "react";

import "./HomePage.css";
import Header from "../../components/header/Header";
import Form from "../../components/form/Form";

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState(null);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) =>{
        setTodo(json)
        setIsLoading(false)
      });
      console.log("useEffect")
  },[]);


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
      <div>
       {isLoading ? <p>Loading...</p> : <h1>{todo.title}</h1>} 
      </div>
      <Form open={showForm} onClose={handleCloseForm} />
      
    </>
  );
};

export default HomePage;
