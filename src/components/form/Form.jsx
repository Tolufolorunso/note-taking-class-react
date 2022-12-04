import React from "react";
// import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  return (
    <form className="form">
      <h3 className="form__heading">Note</h3>
      <div className="form__group">
        <textarea
          className="form__input"
          name="text"
          placeholder="Take a note..."
          id="text"
          cols="20"
          rows="2"
          class="form__input edit__group-input"
        ></textarea>

        <div className="button">
          <input type="submit" required value="ADD" class="submit__btn" />
        </div>
      </div>
    </form>
  );
};

export default Form;
