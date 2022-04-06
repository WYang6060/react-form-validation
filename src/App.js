import "./styles.css";
import FormInput from "./Component/FormInput";
import { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const inputObjList = [
    {
      name: "username",
      type: "text",
      placeholder: "user name",
      label: "user name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      name: "email",
      type: "email",
      placeholder: "email",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      required: true
    },
    {
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: true
    },
    {
      name: "password",
      type: "password",
      placeholder: "password",
      label: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {
      name: "confirmpPssword",
      type: "password",
      placeholder: "confrim password",
      label: "confirm password",
      errorMessage: "Passwords don't match!",
      pattern: values.password
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.values });
  };

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <h4>Register</h4>
        {inputObjList.map((input, idx) => (
          <div className="field-control" key={idx}>
            <FormInput
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
