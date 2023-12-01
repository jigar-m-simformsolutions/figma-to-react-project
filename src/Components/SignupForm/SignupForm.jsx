import Button from "../design-patterns/Button/Button";
import "./SignupForm.scss";

export default function SignupForm() {
  return (
    <form className="signup-form">
      <div className="input-box">
        <label htmlFor="name">Your name*</label>
        <input id="name" type="text" placeholder="Your Name" />
      </div>
      <div className="input-box">
        <label htmlFor="email">Email address*</label>
        <input id="email" type="email" placeholder="Email" />
      </div>
      <div className="input-box">
        <label htmlFor="password">Password*</label>
        <input id="password" type="password" placeholder="Password" />
      </div>
      <div className="form-checkbox">
        <label>
          <input type="checkbox" />
          Agree to terms & conditions
        </label>
      </div>
      <Button block>Sign Up</Button>
    </form>
  );
}
