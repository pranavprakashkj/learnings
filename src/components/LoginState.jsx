import Inputs from "./Inputs";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: email,
    handleChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: password,
    handleChange: handlePassChange,
    handleInputBlur: handlePassBlur,
    hasError: passError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleLogin(event) {
    event.preventDefault(); //does not perform the default op, http req
    if (emailError || passError) {
      return;
    }
    console.log("login", email, password);
  }
  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <Inputs
            name="email"
            label="Email"
            id="email"
            type="email"
            onBlur={handleEmailBlur}
            onChange={handleEmailChange} //by default will get the event
            value={email}
            error={emailError && "enter a valid email"}
          />
        </div>
        <div className="control no-margin">
          <Inputs
            name="password"
            label="Password"
            id="password"
            type="password"
            onBlur={handlePassBlur}
            onChange={handlePassChange}
            value={password}
            error={passError && "enter a valid password"}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
