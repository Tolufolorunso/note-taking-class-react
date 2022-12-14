import React from "react";
import "./SignUpForm.css";

const RegistrationForm = ({ handleSubmit, handleChange, values }) => {
  return (
    <>
      <form className="form registration__form" onSubmit={handleSubmit}>
        <h4 className="register__form-heading">Register</h4>
        <div className="register__form_group">
          <div className="register__form-wrapper">
            <label for="fullname" className="float-label">
              Full Name
            </label>
            <input
              className="register__form-input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
          </div>

          <div className="register__form-wrapper">
            <label for="email" className="float-label">
              Email
            </label>
            <input
              className="register__form-input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="register__form-wrapper">
            <label for="password" className="float-label">
              Password
            </label>
            <input
              className="register__form-input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <div className="register__form-wrapper">
            <label for="password2" className="float-label">
              Confirm password
            </label>
            <input
              className="register__form-input"
              type="password"
              name="password2"
              value={values.password2}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="submit"
              required
              value="Register"
              className="signUp__btn"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
