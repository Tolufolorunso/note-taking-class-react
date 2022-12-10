import React, { useState } from "react";

import "./Form.css";

const Form = ({ open, onClose }) => {
  if (!open) return null;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
    };
    console.log(data);

    setTitle("");
    setDescription("");

  };

  return (
    <>
      <div className="overlay"></div>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__heading">Note</h3>
        <div className="close__btn" onClick={onClose}>
          <i className="fas fa-solid fa-xmark"></i>
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            name="text"
            placeholder="Title..."
            id="text"
            value={title}
            onChange={handleTitleInput}
          />
          <textarea
            className="form__input"
            name="text"
            placeholder="Take a note..."
            id="text"
            cols="20"
            rows="2"
            value={description}
            onChange={handleDescription}
          ></textarea>
          <div className="button">
            <input type="submit" required value="ADD" className="submit__btn" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
