import React from "react";
import { useState } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
const initialState = {
  username: "",
  password: "",
  email: "",
  isMember: true,
};
const Register = () => {
  const [values, setValues] = useState(initialState);
  //global state, and useNavigate
  const { isLoading, showAlert, display_alert } = useAppContext();
  //console.log(isLoading, showAlert);
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email, isMember, username } = values;
    if (!password || !email || (!isMember && !username)) {
      display_alert();

      return;
    }
    console.log(values);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            {...{
              type: "text",
              labelText: "name",
              inputName: "username",
              handleChange: handleChange,
              value: values.username,
            }}
          />
        )}
        {/* each input field */}

        {/* each input field */}
        <FormRow
          type="email"
          labelText="email"
          inputName="email"
          handleChange={handleChange}
          value={values.email}
        />
        {/* each input field */}
        <FormRow
          {...{
            type: "password",
            labelText: "password",
            inputName: "password",
            handleChange: handleChange,
            value: values.password,
          }}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "register" : "login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
