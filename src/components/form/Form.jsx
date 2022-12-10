import React, { useState, useRef, useEffect } from "react";

import "./Form.css";

const Form = ({ open, onClose }) => {
  if (!open) return null;

  // const genderRef = useRef()

  console.log("hello");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [description, setDescription] = useState("");
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  // const handleTitleInput = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleDescription = (e) => {
  //   setDescription(e.target.value);
  // };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(genderRef.current)

    // const data = {
    //   title: title,
    //   description: description,
    // };
    console.log(values);

    setValues({
      title: "",
      description: "",
    });
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
            name="title"
            placeholder="Title..."
            id="text"
            value={values.title}
            onChange={handleChange}
          />
          {/* <input
            className="form__input"
            type="text"
            name="gender"
            placeholder="gneder"
            id="text"
            ref={genderRef}
          /> */}
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
