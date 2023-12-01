import { withLayout } from "../../Components/Layout/WithLayout/WithLayout";
import SignupForm from "../../Components/SignupForm/SignupForm";
import Divider from "../../Components/design-patterns/Divider/Divider";
import GoogleSigninButton from "../../Components/design-patterns/GoogleSigninButton/GoogleSigninButton";
import "./signuppage.scss";

function SignupPage() {
  return (
    <>
      <div className="signup-page-container">
        <h1 className="top-text">Let&apos;s join us</h1>

        <GoogleSigninButton>Sign in with Google</GoogleSigninButton>

        <Divider>Or sign up with your email</Divider>

        <SignupForm />

        <p className="last-section">
          Already have an account? <a href="/login">Sign in now</a>
        </p>
      </div>
    </>
  );
}
const hoc = withLayout({ shouldNavbarShow: true, shouldFooterShow: false })(
  SignupPage
);
export default hoc;
