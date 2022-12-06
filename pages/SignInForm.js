import { useState } from "react";

export default function SignInForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [SecondPassword, setSecondPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  let data = [];

  const emptyForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setSecondPassword("");
    setCheckBox(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let profile = {
      firstName,
      lastName,
      email,
      password,
      SecondPassword,
      checkBox,
    };
  password !== SecondPassword ? alert("passwords must match") : (data.push(profile))
    password.pattern === false ? alert("nop") : alert("yup")
    console.log(password.patter);
    emptyForm();
  };

  return (
    <div className="main-container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Your password must have a minimum of 5 characters
          uppercase and lowercase letters
          a number
          your password cannot match your email address"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="confirm password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={SecondPassword}
          onChange={(e) => setSecondPassword(e.target.value)}
        />

        <div className="terms-box">
          <input
            type="checkbox"
            className="form-checkbox"
            value={checkBox}
            checked={checkBox}
            onChange={(e) => setCheckBox(e.currentTarget.checked)}
          />
          <p>I have read and agree to the terms and conditions</p>
        </div>

        <button>submit</button>
      </form>
    </div>
  );
}
