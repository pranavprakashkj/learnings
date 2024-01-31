import { useRef, useState } from "react";

export default function Login() {
  const [emailValid, setEmailValid] = useState();
  const email = useRef();
  const password = useRef();
  function handleLogin(event) {
    event.preventDefault(); //does not perform the default op, http req
    const emailValue = email.current.value;
    const passValue = password.current.value;

    const validEmail = emailValue.includes("@");

    if (!validEmail) {
      setEmailValid(true);
      return;
    }
    setEmailValid(false);
    console.log("submitted");
  }
  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailValid && <p>Enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
