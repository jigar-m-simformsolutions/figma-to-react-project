import { withLayout } from "../../Components/Layout/WithLayout/WithLayout";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Divider from "../../Components/design-patterns/Divider/Divider";
import GoogleSigninButton from "../../Components/design-patterns/GoogleSigninButton/GoogleSigninButton";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <div className="login-page-container ">
      <h1 className="top-text ">Welcome back.</h1>

      <GoogleSigninButton>Sign in with Google</GoogleSigninButton>

      <Divider> Or Sign In with Your Email</Divider>

      <LoginForm />

      <p className="last-section mt-6 font-semibold">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="">
          Sign up now
        </a>
      </p>
    </div>
  );
}

const hoc = withLayout({ shouldNavbarShow: true, shouldFooterShow: false })(
  LoginPage
);
export default hoc;
