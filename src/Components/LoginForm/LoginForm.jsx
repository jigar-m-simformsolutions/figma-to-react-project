import Button from "../design-patterns/Button/Button";
import "./LoginForm.scss";

export default function LoginForm() {
  return (
    <form className="login-form">
      <div className="input-box">
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="Email" />
      </div>
      <div className="input-box">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" />
      </div>
      <div className="forgot-password-section">
        <label>
          <input type="checkbox" />
          Keep me signed in
        </label>
        <a href="/reset-password" className="">
          Forgot Password?
        </a>
      </div>
      <Button block>Sign In</Button>
    </form>
  );
}
