import React from "react";
import "./LoginForm.css";

const LoginForm = ({ handleSubmit, handleChange, values }) => {
  return (
    <>
      <form className=" form login__form" onSubmit={handleSubmit}>
        <h4 className="login__form-heading">Let's Login</h4>
        <div className="login__form-group">
          <input
            className="login__form-input"
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />

          <input
            className="login__form-input"
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <input type="submit" required value="Login" className="login__btn" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
