import React, { useState, useRef, useEffect } from "react";

import "./Form.css";

const Form = ({ open, onClose,handleSubmit,values,handleChange }) => {
  if (!open) return null;

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
            name="title"
            placeholder="Title..."
            id="text"
            value={values.title}
            onChange={handleChange}
          />
          <textarea
            className="form__input"
            name="description"
            placeholder="Take a note..."
            id="text"
            cols="20"
            rows="2"
            value={values.description}
            onChange={handleChange}
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
