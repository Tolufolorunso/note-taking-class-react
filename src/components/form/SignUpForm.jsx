import React from "react";
import Input from "../Input";
import "./SignUpForm.css";

const RegistrationForm = ({ handleSubmit, handleChange, values,isLoading }) => {
  return (
    <>
      <form className="form registration__form" onSubmit={handleSubmit}>
        <h4 className="register__form-heading">Register</h4>
        <div className="register__form_group">
          <Input label="Full Name" name="fullname" type="text" value={values.fullname} handleChange={handleChange} />
          <Input label="Email" name="email" type="email" value={values.email} handleChange={handleChange} />
          <Input label="Password" name="password" type="password" value={values.password} handleChange={handleChange} />
          <Input label="Confirm password" name="password2" type="password" value={values.password2} handleChange={handleChange} />
        <div>
            <input
              type="submit"
              required
              value={isLoading ? "Registering..." : "Register"}
              className="signUp__btn"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
